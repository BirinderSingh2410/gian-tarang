import UserModel from "@/app/models/User";
import { dbConnect } from "@/lib/db";
import { ErrorResponse, SuccessResponse } from "@/lib/response";
import { SignupSchema } from "@/lib/validation/Auth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = SignupSchema.safeParse(body);
    if (!validatedData.success) {
      return ErrorResponse({
        error: validatedData.error,
        status: 400,
      });
    }
    const data = validatedData.data;
    await dbConnect();
    const existingUser = await UserModel.findOne({ username: data.username });
    if (existingUser) {
      return ErrorResponse({ error: "Username already exist!", status: 400 });
    }
    // const hashPassword = await bcrypt.hash(data.password, 10);
    // data.password = hashPassword;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userdata } = data;
    await UserModel.create(userdata);
    return SuccessResponse({ message: "User has been created" });
  } catch (error) {
    return ErrorResponse({ error: error as Error, status: 500 });
  }
}
