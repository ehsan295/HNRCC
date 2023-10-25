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
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from "react"

const formSchema = z.object({
  email:z.string().min(3, 'لطفا ایمیل را وارد کنید.').email('ابمبل نامعتبر.'),
  password:z.string().min(1,'لطفا رمز عبور را وارد کنید.').min(6,'رمز عبور باید حداقل ۶ نویسه باشد.').max(20, 'رمز عبور باید حداکثر ۲۰ نویسه باشد.'),
})

  
  
  

function Signin() {
const navigate = useNavigate()
const [signinStatus, setSigninStatus] = useState()

      const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:'',
      password:''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post('http://localhost:5000/api/v1/signin',values)
    .then(res=> {
      console.log(res.data)
      if (res.data.message){
        setSigninStatus(res.data.message)
      }else{
        setSigninStatus(res.data[0].name)
        navigate('/crm')

      }
    })
    .catch(err=> console.log(err))
    
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
    <div>
      <h3 className="font-medium text-red-500">{signinStatus}</h3>
    </div>
  <div className="my-1">
  <Link className='hover:text-blue-800 active:text-indigo-800 font-medium' to='/signin'>حساب کاربری دارید؟</Link>
  </div>
    </div>
    </div>
  )
}

export default Signin