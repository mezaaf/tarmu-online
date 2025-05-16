import GuestRoute from "@/components/fragments/GuestRoute.tsx";
import LoginLayout from "../components/LoginLayout";

const LoginPage = () => {
  return (
    <GuestRoute>
      <LoginLayout />
    </GuestRoute>
  );
};

export default LoginPage;
