import { Link, useNavigate, } from "react-router-dom"
import { useToast } from "../../components/ui/use-toast"
import { useEffect, useState } from "react"
import { signup } from "../../services/auth"
import { ToastAction } from "../../components/ui/toast"
import axios from "axios"
import { isMobile } from 'react-device-detect'
const Signup = () => {

    const navi = useNavigate()
    const { toast } = useToast()
    const [userName, ] = useState("New User");
    const [email, setEmail] = useState("");
    const [password, ] = useState("123456");
    const [ipAddress, setIpAddress] = useState("");
    const [deviceRegister, setDeviceRegister] = useState("");

    useEffect(() => {
      fetchIpAddress();
      fetchDeviceDetect();
    }, []);
  
    const fetchIpAddress = async () => {
      const res = await axios.get("https://api.ipify.org", {
        params: {
          format: "json",
        },
      });
      setIpAddress(res.data.ip);
    };
  
    const fetchDeviceDetect = async () => {
      if (isMobile) {
        setDeviceRegister("Mobile");
      } else {
        setDeviceRegister("Desktop");
      }
    };
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
        formData.append("user_name", userName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("ip_register", ipAddress);
        formData.append("device_register", deviceRegister);
        formData.append("link_avatar", `aaa`);
        try {
          const response:any = await signup(formData);
          const { message } = response;
            if(message === "Account already exists!") {
              toast({
                variant: "destructive",
                description: `${message}`,
                action: <ToastAction altText="Try again">Try again</ToastAction>
              })
            }
                else{
                    toast({
                    variant: "default",
                    description: `Your default password is '123456'.Please check your email to verify account!`,
                    });
                    navi('/signin')
            }   
              
          
        } catch (error) {
          console.log(error);
          toast({
            variant: "destructive",
            description: `Fail!!!!`,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }
      };
    return (
      <div className="md:w-[1440px] w-[390px]">
          
          <div className="md:grid grid-cols-2">
              <div className="bg-[#F2FDFF] items-center md:w-[750px] w-[390px]">
                  <header className="pt-[20px] md:pl-[28px] pl-[150px] pb-[20px]">
                    <img src="img\logo.png" alt="" />
                  </header>
                  <img className="px-[29px] mt-[150px] mb-[90px] md:block hidden" src="img\signin.png" alt="" />
              </div>
              <div className="mx-auto md:w-[602px] max-w-screen-xl px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto max-w-lg md:mt-[180px] mt-[80px]">
                              <form onSubmit={handleSubmit} className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" >
                              <h1 className="text-2xl font-bold text-[#2A85FF]-600 sm:text-3xl">Sign Up</h1>
                              <h4 className="text-sm text-black font-[600] mb-[15px]">Sign up with Open accounts</h4>
                              <div className="flex items-center justify-center dark:bg-gray-700 mx-auto">
                                  <button className="w-full px-4 py-2 border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 ">
                                      <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                                      <span>Google</span>
                                  </button>
                              </div>
                              <span className="flex items-center ">
                                  <span className="h-px flex-1 bg-[#EFEFEF] my-[15px]"></span>
                              </span>
                              <h4 className="text-sm text-black font-[600]">Or continue with email address</h4>
                              <div>
                                  <label htmlFor="email" className="sr-only">Email</label>
                                  <div className="relative">
                                  <input
                                      type="email"
                                      defaultValue={email}
                                      onChange={(e:any)=>setEmail(e.target.value)}
                                      className="w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm"
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
                                  Sign up
                              </button>
                              <p className="text-sm text-gray-500">
                                  Already a member?
                                <Link className="underline" to={`/signin`}>Sign in</Link>
                              </p>
                              </form>
                            
                          </div>
                      </div>
              </div>
      </div>
    )
  }
  
  export default Signup
  