import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type CustomInputProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  type: "email" | "password" | "text";
  placeholder: string;
  control: Control<T>;
  disabled?: boolean;
};

export default function CustomInput<T extends FieldValues>({
  label,
  name,
  type,
  control,
  placeholder,
  disabled,
}: CustomInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
