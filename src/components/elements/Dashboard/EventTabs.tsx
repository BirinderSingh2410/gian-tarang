"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  Medal,
  Cake,
  Bell,
  Briefcase,
  HeartPulse,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

function EventLabels({ Logo = null, title = "", description = "" }) {
  console.log(Logo);
  return (
    <div className="flex mb-2 items-center">
      {Logo && Logo === Avatar ? (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      ) : (
        <Logo />
      )}
      <div className="ml-4">
        <p className="text-xl">{title}</p>
        <p className="text-sm text-[#78716C]">{description}</p>
      </div>
    </div>
  );
}

export function EventTabs({ className = "" }) {
  return (
    <Tabs defaultValue="events" className={className}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="birthday">Birthday's</TabsTrigger>
        <TabsTrigger value="work">Work Anniversay</TabsTrigger>
        <TabsTrigger value="leave">Leave's</TabsTrigger>
      </TabsList>
      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle className="flex">
              <Bell className="mr-2" />
              Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-[400px] w-100">
              <EventLabels
                Logo={CalendarDays}
                title="This is the holiday title"
                description="This the description of it"
              />
              <Separator />
              <EventLabels
                Logo={Medal}
                title="This is the sport title"
                description="This is the for sport description"
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="birthday" className="min-h-[220px]">
        <Card>
          <CardHeader>
            <CardTitle className="flex">
              <Cake className="mr-2" />
              Birthday's Celebration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-[400px] w-100">
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="work" className="min-h-[220px]">
        <Card>
          <CardHeader>
            <CardTitle className="flex">
              <Briefcase className="mr-2" />
              Work Anniversay
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-[400px] w-100">
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="leave" className="min-h-[220px]">
        <Card>
          <CardHeader>
            <CardTitle className="flex">
              <HeartPulse className="mr-2" />
              People on Leave
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ScrollArea className="h-[400px] w-100">
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
              <EventLabels
                Logo={Avatar}
                title="Employee Name"
                description="Designation"
              />
              <Separator />
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
