"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export function Header() {
  const {data} = useSession()
  return (
    <Card
      className="mb-4 mt-2 h-20"
      style={{ backgroundColor: "hsl(var(--sidebar-background))" }}
    >
      <CardHeader className="flex-row justify-between items-center p-4">
        <div className="flex items-center">
          <SidebarTrigger className="md:hidden" />
          <p className="text-xl">{data?.user.fullName}</p>
        </div>
        <div className="flex justify-evenly items-center w-24">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Settings />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30 mr-5">
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
    </Card>
  );
}
