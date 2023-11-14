import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "./data/schema";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Popup = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Username</Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </>
  );
};
export default function List({ data, title }: { data: Task[]; title: string }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 w-full">
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              data={data}
              columns={columns}
              buttonTitle="بل جدید"
              dialogContent={<Popup />}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
