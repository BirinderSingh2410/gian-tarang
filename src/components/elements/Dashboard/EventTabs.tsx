"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Cake,
  Bell,
  Briefcase,
  HeartPulse,
  CalendarDays,
  Medal,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EventsData, RecentNotificationI } from "@/types/Dashboard/dashboard";
import { ElementType } from "react";

interface CardContents {
  Icon: ElementType;
  title: string;
  eventData: Array<EventsData>;
}

interface EventLablesInterface {
  Logo: ElementType;
  title: string;
  description: string;
}
interface IconDataI {
  [key: string]: ElementType;
}
const IconData: IconDataI = {
  holiday: CalendarDays,
  award: Medal,
  user: Avatar,
};

function EventLabels({
  Logo = Avatar,
  title = "",
  description = "",
}: EventLablesInterface) {
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

function CardContents({
  Icon = Bell,
  title = "",
  eventData = [],
}: CardContents) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex">
          <Icon className="mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ScrollArea className="h-[400px] w-100">
          {eventData.map((data: EventsData, index) => (
            <div key={index}>
              <EventLabels
                Logo={IconData[data.type]}
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
interface EventPropsI {
  className: string;
  data: RecentNotificationI;
}
export function EventTabs({ className = "", data = {} }: EventPropsI) {
  return (
    <Tabs defaultValue="events" className={className}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="birthday">{`Birthday's`}</TabsTrigger>
        <TabsTrigger value="work">Work Anniversay</TabsTrigger>
        <TabsTrigger value="leave">{`Leave's`}</TabsTrigger>
      </TabsList>
      <TabsContent value="events">
        <CardContents
          title="Events"
          Icon={Bell}
          eventData={data ? data["eventsData"] : []}
        />
      </TabsContent>
      <TabsContent value="birthday" className="min-h-[220px]">
        <CardContents
          title="Birthday's Celebration"
          Icon={Cake}
          eventData={data ? data["birthdayData"] : []}
        />
      </TabsContent>
      <TabsContent value="work" className="min-h-[220px]">
        <CardContents
          title="Work Anniversay"
          Icon={Briefcase}
          eventData={data ? data["workAnniversaryData"] : []}
        />
      </TabsContent>
      <TabsContent value="leave" className="min-h-[220px]">
        <CardContents
          title="People on Leave"
          Icon={HeartPulse}
          eventData={data ? data["leaveData"] : []}
        />
      </TabsContent>
    </Tabs>
  );
}
