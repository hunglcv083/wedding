import { Form, FormControl, FormField, FormItem, FormLabel,  } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
const Editor = () => {
    const form = useForm()
    return (
        <div className="">
                    <h3 className="font-[600] text-[20px] leading-[32px]">Profile information</h3>
                    <div className="flex my-auto mt-[45px]">
                        <div className="w-[96px] h-[96px] rounded-[48px] overflow-hidden">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <button className="text-[#fff] w-[253px] bg-[#16B6D4] h-[54px] my-auto ml-8 rounded-[27px] px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[24px] flex mx-auto items-center">
                        <div className="mx-auto flex items-center ">
                            <span className="mr-2">Upload new picture</span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.13465 1.5026C7.13465 0.995362 6.70196 0.610107 6.20122 0.610107C5.70047 0.610107 5.26778 0.995361 5.26778 1.5026V5.10752H1.41717C0.916423 5.10752 0.483734 5.49278 0.483734 6.00001C0.483734 6.50724 0.916423 6.8925 1.41717 6.8925H5.26778V10.4974C5.26778 11.0047 5.70047 11.3899 6.20121 11.3899C6.70196 11.3899 7.13465 11.0047 7.13465 10.4974V6.8925H10.9853C11.486 6.8925 11.9187 6.50724 11.9187 6.00001C11.9187 5.49278 11.486 5.10752 10.9853 5.10752H7.13465V1.5026Z" fill="white" stroke="white" stroke-width="0.5" stroke-linecap="round"/>
                            </svg>
                        </div>                 
                        </button>
                        <button className="text-[#16B6D4] border-4 border-[#16B6D4] w-[142px] h-[54px] my-auto ml-2 bg-[#fff] rounded-[27px] px-[18px] py-[8px] font-[700] text-[16px] leading-[24px] flex mx-auto items-center">
                        <div className="mx-auto items-center">
                            <span className="mr-2">Remove</span>
                        </div>                 
                        </button>
                    </div>
                    <h3 className="font-[600] text-[16px] leading-[20px] mt-10">Uploaded</h3>
                    <div className="grid grid-cols-4 gap-8 w-[638px] h-[136px] rounded-[20px] overflow-hidden mt-6">
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <button className="text-[#fff] w-[638px] bg-[#16B6D4] h-[54px] my-auto mt-4 rounded-[27px] px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[20px] flex mx-auto items-center">
                        <span className="mx-auto">See more</span>
                    </button>
                        <Form {...form}>
                            <form action="">
                                <FormField
                                    control={form.control}
                                    name="xxx"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Display name
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
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
                                    name="xxx"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Display name
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
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
                                    name="xxx"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Display name
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
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
                                    name="xxx"
                                    render={({field}) => (
                                    <FormItem className="mt-8 gap-8">
                                        <FormLabel className="flex font-[600] text-[14px] items-center">
                                            Display name
                                            <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5"/>
                                            </svg>
                                        </FormLabel>                                
                                        <FormControl  className="">
                                            <Input {...field}/>
                                        </FormControl>                               
                                    </FormItem>
                                    )}
                                />
                                <Button variant={"cus1"} className="mt-8">Save</Button>
                            </form>
                        </Form>          
                                            
                </div>  
    )
}

export default Editor