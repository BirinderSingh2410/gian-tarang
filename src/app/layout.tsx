"use client";

import AuthenticatedMain from "@/components/AuthenticatedMain";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="pt-safe">
        <SessionProvider>
          <AuthenticatedMain>{children}</AuthenticatedMain>
          <footer className="pb-safe"></footer>
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
