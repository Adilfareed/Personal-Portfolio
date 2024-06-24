import Navebar from "@/Components/Navebar/Navebar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navebar/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
