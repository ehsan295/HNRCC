import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, "لطفا نام را وارد کنید.")
      .min(2, " نام باید حداقل ۲ حرف باشد.")
      .max(20, "نام باید حداکثر ۲۰ حرف باشد."),
    email: z
      .string()
      .min(3, "لطفا ایمیل را وارد کنید.")
      .email("ابمبل نامعتبر."),
    password: z
      .string()
      .min(1, "لطفا رمز عبور را وارد کنید.")
      .min(6, "رمز عبور باید حداقل ۶ حرف باشد.")
      .max(20, "رمز عبور باید حداکثر ۲۰ حرف باشد."),
    confirmPassword: z
      .string()
      .min(1, "لطفا رمز عبور را وارد کنید.")
      .min(6, "رمز عبور باید حداقل ۶ حرف باشد.")
      .max(20, "رمز عبور باید حداکثر ۲۰ حرف باشد."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور یکسان نیست",
    path: ["confirmPassword"],
  });

function Signup() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post("http://localhost:5000/api/v1/signup", values)
      .then((res) => navigate("/sucess"))
      .catch((err) => console.log(err));
  }
  return (
    <div className=" h-screen flex justify-center mx-auto items-center my-10">
      <Card className="w-96 ">
        <div className="mt-6">
          <img className="mx-auto w-28 h-28" src="./logo.svg" />
        </div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">ثبت نام</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>نام</FormLabel>
                    <FormControl>
                      <Input placeholder="نام" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="ایمیل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>رمز عبور</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="رمز عبور"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>تایید رمز عبور</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="تایید رمز عبور"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                ثبت نام
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link
            className="hover:text-blue-800 active:text-indigo-800 dark:hover:text-gray-500"
            to="/signin"
          >
            حساب کاربری دارید؟
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
