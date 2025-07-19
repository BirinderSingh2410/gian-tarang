
import UserModel from "@/app/models/User";
import { dbConnect } from "@/lib/db";
import { SignupSchema } from "@/lib/validation/Auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = SignupSchema.safeParse(body);
    console.log(validatedData)
    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.format() },
        { status: 400 }
      );
    }
    const data = validatedData.data;
    await dbConnect();
    const existingUser = await UserModel.findOne({ username: data.username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exist!" },
        { status: 400 }
      );
    }
    // const hashPassword = await bcrypt.hash(data.password, 10);
    // data.password = hashPassword;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userdata } = data;
    await UserModel.create(userdata);
    return NextResponse.json(
      { message: "User has been created", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went Wrong" }, { status: 500 });
  }
}
