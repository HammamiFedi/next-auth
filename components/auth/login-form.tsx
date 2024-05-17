"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { LogionSchema } from "@/schemas";
import { LogionSchemaType } from "@/types";
import CustomInput from "../custom-input";

export default function LoginForm() {
  const loginForm = useForm<LogionSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LogionSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LogionSchemaType) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back 👋"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...loginForm}>
        <form className="space-y-6" onSubmit={loginForm.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <CustomInput<LogionSchemaType>
              control={loginForm.control}
              type="email"
              placeholder="john.doe@gmail.com"
              name="email"
            />
            <CustomInput<LogionSchemaType>
              name="password"
              control={loginForm.control}
              placeholder="*** *** **"
              type="password"
            />
          </div>
          <FormError message="Invalid Credentials" />
          <FormSuccess message="Email has been sent" />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
