"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaApple, FaGoogle, FaMeta } from "react-icons/fa6";
import { signIn } from "next-auth/react";

type PropsType = {
  callbackUrl: string;
};

export function LoginForm({
  callbackUrl,
  className,
  ...props
}: React.ComponentProps<"div"> & PropsType) {
  const form = useForm();

  const handleLoginGoogle = async () => {
    await signIn("google", { callbackUrl });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Selamat Datang</h1>
                  <p className="text-muted-foreground text-balance">
                    Silahkan masuk ke akun Tarmu Online anda
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    onClick={handleLoginGoogle}
                    variant="outline"
                    type="button"
                    className="w-full cursor-pointer"
                  >
                    <FaGoogle />
                    <span className="sr-only">Login with Google</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full cursor-pointer"
                  >
                    <FaMeta />
                    <span className="sr-only">Login with Meta</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full cursor-pointer"
                  >
                    <FaApple />
                    <span className="sr-only">Login with Apple</span>
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Atau masuk dengan
                  </span>
                </div>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="Masukkan email anda"
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-my-primary hover:bg-my-primary/70"
                >
                  Masuk
                </Button>

                <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                  Dengan mengklik lanjutkan, Anda menyetujui{" "}
                  <Link href="#">Persyaratan Layanan</Link> and{" "}
                  <Link href="#">Kebijakan Privasi</Link> kami.
                </div>
              </div>
            </form>
          </Form>

          <div className="bg-muted relative hidden md:block">
            <Image
              src="/images/login-img.jpg"
              alt="Image"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
