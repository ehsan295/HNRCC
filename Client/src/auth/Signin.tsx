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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const formSchema = z.object({
  email: z.string().min(3, "لطفا ایمیل را وارد کنید.").email("ابمبل نامعتبر."),
  password: z
    .string()
    .min(1, "لطفا رمز عبور را وارد کنید.")
    .min(6, "رمز عبور باید حداقل ۶ نویسه باشد.")
    .max(20, "رمز عبور باید حداکثر ۲۰ نویسه باشد."),
});

function Signin() {
  const navigate = useNavigate();
  const [signinStatus, setSigninStatus] = useState();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const accessToken = localStorage.getItem("token");
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post("http://localhost:5000/api/v1/signin", values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.message) {
          setSigninStatus(res.data.message);
          navigate("/crm");
          console.log(res);
        } else {
          setSigninStatus(res.data[0].name);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="w-screen h-screen flex justify-center mx-auto items-center flex-col gap-4">
      <ModeToggle />
      <Card className="w-96">
        <div className="mt-6">
          <img className="mx-auto w-28 h-28" src="./logo.svg" />
        </div>
        <CardHeader className="space-y-1 gap-x-3">
          <CardTitle className="text-2xl">ورود به حساب کاربری</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

              <Button className="w-full" type="submit">
                ورود
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div>
            <h3 className="font-medium text-red-500">{signinStatus}</h3>
          </div>
        </CardFooter>
        <CardFooter>
          <Link
            className="hover:text-blue-800 active:text-indigo-800  dark:hover:text-gray-500"
            to="/signup"
          >
            حساب کاربری ندارید؟
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signin;
