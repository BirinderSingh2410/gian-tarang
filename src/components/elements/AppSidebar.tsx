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
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
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
            <Image
              src="assets/Logo.png"
              width={400}
              height={400}
              alt="Logo of the school"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-[70px]">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="mt-2 p-1" key={item.title}>
                  <SidebarMenuButton className='[&>svg]:size-6' asChild>
                    <a href={item.url}>
                      <item.icon width={20} height={20}/>
                      <span className="text-xl">{item.title}</span>
                    </a>
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
