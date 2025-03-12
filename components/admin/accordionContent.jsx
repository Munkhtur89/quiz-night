import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyAccordionContent = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">#</TableHead>
          <TableHead>Team Name</TableHead>
          <TableHead>Table NO</TableHead>
          <TableHead className="text-center">Tel</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.team_name + "-" + index}>
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell>{item.team_name}</TableCell>
            <TableCell>{item.table_no}</TableCell>
            <TableCell className="text-center">
              {item.phone_number ? item.phone_number : "0"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyAccordionContent;
