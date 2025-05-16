import supabase from "@/lib/supabase/client";
import { useRouter } from "next/router";
import { useEffect, type PropsWithChildren } from "react";
import { toast } from "sonner";

const GuestRoute = (props: PropsWithChildren) => {
  const router = useRouter();

  useEffect(() => {
    const getLogedinUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        await router.push("/");
        toast.error("Anda sudah login.");
      }
    };
    void getLogedinUser();
  }, [router]);
  return props.children;
};
export default GuestRoute;
