import GuestRoute from "@/components/fragments/GuestRoute.tsx";
import RegisterLayout from "../components/RegisterLayout";

const RegisterPage = () => {
  return (
    <GuestRoute>
      <RegisterLayout />
    </GuestRoute>
  );
};

export default RegisterPage;
