import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import List from "./list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";
import { Label } from "recharts";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Popup() {
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
}

export default function CRMPage() {
  return (
    <>
      <div className="hidden flex-col md:flex w-full">
        <div className="flex-1 space-y-4 mt-4 w-full">
          <div className="flex flex-col w-full gap-4">
            <List
              data={Tasks}
              buttonTitle="بل جدید"
              cardTitle="گدام"
              dialogContent={<Popup />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
