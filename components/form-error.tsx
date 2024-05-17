import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type FormErrorProps = {
  message?: string;
};

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm font-semibold text-destructive">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
