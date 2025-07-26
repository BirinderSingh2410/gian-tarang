import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookUser,
  Home,
  Settings,
  Presentation,
  BookOpenCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.png";

const items = [
  {
    title: "Home",
    url: "view/dashboard",
    icon: Home,
  },
  {
    title: "Attendance",
    url: "view/attendance",
    icon: Presentation,
  },
  {
    title: "Organization",
    url: "view/organization",
    icon: BookUser,
  },
  {
    title: "Test Marks",
    url: "view/tests",
    icon: BookOpenCheck,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
 
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-[50px]">
            <Link href="/view/dashboard">
              <Image
                src={Logo}
                width={400}
                height={400}
                alt="Logo of the school"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-[70px]">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="mt-2 p-1" key={item.title}>
                  <SidebarMenuButton className="[&>svg]:size-6" asChild>
                    <Link href={"/" + item.url}>
                      <item.icon width={20} height={20} />
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
