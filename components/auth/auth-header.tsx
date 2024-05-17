import { cn } from "@/lib/utils";
import { POPPINS } from "@/config/constants/font";

type AuthHeaderProps = {
  label: string;
};

export default function AuthHeader({ label }: AuthHeaderProps) {
  return (
    <div className="justify-center- flex w-full flex-col items-center gap-y-4">
      <h1 className={cn("text-xl font-semibold", POPPINS.className)}>
        🔐 Auth
      </h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
