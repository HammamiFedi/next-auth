import Link from "next/link";

import { Button } from "@/components/ui/button";

type BackButtonProps = {
  label: string;
  href: string;
};

export default function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button className="w-full font-normal" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
