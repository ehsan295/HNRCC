import React from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Link } from "react-router-dom";

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "productName must be at least 2 characters.",
  }),

  projectLocation: z.string().min(2, {
    message: "ProjectLocation must be at least 2 characters.",
  }),
});
interface Data {
  projectId: number;
  projectName: string;
  projectLocation: string;
  createdAt: string;
}
type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface ProjectSwitcherProps extends PopoverTriggerProps {}

export default function ProjectSwicher({ className }: ProjectSwitcherProps) {
  const [data, setData] = React.useState<Data[]>([]);
  const [open, setOpen] = React.useState(false);
  const [showNewProjectDialog, setShowNewProjectDialog] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Data>(
    data[0] || <p>loading...</p>
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post("http://localhost:5000/api/v1/project", values)
      .then((res) => console.log("sucessfully fetched", res))
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project"
        );
        setData(response.data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const projectID = data;
  return (
    <Dialog open={showNewProjectDialog} onOpenChange={setShowNewProjectDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="اضافه کردن پروژه"
            className={cn("w-[200px] justify-between", className)}
          >
            {selectedProject.projectName
              ? selectedProject.projectName
              : "انتخاب پروژه"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="جستجوی پروژه ها" className="pr-2" />
              <CommandEmpty>پروژه پیدا نشد</CommandEmpty>
              <CommandGroup key={1} heading="لیست پروژه ها">
                {data.map((data) => (
                  <Link to="/">
                    <CommandItem
                      key={data.projectId}
                      onSelect={() => {
                        setSelectedProject(data);
                        setOpen(false);
                      }}
                      className="text-sm"
                    >
                      {data.projectName}
                      <CheckIcon
                        className={cn(
                          "mr-auto h-4 w-4",
                          selectedProject.projectName === data.projectName
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewProjectDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="ml-2 h-5 w-5" />
                    اضافه کردن پروژه
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافه کردن پروژه</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="نام پروژه" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="موقعیت پروژه" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">افزودن پروژه جدید</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
