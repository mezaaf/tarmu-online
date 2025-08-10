import { LoginForm } from "./_components/LoginForm";

const LoginPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) => {
  const callbackUrl = (await searchParams).callbackUrl ?? "/";
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm callbackUrl={callbackUrl} />
      </div>
    </div>
  );
};

export default LoginPage;
