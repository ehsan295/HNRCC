import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {useForm} from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { Link } from 'react-router-dom'

const formSchema = z.object({
  email:z.string().min(3, 'لطفا ایمیل را وارد کنید.').email('ابمبل نامعتبر.'),
  password:z.string().min(1,'لطفا رمز عبور را وارد کنید.').min(6,'رمز عبور باید حداقل ۶ نویسه باشد.').max(20, 'رمز عبور باید حداکثر ۲۰ نویسه باشد.'),
})

  
  
  

function Signin() {
      const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    
      email:'',
      password:''

    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post('localhost:3000',values)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
    console.log(values)
  }
  return (
    <div className="w-screen h-screen flex justify-center mx-auto items-center">
       <div className='w-96 p-10 bg-slate-200 rounded-md space-y-8'>
        <div className=''>
          <img className='mx-auto w-16' src='./vite.svg'/>
        </div>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
              <FormLabel>رمز عبور</FormLabel>
              <FormControl>
                <Input type='password' placeholder="رمز عبور" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
   
        <Button className='w-full' type="submit">ورود</Button>
      </form>
    </Form>
  <div className="my-1">
  <Link className='hover:text-blue-800 active:text-indigo-800 font-medium' to='/signin'>حساب کاربری دارید؟</Link>
  </div>
    </div>
    </div>
  )
}

export default Signin