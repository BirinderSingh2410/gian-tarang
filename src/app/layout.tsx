import { AppSidebar } from "../components/elements/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { Header } from "@/components/elements/Header";

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
        <header className="pt-safe"></header>
        <SidebarProvider>
          <AppSidebar />
          <main className="px-safe" style={{ width: "100%" }}>
            <div className="justify-self-center" style={{ width: "95%" }}>
              <Header />
              <div style={{ width: "100%" }}>{children}</div>
            </div>
          </main>
        </SidebarProvider>
        <footer className="pb-safe"></footer>
      </body>
    </html>
  );
}
