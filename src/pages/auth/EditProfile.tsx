
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import Header from "../../components/Header"
const EditProfile = () =>{

    const {id} = useParams()
    const navi = useNavigate()
    const logOut = () =>{
        localStorage.clear();
        navi('/')
    }
    const [currentFunc, setCurrentFunc] = useState("Edit Profile")
    const handleChangeFunc = (current:string) =>{
            setCurrentFunc(current)
        console.log(currentFunc)
    }
    return(
        <>
            <div className="bg-[#F2FDFF]">
            <Header/>
            <div className="pb-[70px] pt-[40px]">
                <Link to={'/'} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#808080" className="w-10 h-10 float-right mr-[40px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] m-[30px] mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto md:w-[1020px] w-[390px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8 md:p-[24px]">
                <div className="transition-transform -translate-x-full sm:translate-x-0 w-[280px] hidden md:block">
                    <div className="bg-white">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to={`/profile/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`edit/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">Edit Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`account/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">Account</span>
                                </Link>
                            </li>
                            <li>
                                <span onClick={()=>{confirm('Are you fucking sure?')&&logOut()}} className="flex cursor-pointer items-center p-2 text-slate-500 hover:text-black rounded-lg hover:bg-gray-100  group">               
                                <span className="ms-3 flex">Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
                                </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                <div className="">
                
                </div>
                </div>
                <div className="md:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger asChild className="mx-auto">
                    <Button variant="outline2" className="w-[345px] justify-between ml-6 mt-3 outline-none"> 
                    <span>{currentFunc}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#6F767E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[345px] bg-white p-2">
                  <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                    
                    className="w-full bg-[#fff] hover:bg-accent hover:text-accent-foreground p-2 rounded-lg"
                    >
                    <Link to={`/profile/${id}`} ><button>My Profile</button></Link>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                    
                    className="w-full bg-[#fff] hover:bg-accent hover:text-accent-foreground p-2 rounded-lg mt-2"
                    >
                    <Link to={`edit/${id}`} ><button onClick={()=>handleChangeFunc("Edit Profile")}> Profile</button></Link>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuCheckboxItem
                    
                    className="w-full bg-[#fff] hover:bg-accent hover:text-accent-foreground p-2 rounded-lg mt-2"
                    >
                    <Link to={`account/${id}`} ><button onClick={()=>handleChangeFunc("Change Password")}>Change Password</button></Link>
                    </DropdownMenuCheckboxItem>                 
                </DropdownMenuContent>
                </DropdownMenu>
                </div>
                 <Outlet/>              
                </div>
                
            </div>
            </div>
        </>
    )
}
export default EditProfile