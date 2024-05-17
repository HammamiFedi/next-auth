import CardWrapper from "@/components/auth/card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back 👋"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
}
