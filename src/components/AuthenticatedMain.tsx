import { Header } from "@/components/elements/Header";
import { AppSidebar } from "../components/elements/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import LoaderGif from "./elements/LoaderGif";

const AuthenticatedMain = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoaderGif />;
  }

  const isLoggedIn = !!session;

  return isLoggedIn ? (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="px-safe" style={{ width: "100%" }}>
          <div className="justify-self-center" style={{ width: "95%" }}>
            <Header />
            <div style={{ width: "100%" }}>{children}</div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  ) : (
    <main className="px-safe" style={{ width: "100%" }}>
      <div className="justify-self-center" style={{ width: "95%" }}>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </main>
  );
};

export default AuthenticatedMain;
