import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,  } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import { changePassword } from "../../services/auth"
import { useNavigate, useParams } from "react-router-dom"
import { useToast } from "../../components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import { changePassSchema } from "../../common/schemas/formSchema"
import { useState } from "react"

const Account = () => {
    const [errors, setErrors] = useState({old_password:'', new_password:'', cf_pw:''});
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => {
        setShowPassword(!showPassword);
      };
    const [showPassword1, setShowPassword1] = useState(false);
    const handleToggle1 = () => {
        setShowPassword1(!showPassword1);
      };  
    const [showPassword2, setShowPassword2] = useState(false);
    const handleToggle2 = () => {
        setShowPassword2(!showPassword2);
      };
    const form = useForm<any>({
        defaultValues: {
            old_password:'',
            new_password:'',
            cf_pw:''
        }
    })
    const navi = useNavigate()
    const {id} = useParams()
    const { toast } = useToast()
    const handleSubmit = async (e:any) =>{
    e.preventDefault()
    const {error} = changePassSchema.validate({
        old_password:form.getValues('old_password'),
        new_password:form.getValues('new_password'), 
        cf_pw: form.getValues('cf_pw')}, 
        { abortEarly: false })
    if (error) {
        const validationErrors = {old_password:'', new_password:'', cf_pw:''};
        error.details.forEach((detail) => {
            if(detail.context?.key == 'old_password')
            validationErrors['old_password'] = detail.message;
            if(detail.context?.key == 'new_password')
            validationErrors['new_password'] = detail.message;
            if(detail.context?.key == 'cf_pw')
            validationErrors['cf_pw'] = detail.message;
            });
        setErrors(validationErrors);
        return
    }else{
    setErrors({old_password:'', new_password:'', cf_pw:''})
    const formData = new FormData()
    formData.append('old_password', form.getValues('old_password'))
    formData.append('new_password', form.getValues('new_password'))
    try {
        const response:any = await changePassword(formData, id)
        toast({
            variant: "default",
            description: `Password has been changed! `,
          });
        form.reset()
        return response
    } catch (error:any) {
        console.log(error)
        const { response } = error
        toast({
            variant: "destructive",
            description: `${response.data.detail}`,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
          return;
    }
    }
    }
    return (
        <div className="w-full p-[30px] md:p-0">
                        <h3 className="font-[600] text-[24px] leading-[20px] mt-3">Account</h3>                    
                        <Form {...form}>
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    control={form.control}
                                    name="old_password"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8 relative">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Old password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input type={showPassword ? 'text' : 'password'} {...field}/>
                                        </FormControl>
                                        {
                                                showPassword?
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg></span>
                                                :
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg></span>
                                                }
                                        <FormMessage>{errors.old_password}</FormMessage>                                         
                                    </FormItem>
                                    )}
                                />
                                <div className="md:grid grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="new_password"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8 relative">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            New password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input type={showPassword1 ? 'text' : 'password'} {...field}/>
                                        </FormControl>
                                        {
                                                showPassword1?
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle1()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg></span>
                                                :
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle1()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg></span>
                                                }
                                        <FormMessage>{errors.new_password}</FormMessage>                              
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cf_pw"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8 relative">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Confirm new password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input type={showPassword2 ? 'text' : 'password'} {...field}/>
                                        </FormControl>
                                        {
                                                showPassword2?
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle2()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg></span>
                                                :
                                                <span className="absolute end-4 top-7 inset-y-0  grid cursor-pointer" onClick={()=>handleToggle2()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg></span>
                                                }
                                        <FormMessage>{errors.cf_pw}</FormMessage>                               
                                    </FormItem>
                                    )}
                                />
                                </div>
                                <Button type="submit" variant={"cus2"} className="">Update password</Button>
                            </form>
                        </Form>          
                        <Button onClick={()=>(confirm('Are you sure?')&&navi(-1))} variant={"cus1"} className="mt-8 w-[180px]">Back to profile</Button>     
                </div>  
    )
}

export default Account