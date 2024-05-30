import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import CardWrapper from "@/components/auth/card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something Went Wrong!"
      backButtonLabel="Back To Login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
