import { Header } from "@/components/elements/Header";
import { AppSidebar } from "../components/elements/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { isLoader } from "@/redux/globalSlice";
import { useEffect } from "react";

const AuthenticatedMain = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const isLoggedIn = !!session;

  useEffect(() => {
    console.log(status);
    if (status === "loading") {
      dispatch(isLoader(true));
    } else {
      dispatch(isLoader(false));
    }
  }, [status, dispatch, isLoggedIn]);

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
