"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { LoginSchema } from "@/lib/validation/Auth";
import { useRouter } from "next/navigation";
import showAlert from "../showAlert";

const LoginForm = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        ...form.getValues(),
        redirect: false,
        callbackUrl: `${window.location.origin}/view/dashboard`,
      });
      if (result?.ok) {
        router.push(result.url || "/view/dashboard");
      } else {
        showAlert({ type: "error", message: result?.error || "" });
      }
    } catch (error) {
      console.log(error);
      showAlert({ type: "error", message: "Something went wrong" });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter the username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password should be min 8 characters"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-[100%]">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;
