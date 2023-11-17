import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Conferance() {
  return (
    <Card className="col-span-12">
      <CardHeader>
        <CardTitle>اطاق کنفرانس</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardContent>
        <div className="rounded-lg border h-fit flex flex-col gap-3 pb-3">
          <h2 className="font-medium text-2xl m-5">لیست گروه ها</h2>
          <div className=" flex justify-between rounded-lg mx-3">
            <Input
              placeholder="جستجوی گروه..."
              //   value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
              //   onChange={(event) =>
              //     table.getColumn("title")?.setFilterValue(event.target.value)
              //   }
              className="w-64"
            />
            <Button>افزودن گروه</Button>
          </div>
          <Button variant="ghost" className="h-12 rounded-lg mx-2 flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" flex flex-col items-start">
              <h2>گروپ انجینیران</h2>
              <p className="text-gray-400 text-xs">6 عضو</p>
            </div>
          </Button>
          <Button variant="ghost" className="h-12 rounded-lg mx-2 flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" flex flex-col items-start">
              <h2>گروپ انجینیران</h2>
              <p className="text-gray-400 text-xs">6 عضو</p>
            </div>
          </Button>{" "}
          <Button variant="ghost" className="h-12 rounded-lg mx-2 flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" flex flex-col items-start">
              <h2>گروپ انجینیران</h2>
              <p className="text-gray-400 text-xs">6 عضو</p>
            </div>
          </Button>{" "}
          <Button variant="ghost" className="h-12 rounded-lg mx-2 flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" flex flex-col items-start">
              <h2>گروپ انجینیران</h2>
              <p className="text-gray-400 text-xs">6 عضو</p>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
