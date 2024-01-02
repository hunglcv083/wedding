
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"

const EditProfile = () =>{
    return(
        <>
            <div className="bg-[#F2FDFF]">
            <Header/>
            <div className="pb-[70px] pt-[40px]">
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto p-[24px] w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex gap-8">
                <div className="transition-transform -translate-x-full sm:translate-x-0 w-[280px]">
                    <div className="bg-white dark:bg-gray-800 ">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-3">Edit Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-3">Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet/>                 
                </div>
                
            </div>
            </div>
        </>
    )
}
export default EditProfile