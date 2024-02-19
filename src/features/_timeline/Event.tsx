import { Link, useParams } from "react-router-dom"
import { Dialog, DialogContent } from "../../components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { Button } from "../../components/ui/button"
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../hooks/MyContext"
import { itemType } from "../../common/types/Album"
import axios from "axios"
const Event = () =>{
    const data = useContext(MyContext)
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:'',id_user:''})
    const {id} = useParams()
    let listTemp:itemType[] = []
    let id_user = 0
    let id_album = ''
    let time = ''
    let img_nam = ''
    let img_nu = ''
    const album = data.find(item=>String(item.list_sukien_image[0].id_sk_swap_album)==id)
    if(album){
    listTemp = album.list_sukien_image
    id_user = listTemp[0].id_user
    time = listTemp[0].thoigian_sukien
    img_nam = listTemp[0].link_src_goc.replace('/var/www/build_futurelove','https://futurelove.online/')
    img_nu = listTemp[0].link_tar_goc.replace('/var/www/build_futurelove','https://futurelove.online/')
    id_album = listTemp[0].album.replace('weddingface','')
    }
    const fetchUser = () =>{
        axios.get(`https://databaseswap.mangasocial.online/profile/${id_user}`)
        .then((res) => setUser(res.data))
    }
    useEffect(()=>{
        fetchUser()
    },[id_user])
    return(
        <>
                <div className="mx-auto">       
                    <h2 className="font-bold text-xl mb-3">Author</h2>
                    <div className="flex mb-7">
                    <div className="w-[80px] h-[80px]">
                        {
                              user.link_avatar?.includes("https://futurelove.online")
                              ?
                              <img className="h-full w-full object-cover" src={`${user.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              (
                                user.link_avatar!="https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw"?
                                <img className="h-full w-full object-cover" src={`https://futurelove.online/${user.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="undefind image" />
                              :
                              <img className="h-full w-full object-cover" src={`${user.link_avatar}`} alt="" />
                              )
                            }
                    </div>
                    <div className="block ml-4">
                     <Link to={`/profile/${id_user}`}><span className="text-xl hover:underline font-[500] hover:font-bold cursor-pointer">{user.user_name}</span></Link> <br />
                     <span className="italic text-[10px]">{time}</span>
                    </div>
                    </div>
                    <div className="md:h-[350px] h-[250px] flex justify-between items-center md:px-[100px]">
 
                    <div className="md:h-[250px] md:w-[250px] overflow-hidden ">
                        <img src={img_nam} className="md:h-[250px] md:w-[250px] w-[150px] h-[150px] border-8 border-[#33C5E9] object-cover rounded-full" alt="111" />
                    </div>
                    <div className="w-[100px] h-[100px] hidden md:block">
                        <img src="../../../heart.png" className="object-cover" alt="" />
                    </div>
                    <div className="md:h-[250px] md:w-[250px] overflow-hidden ">
                        <img src={img_nu} className="md:h-[250px] md:w-[250px] w-[150px] h-[150px] border-8 border-[#ed839e] object-cover rounded-full" alt="111" />
                    </div>
                     </div>              
                    <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-2">
                        {
                        listTemp?.slice(0,1).map((image, index) => {
                            const src_img = image.link_da_swap
                            return (
                                <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                <div className="w-[450px] h-[630px] ">
                                <div className="">
                                        <img src={src_img} className=" absolute group-hover:opacity-50 h-full object-cover w-full" alt={`Image ${index}`} key={index} />
             
                                </div> 
                                </div>
                                <div className="absolute">
                                    <Dialog>
                                        <Link to={`/upload/${id_album}`}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />                                       
                                        <DialogTrigger asChild className="">
                                            <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                            group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>                                
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[900px]">
                                            <img src={src_img} className="object-contain" alt={`Image ${index}`} key={index} />
                                        </DialogContent>
                                    </Dialog>
                                </div>  
                                </div>                         
                                )
                                })
                        }
                    <div className="grid grid-cols-2 gap-2">
                                {
                                listTemp?.slice(1,5).map((image, index) => {
                                    const src_img = image.link_da_swap
                                    return (
                                        <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                        <div className="w-[225px] h-[300px] ">
                                        <div className="">
                                                <img src={src_img} className=" absolute group-hover:opacity-50 h-full w-full object-cover" alt={`Image ${index}`} key={index} />
                                                
                                            </div>        
                                        
                                        </div>
                                        <div className="absolute">
                                        <Link to={`/upload/${id_album}`}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />
                                                <Dialog>
                                                <DialogTrigger asChild className="">
                                                <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>                                     
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[900px]">
                                                    <img src={src_img} className="object-contain" alt={`Image ${index}`} key={index} />
                                                </DialogContent>
                                                </Dialog>
                                        
                                                
                                        </div>  
                                        </div>                            
                                    )
                                })
                                }
                    </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                                {
                                listTemp?.slice(5, 49).map((image, index) => {
                                    const src_img = image.link_da_swap
                                    return (
                                        <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                        <div className="w-[225px] h-[300px] ">
                                        <div className="">
                                                <img src={src_img} className=" absolute group-hover:opacity-50 h-full w-full object-cover" alt={`Image ${index}`} key={index} />                                               
                                            </div>                                    
                                    
                                        
                                        </div>
                                        <div className="absolute">
                                        <Link to={`/upload/${id_album}`}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />
                                                <Dialog>
                                                <DialogTrigger asChild className="">
                                                    <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[900px]">
                                                    <img src={src_img} className="object-contain" alt={`Image ${index}`} key={index} />
                                                </DialogContent>
                                                </Dialog>
                                                
                                        </div>  
                                        </div>                                                   
                                    )
                                })
                                }
                    </div>
                    </div>
                    <div className="md:hidden">
                    <div className="grid grid-cols-2 gap-2">
                    {
                        listTemp?.map((image, index) => {
                            const src_img = image.link_da_swap
                            return (
                                <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                <div className="w-[170px] h-[220px] ">
                                <Link to={`/upload/${id_album}`}><div className="">
                                        <img src={src_img} className=" absolute group-hover:opacity-50 h-full object-cover w-full" alt={`Image ${index}`} key={index} />
                                        
                                </div> </Link>
                                </div>
                                </div>                         
                                )
                                })
                        }
                        </div>
                    </div>
                </div>
                
        </>
    )
}
export default Event