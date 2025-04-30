import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardDetailsInfo, DetailsInfo } from "@/types/Organisation/dto";

const IndividualsDetail = ({
  detailsData = [],
  type = "students",
}: CardDetailsInfo) => {
  return (
    <ScrollArea className="h-[490px] w-90 rounded-md p-10 m-4">
      <div className="flex flex-wrap justify-evenly">
        {detailsData.map((data: DetailsInfo,index: number) => (
          <Card
            key={index}
            className="flex flex-wrap justify-center mb-4"
            style={{ width: "300px", height: "400px" }}
          >
            <CardContent className="mt-4">
              <Image
                className="border border-silver-200 rounded-xl"
                src={data.imageLink}
                width={200}
                height={200}
                alt="Logo of the school"
              />
              <div className="text-lg mt-4 text-center font-bold">
                <p>{data.name}</p>
                <p>{data.department}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href={
                  type == "students"
                    ? `/students?id=${data.id}`
                    : `/employees?id=${data.id}`
                }
              >
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default IndividualsDetail;
