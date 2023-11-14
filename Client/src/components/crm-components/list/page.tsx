import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function List({ data, title }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 w-full">
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={data} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
