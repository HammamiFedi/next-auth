"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import CustomInput from "@/components/custom-input";
import CardWrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { RegisterSchemaType } from "@/types";
import { register } from "@/actions/auth";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const registerForm = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: RegisterSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        registerForm.reset();
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account 🚀"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...registerForm}>
        <form
          className="space-y-6"
          onSubmit={registerForm.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <CustomInput<RegisterSchemaType>
              name="name"
              type="text"
              label="Username"
              placeholder="John Doe"
              control={registerForm.control}
              disabled={isPending}
            />
            <CustomInput<RegisterSchemaType>
              name="email"
              type="email"
              label="Email"
              placeholder="john.doe@gmail.com"
              control={registerForm.control}
              disabled={isPending}
            />
            <CustomInput<RegisterSchemaType>
              name="password"
              type="password"
              label="Password"
              placeholder="*** *** **"
              control={registerForm.control}
              disabled={isPending}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button className="w-full" type="submit" disabled={isPending}>
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
