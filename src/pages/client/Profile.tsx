
import { useState } from "react"
import Header from "../../components/Header"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const Profile = () =>{

    const {id} = useParams()
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:''})
    const [uploadedImage, setUploadedImage] = useState<string[] | []>([]);
    axios.get(`https://metatechvn.store/profile/${id}`)
        .then((res) => setUser(res.data))
    axios.get(`https://metatechvn.store/images/${id}?type=video`).then(res => {
                setUploadedImage(res.data.image_links_video);
        })  

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
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]">{user.user_name}</h1>
                <div className="mx-auto p-[24px] w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex gap-8">
                <div className="transition-transform -translate-x-full sm:translate-x-0 w-[280px]">
                    <div className="bg-white dark:bg-gray-800 ">
                        <img src={`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
                        <p>{user.user_name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-[600] text-[40px] leading-[48px] ml-[10px] mb-[30px] mt-[10px]">Library</h1>
                    <div className="grid grid-cols-2">
                        {
                        uploadedImage.map((image, index) => {
                            return (<img src={image} className="" alt={`Image ${index}`} key={index} />)
                        })
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Profile