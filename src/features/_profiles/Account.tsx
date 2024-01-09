import { Form, FormControl, FormField, FormItem, FormLabel,  } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import axios from "axios"
import { changePassword } from "../../services/auth"
import { useNavigate, useParams } from "react-router-dom"
import { useToast } from "../../components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

const Account = () => {
    const form = useForm({
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
    const formData = new FormData()
    formData.append('old_password', form.getValues('old_password'))
    formData.append('new_password', form.getValues('new_password'))
    try {
        const response:any = await changePassword(formData, id)
        toast({
            variant: "default",
            description: `Password has been changed! `,
          });
        return response
    } catch (error) {
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
    return (
        <div className="w-full">
                        <h3 className="font-[600] text-[24px] leading-[20px] mt-3">Account</h3>                    
                        <Form {...form}>
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    control={form.control}
                                    name="old_password"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Old password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input {...field}/>
                                        </FormControl>                               
                                    </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="new_password"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            New password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input {...field}/>
                                        </FormControl>                               
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cf_pw"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Confirm new password
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input {...field}/>
                                        </FormControl>                               
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