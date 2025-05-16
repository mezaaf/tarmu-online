import { type AppType } from "next/app";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageContainer } from "@/components/layouts/PageContainer";
import { Toaster } from "@/components/ui/sonner";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
};

export default MyApp;
