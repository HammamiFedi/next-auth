"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormError from "@/components/form-error";
import CustomInput from "@/components/custom-input";
import CardWrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LogionSchema } from "@/schemas";
import { LogionSchemaType } from "@/types";
import { login } from "@/actions/auth";

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const loginForm = useForm<LogionSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LogionSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LogionSchemaType) => {
    setError("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
      });
    });
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
              name="email"
              type="email"
              label="Email"
              placeholder="john.doe@gmail.com"
              control={loginForm.control}
              disabled={isPending}
            />
            <CustomInput<LogionSchemaType>
              name="password"
              type="password"
              label="Password"
              placeholder="*** *** **"
              control={loginForm.control}
              disabled={isPending}
            />
          </div>
          <FormError message={error} />
          <Button className="w-full" type="submit" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
