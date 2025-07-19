import UserInfo from "@/components/elements/Organisation/UserInfo";
import React from "react";

const page = async({ params }: { params: Promise<{ report: [string] }> }) => {
   const { report } = await params;
   
  return <UserInfo report={report}/>;
};

export default page;
