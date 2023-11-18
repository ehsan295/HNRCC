import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "./data/schema";
// import axios from "axios";

export default function ProductList({ data }: { data: Task[] }) {
  // const data:Task[] = axios.get()
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 w-full">
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>dkjfdkl</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable data={data} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
