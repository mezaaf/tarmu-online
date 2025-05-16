import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginFormShema, type LoginFormSchema } from "../forms/login";
import { LoginFormInner } from "./LoginFormInner";

const LoginLayout = () => {
  const form = useForm<LoginFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormShema),
  });

  const handleLoginSubmit = () => {
    console.log("login");
  };
  return (
    <div className="grid min-h-svh w-full lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-tosca text-lg font-bold md:text-2xl">
              tarmu<span className="text-gold">web</span>.
            </h1>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Form {...form}>
              <LoginFormInner
                onLoginSubmit={handleLoginSubmit}
                type="login"
                isLoading={false}
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/history-img2.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default LoginLayout;
