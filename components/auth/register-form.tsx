import CardWrapper from "@/components/auth/card-wrapper";

export default function RegisterForm() {
  return (
    <CardWrapper
      headerLabel="Create an account first"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
    >
      RegisterForm
    </CardWrapper>
  );
}
