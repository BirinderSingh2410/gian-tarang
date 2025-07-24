import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface SuccessResponseDataI {
  data?: unknown;
  message?: string;
  status?: number;
}

interface ErrorResponseDataI {
  error: Error | ZodError | string;
  status?: number;
}

export const SuccessResponse = ({
  message,
  data,
  status = 200,
}: SuccessResponseDataI) => {
  if (data) {
    return NextResponse.json({ data, success: true }, { status });
  }
  return NextResponse.json({ message, success: true }, { status });
};

export const ErrorResponse = ({ error, status = 500 }: ErrorResponseDataI) => {
  console.log(error);
  if (error instanceof ZodError) {
    return NextResponse.json(
      { message: error.format(), success: false },
      { status }
    );
  } else if (error instanceof String) {
    return NextResponse.json({ message: error, success: false }, { status });
  }
  return NextResponse.json(
    { message: "Something went wrong!", success: false },
    { status }
  );
};
