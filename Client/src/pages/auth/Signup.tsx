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

const formSchema = z.object({
  name: z.string().min(1,'لطفا نام را وارد کنید.').min(2,' نام باید حداقل ۲ نویسه باشد.').max(20, 'نام باید حداکثر ۲۰ نویسه باشد.'),
  email:z.string().min(3, 'لطفا ایمیل را وارد کنید.').email('ابمبل نامعتبر.'),
  password:z.string().min(1,'لطفا رمز عبور را وارد کنید.').min(6,'رمز عبور باید حداقل ۶ نویسه باشد.').max(20, 'رمز عبور باید حداکثر ۲۰ نویسه باشد.'),
  confirmPassword:z.string().min(1,'لطفا رمز عبور را وارد کنید.').min(6,'رمز عبور باید حداقل ۶ نویسه باشد.').max(20, 'رمز عبور باید حداکثر ۲۰ نویسه باشد.'),
})
.refine((data)=> data.password === data.confirmPassword, {
    message:"رمز عبور یکسان نیست",
    path:["confirmPassword"]
  })
  
  
  

function Signup() {
  const navigate= useNavigate()
      const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:'',
      password:'',
      confirmPassword:''

    },
  })

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post('http://localhost:5000/api/v1/signup',values)
    .then(res =>
      navigate('/sucess')
      )
    .catch(err => console.log(err))
    
  }
  return (
    <div className="w-screen h-screen flex justify-center mx-auto items-center">
       <div className='w-96 p-10 bg-slate-200 rounded-md space-y-8'>
        <div className=''>
          <img className='mx-auto w-16' src='./vite.svg'/>
        </div>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
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
                        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تایید رمز عبور</FormLabel>
              <FormControl>
                <Input type='password' placeholder="تایید رمز عبور" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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