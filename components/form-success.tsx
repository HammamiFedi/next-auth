import { CheckCircledIcon } from "@radix-ui/react-icons";

type FormSuccessProps = {
  message?: string;
};

export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm font-semibold text-emerald-500">
      <CheckCircledIcon className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
