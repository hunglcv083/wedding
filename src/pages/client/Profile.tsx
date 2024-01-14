
import { useState } from "react"
import Header from "../../components/Header"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { Button } from "../../components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"

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
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto p-[24px] w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex gap-8">
                <div className="w-[340px]">
                    <div className="bg-white border-l-[16px] rounded-xl border-[#16B6D4] pl-11">
                        <div className="w-[256px] h-[256px] rounded-[256px] overflow-hidden">
                        <img src={`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" className="object-cover h-full w-full" />
                        </div>
                        <p className="text-[24px] font-[700] leading-[24px] mt-2">{user.user_name}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">{user.email}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">IP: {user.ip_register}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">Device: {user.device_register}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">Events: {user.count_sukien}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">Comments: {user.count_comment}</p>
                        <p className="text-[18px] font-[400] italic leading-[24px] mt-2">Views: {user.count_view}</p>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="font-[600] text-[40px] leading-[48px] ml-[10px] mb-[30px] mt-[10px]">Library</h1>
                        <div className="grid grid-cols-2 gap-4">
                        {
                        uploadedImage.slice(0,20).map((image, index) => {
                            return (
                                <div key={index} className="group relative overflow-hidden flex items-center justify-center">
                                <div className="w-[300px] h-[300px] hover:scale-150 rounded-2xl overflow-hidden">
                                        <img src={image} className=" absolute  h-full w-full object-cover" alt={`Image ${index}`} />
                                           
                                </div>
                                {/* <div className="absolute">
                                <Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 w-[160px] rounded-3xl">Download</Button> <br />
                                <Dialog>
                                    <DialogTrigger asChild className="">
                                        <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>                                     
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[900px]">
                                            <img src={image} className="" alt={`Image ${index}`} />
                                    </DialogContent>
                                </Dialog>     
                                </div>   */}
                                </div>                            
                            )
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