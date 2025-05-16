import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { LoginFormSchema } from "../forms/login";

type LoginFormInnerProps = {
  onLoginSubmit: (values: LoginFormSchema) => void;
  isLoading?: boolean;
  type: string;
};

export const LoginFormInner = (props: LoginFormInnerProps) => {
  const form = useFormContext<LoginFormSchema>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form
      onSubmit={form.handleSubmit(props.onLoginSubmit)}
      className={cn("flex flex-col gap-6")}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Selamat Datang</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Masukkan email anda untuk mendaftar
        </p>
      </div>
      <div className="grid gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Masukkan Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kata Sandi</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormLabel htmlFor="showPassword" className="-mt-5 font-normal">
          <Checkbox
            id="showPassword"
            checked={showPassword}
            onCheckedChange={(checked) => setShowPassword(!!checked)}
          />
          Tampilkan kata sandi
        </FormLabel>
        <Button
          disabled={props.isLoading}
          type="submit"
          className="w-full cursor-pointer"
        >
          Daftar
        </Button>
      </div>
    </form>
  );
};
