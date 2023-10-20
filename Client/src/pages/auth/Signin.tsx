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
import {  useNavigate, Link } from 'react-router-dom'







function Signin() {
  const formSchema = z.object({
    name: z.string().min(2).max(20),
    email:z.string().email(),
    password:z.string().min(2).max(20)
  })
  // const{register, handleSubmit} = useForm({resolver:zodResolver(formSchema)})
  const form = useForm()
  const onSubmit:any = async (values:z.infer<typeof formSchema>) => {
  
  
    try {
      const data=  axios.post('http://localhost:3000/signin', values)
    console.log((await data).status)
    if((await data).status === 200){
      navigate('/crm')
    }
    else{
      console.log('Error')
    }

  
    } catch (err) {
      console.log(err)
    }
  }
  const navigate  = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center items-center mx-auto">
      <div className='w-96 p-10 bg-slate-200 rounded-md space-y-8'>
      <div className=''>
          <img className='mx-auto w-16' src='./vite.svg'/>
        </div>
         <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className=''>
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

      </div>
      <Button className='w-full' type="submit">ورود</Button>
    </form>
  </Form>
  <div className="my-1">
  <Link className='hover:text-blue-800 active:text-indigo-800 font-medium' to='/signin'>حساب کاربری ندارید؟</Link>
  </div>
    </div>
    </div>
  )
}

export default Signin




