import { LayoutsIndex } from "@/components";
import DateProvider from "@/contexts/Date";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);

  if (router.pathname === "/login" || router.pathname === "/register" || router.pathname === "/forgetpassword") {
    return <Component {...pageProps} />;
  }

  return (
    <DateProvider>
      <LayoutsIndex>
        <Component {...pageProps} />
      </LayoutsIndex>
    </DateProvider>
  );
}
