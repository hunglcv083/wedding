import { Link, useNavigate, } from "react-router-dom"
import { useToast } from "../../components/ui/use-toast"
import { useEffect, useState } from "react"
import { resetPassword, signup } from "../../services/auth"
import { ToastAction } from "../../components/ui/toast"
const ForgotPassword = () => {

    const navi = useNavigate()
    const { toast } = useToast()
    const [email, setEmail] = useState("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();
          
       if (!email) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Email is required!",
          });
          return;        
       }
       
        const formData = new FormData();
        formData.append("email", email);
        try {
          const response:any = await resetPassword(formData);
          const { message } = response;
            if(message !== "Password reset successfully and email sent!") {
              toast({
                variant: "destructive",
                description: `${message}`,
                action: <ToastAction altText="Try again">Try again</ToastAction>
              })
            }
                else{
                    toast({
                    variant: "default",
                    description: `Check your email for the new password!`,
                    });
                    navi('/signin')
            }   
              
          
        } catch (error) {
          console.log(error);
          toast({
            variant: "destructive",
            description: `Email not found!`,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }
      };
    return (
      <div className="w-[1440px]">
          <div className="grid grid-cols-2">
              <div className="bg-[#F2FDFF] items-center w-[750px]">
                  <header className="pt-[20px] pl-[28px]">
                    <img src="img\logo.png" alt="" />
                </header>
                  <img className="px-[29px] mt-[150px] mb-[90px]" src="img\signin.png" alt="" />
              </div>
              <div className="mx-auto w-[602px] max-w-screen-xl px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto max-w-lg mt-[260px]">
                              <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" >
                              <h1 className="text-2xl font-bold text-[#2A85FF]-600 sm:text-3xl">Forgot Password?</h1>
                              <h4 className="text-sm text-black font-[600] mb-[15px]">No worries, we'll send you reset introduction.</h4>
            
                            
                              <div>
                                  <label htmlFor="email" className="sr-only">Email</label>
                                  <div className="relative">
                                  <input
                                      type="email"
                                      defaultValue={email}
                                      onChange={(e:any)=>setEmail(e.target.value)}
                                      className="focus:outline-none w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm"
                                      placeholder="Your email"
                                  />
  
                                  <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                      </svg>
                                  </span>
                                  </div>
                              </div>     
                                                      
                                                    
                              <button
                                  type="submit"
                                  className="block w-full rounded-lg bg-[#2A85FF] px-5 py-3 text-sm font-medium text-white"
                              >
                                  Send
                              </button>
                                <Link className="flex ml-[150px]" to={`/signin`}>
                                  <svg className="mr-2" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.70708 13.7929C9.0976 14.1834 9.0976 14.8166 8.70708 15.2071C8.31655 15.5976 7.68339 15.5976 7.29286 15.2071L1.49997 9.41421C0.718923 8.63317 0.718921 7.36684 1.49997 6.58579L7.29286 0.792894C7.68339 0.402369 8.31655 0.402369 8.70708 0.792894C9.0976 1.18342 9.0976 1.81658 8.70708 2.20711L3.91419 7H18C18.5523 7 19 7.44772 19 8C19 8.55229 18.5523 9 18 9H3.91418L8.70708 13.7929Z" fill="#1A1D1F"/>
                                  </svg>
                                <span className="text-[14px] font-bold text-black leading-4">Back to login</span></Link>                             
                              </form>
                            
                          </div>
                      </div>
              </div>
      </div>
    )
  }
  
  export default ForgotPassword
  