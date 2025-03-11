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
import { TableHeaders, TableInfoData } from "@/types/Attendance/dto";
import { PaginationComp } from "./PaginationComp";

interface TableInterface {
  rows: TableInfoData[];
  headers: TableHeaders[];
  caption: string;
}

export function TableComp({ rows, headers, caption }: TableInterface) {
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
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.first}</TableCell>
            <TableCell>{row.second}</TableCell>
            <TableCell>{row.third}</TableCell>
            <TableCell>{row.totalPresent}</TableCell>
            <TableCell>{row.totalAbsent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <PaginationComp />
      </TableFooter>
    </Table>
  );
}
