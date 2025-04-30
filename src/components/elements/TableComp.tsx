import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableHeaders } from "@/types/Attendance/dto";
import { ElementType } from "react";
import { Button } from "@/components/ui/button";
// import { PaginationComp } from "./PaginationComp";

interface TableInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  headers: TableHeaders[];
  caption: string;
  keys: string[];
  ButtonIcon?: ElementType;
  buttonFn?: (index: number) => void;
}

export function TableComp({
  rows,
  headers,
  caption,
  keys,
  ButtonIcon,
  buttonFn,
}: TableInterface) {
  return (
    <Table className="mt-6">
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={header.width ? "w-[" + header.width + "]" : ""}
            >
              {header.data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {keys.map((key, ind) => (
              <TableCell key={ind}>{row[key]}</TableCell>
            ))}
            {ButtonIcon ? (
              <TableCell>
                <Button
                  onClick={buttonFn ? () => buttonFn(index) : () => undefined}
                >
                  <ButtonIcon />
                </Button>
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>{/* <PaginationComp /> */}</TableFooter>
    </Table>
  );
}
