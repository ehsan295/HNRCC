import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "./data/schema";

export default function ProductList({
  data,
  buttonTitle,
  cardTitle,
  dialogContent,
}: {
  data: Task[];
  buttonTitle: string;
  cardTitle: string;
  dialogContent: any;
}) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 w-full">
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              data={data}
              columns={columns}
              buttonTitle={buttonTitle}
              dialogContent={dialogContent}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
