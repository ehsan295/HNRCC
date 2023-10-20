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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { Link } from 'react-router-dom'


const onSubmit:any = async (values:z.infer<typeof formSchema>) => {
  
  try {
    axios.post('http://localhost:3000/signup', values)
  console.log('Posted sucesfully')
  } catch (err) {
    console.log(err)
  }
}


const formSchema = z.object({
  name: z.string().min(2).max(20),
  email:z.string().email(),
  password:z.string().min(2).max(20),
  confirmPassword:z.string().min(2).max(20)
})
.refine((data)=> data.password === data.confirmPassword, {
    message:"رمز عبور یکسان نیست",
    path:["confirmPassword"]
  })
  
  
  

function Signup() {
    const form = useForm()
  return (
    <div className="w-screen h-screen flex justify-center mx-auto items-center">
       <div className='w-96 p-10 bg-slate-200 rounded-md space-y-8'>
        <div className=''>
          <img className='mx-auto w-16' src='./vite.svg'/>
        </div>
         <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
      <div className=''>
            
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>نام</FormLabel>
            <FormControl>
              <Input placeholder="نام" {...field} />
            </FormControl>
            
          </FormItem>
          
        )}
      />
            <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ایمیل</FormLabel>
            <FormControl>
              <Input placeholder="ایمیل" type='email' {...field} />
            </FormControl>
            
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
              <Input placeholder="رمز عبور" type='password' {...field} />
            </FormControl>
            
          </FormItem>
          
        )}
      />
            <FormField
        control={form.control}
        name="confirm-password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>تکرار رمز عبور</FormLabel>
            <FormControl>
              <Input placeholder="تکرار رمز عبور" type='password' {...field} />
            </FormControl>
            
          </FormItem>
          
        )}
      />
      </div>
      <Button className='w-full' type="submit">ثبت نام</Button>
    </form>
  </Form>
  <div className="my-1">
  <Link className='hover:text-blue-800 active:text-indigo-800 font-medium' to='/signin'>حساب کاربری دارید؟</Link>
  </div>
    </div>
    </div>
  )
}

export default Signup