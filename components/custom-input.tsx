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
  name: FieldPath<T>;
  type: "email" | "password" | "text";
  placeholder: string;
  control: Control<T>;
};

export default function CustomInput<T extends FieldValues>({
  name,
  type,
  control,
  placeholder,
}: CustomInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
