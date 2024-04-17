import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
type RowType = {
  id: string;
  name: string;
  phone: string;
  pincode: string;
  date: Date;
  prescriptionUrl: string;
  active: Boolean;
  setId: React.Dispatch<React.SetStateAction<string>>;
};
const convertDateToString = (d: Date) => {
  let date = new Date(d);

  // Get the year, month, and day
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0, so we add 1
  let day = String(date.getDate()).padStart(2, "0");

  // Combine them into the desired format
  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
export default function Row({
  id,
  name,
  phone,
  pincode,
  date,
  prescriptionUrl,
  active,
  setId,
}: RowType) {
  return (
    <TableRow
      className={cn(active ? "bg-accent" : "")}
      onClick={() => {
        setId(id);
      }}
    >
      <TableCell>
        <div className="font-medium">{name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          +{phone}
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        <Link href={prescriptionUrl}>
          <Badge className="text-xs" variant="secondary">
            Link
          </Badge>
        </Link>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{pincode}</TableCell>

      <TableCell className="hidden md:table-cell">
        {convertDateToString(date)}
      </TableCell>
    </TableRow>
  );
}
