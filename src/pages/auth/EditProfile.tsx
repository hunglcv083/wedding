
import Header from "../../components/Header"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"

const EditProfile = () =>{

    const {id} = useParams()
    const navi = useNavigate()
    const logOut = () =>{
        localStorage.clear();
        navi('/')
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
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto p-[24px] w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex gap-8">
                <div className="transition-transform -translate-x-full sm:translate-x-0 w-[280px]">
                    <div className="bg-white dark:bg-gray-800 ">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to={`edit/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-3">Edit Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`account/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-3">Account</span>
                                </Link>
                            </li>
                            <li>
                                <span onClick={()=>{confirm('Are you fucking sure?')&&logOut()}} className="flex cursor-pointer items-center p-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-3 flex">Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
</span>
                                </span>
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