"use client";
import LoginForm from "@/components/elements/Auth/LoginForm";
import RegisterForm from "@/components/elements/Auth/RegisterForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const Page = () => {
  const [isLogIn, setIsLoginIn] = useState<boolean>(true);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Card className="w-full max-w-sm">
        {isLogIn ? (
          <div>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your Username below to login to your account
              </CardDescription>
              <Button variant="secondary" onClick={() => setIsLoginIn(false)}>
                Register new user
              </Button>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </div>
        ) : (
          <div>
            <CardHeader>
              <CardTitle>Sign Up to your account</CardTitle>
              <CardDescription>
                Enter your details below to register to your account
              </CardDescription>
              <Button variant="secondary" onClick={() => setIsLoginIn(true)}>
                Already have an account ?
              </Button>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Page;
