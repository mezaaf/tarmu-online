import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { registerFormShema, type RegisterFormSchema } from "../forms/register";
import { RegisterFormInner } from "./RegisterFormInner";

const RegisterLayout = () => {
  const form = useForm<RegisterFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormShema),
  });

  const handleRegisterSubmit = async () => {
    console.log("register");
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
          <div className="w-full max-w-xs space-y-8">
            <Form {...form}>
              <RegisterFormInner
                type="register"
                // isLoading={registerIsPending}
                onRegisterSubmit={handleRegisterSubmit}
              />
            </Form>
            <div className="flex w-full items-center gap-4">
              <div className="h-[1px] flex-1 border-t-2" />
              <span className="text-xs whitespace-nowrap">Atau</span>
              <div className="h-[1px] flex-1 border-t-2" />
            </div>
            <Button variant={"outline"} className="w-full cursor-pointer">
              <FcGoogle />
              Daftar dengan Google
            </Button>
            <p className="self-start text-start text-sm">
              Sudah punya akun?{" "}
              <Link href={"/auth/login"} className="font-semibold">
                Masuk
              </Link>
            </p>
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

export default RegisterLayout;
