import React, { useState } from "react";
import { SelectComp } from "@/components/elements/SelectComp";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { FilterData } from "@/types/Organisation/dto";

const FilterSection = ({departmentData = [], filterHeading = '', section = '', totalSection = 0 }: FilterData) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  
  return (
    <Card className="flex mt-4 justify-evenly text-3xl p-6 font-semibold text-center flex-wrap">
      <div className="mt-2">
        <p className="mb-4">{filterHeading}</p>
        <div>
          <SelectComp
            selectTitle={filterHeading}
            values={departmentData}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="mt-2">
        <p>Total {section}</p>
        <p>{totalSection}</p>
      </div>
    </Card>
  );
};

export default FilterSection;
