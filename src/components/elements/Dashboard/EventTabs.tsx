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
import { EventsData } from "@/types/charts";

function EventLabels({ Logo = Avatar, title = "", description = "" }) {
  return (
    <div className="flex mb-2 items-center mt-2">
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

function CardContents({ Icon = Bell, title = "", eventData = [] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex">
          <Icon />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ScrollArea className="h-[400px] w-100">
          {eventData.map((data: EventsData, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index}>
              <EventLabels
                Logo={data.eventIcon}
                title={data?.title}
                description={data.description}
              />
              <Separator />
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
export function EventTabs({ className = "" }) {
  const eventsData: Array<EventsData> = [
    {
      title: "This is the holiday title",
      description: "This the description of it",
      eventIcon: CalendarDays,
    },
    {
      title: "This is the sport title",
      description: "This is the for sport description",
      eventIcon: Medal,
    },
  ];

  const birthdayData: Array<EventsData> = [
    {
      title: "Employee Name 1",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      eventIcon: Avatar,
    },
  ];
  const workAnniversaryData: Array<EventsData> = [
    {
      title: "Employee Name 1",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      eventIcon: Avatar,
    },
  ];
  const leaveData: Array<EventsData> = [
    {
      title: "Employee Name 1",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 2",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 3",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 4",
      description: "Designation",
      eventIcon: Avatar,
    },
    {
      title: "Employee Name 5",
      description: "Designation",
      eventIcon: Avatar,
    },
  ];
  return (
    <Tabs defaultValue="events" className={className}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="birthday">Birthday's</TabsTrigger>
        <TabsTrigger value="work">Work Anniversay</TabsTrigger>
        <TabsTrigger value="leave">Leave's</TabsTrigger>
      </TabsList>
      <TabsContent value="events">
        <CardContents title="Events" Icon={Bell} eventData={eventsData} />
      </TabsContent>
      <TabsContent value="birthday" className="min-h-[220px]">
        <CardContents
          title="Birthday's Celebration"
          Icon={Cake}
          eventData={birthdayData}
        />
      </TabsContent>
      <TabsContent value="work" className="min-h-[220px]">
        <CardContents
          title="Work Anniversay"
          Icon={Briefcase}
          eventData={workAnniversaryData}
        />
      </TabsContent>
      <TabsContent value="leave" className="min-h-[220px]">
        <CardContents
          title="People on Leave"
          Icon={HeartPulse}
          eventData={leaveData}
        />
      </TabsContent>
    </Tabs>
  );
}
