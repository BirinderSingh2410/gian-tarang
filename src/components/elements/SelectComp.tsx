import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectPropsInterface {
    selectTitle: string,
    values: string[],
    selectedOption: string,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectComp({selectTitle, values, selectedOption, setSelectedOption}:SelectPropsInterface) {
  
  return (
    <Select onValueChange={setSelectedOption} value={selectedOption}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={"Select a " + selectTitle} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            values.map((data, index) => (
                <SelectItem key={index} value={data}>{data}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
