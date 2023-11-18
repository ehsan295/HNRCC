import { DataTable } from "./components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "./data/schema";

export default function List({ data }: { data: Task[] }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 w-full">
        <Card className="col-span-12">
          <DataTable />
        </Card>
      </div>
    </>
  );
}
