
import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { Dialog, DialogContent } from "../../components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { Button } from "../../components/ui/button"
type listItemType = {
        id: number,
        mask: string,
        thongtin: string,
        image: string,
        dotuoi: string,
        IDCategories: number
}
const ListTemplate = () =>{
    const {id} = useParams()
    const [listTemp, setListTemp] = useState<listItemType[]|[]>([]);
    useEffect(()=>{
        axios.get(`https://api.santacall.online/get/list_image_wedding/1?album=${id}`).then(res => {
                setListTemp(res.data.list_sukien_video);                
        })

    },[])
    
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
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]"></h1>
                <div className="mx-auto p-[24px] w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring gap-8 items-center justify-center">
                <div className="">
                    <h1 className="font-[600] text-[40px] leading-[48px] text-center mb-[10px] mt-[10px]">The Template</h1>
                    <h5 className="font-[400] italic text-[20px] leading-[20px] text-center mb-[30px] mt-[10px]">Choose a template that's right for you to start creating these once-in-a-lifetime images</h5>
                    <div className="grid grid-cols-2 gap-2">
                        {
                        listTemp.slice(0,1).map((image, index) => {
                            const src_img = image.image
                            return (
                                <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                <div className="w-[450px] h-[630px] ">
                                <div className="">
                                        <img src={src_img} className=" absolute group-hover:opacity-50 h-full object-cover w-full" alt={`Image ${index}`} key={index} />
                                        
                                </div> 
                                </div>
                                <div className="absolute">
                                    <Dialog>
                                        <Link to={'/upload'}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />                                       
                                        <DialogTrigger asChild className="">
                                            <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                            group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>                                
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[900px]">
                                            <img src={src_img} className="" alt={`Image ${index}`} key={index} />
                                        </DialogContent>
                                    </Dialog>
                                </div>  
                                </div>                         
                            )
                        })
                        }
                        <div className="grid grid-cols-2 gap-2">
                        {
                        listTemp.slice(1,5).map((image, index) => {
                            const src_img = image.image
                            return (
                                <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                <div className="w-[225px] h-[300px] ">
                                <div className="">
                                        <img src={src_img} className=" absolute group-hover:opacity-50 h-full w-full object-cover" alt={`Image ${index}`} key={index} />
                                        
                                    </div>        
                                
                                </div>
                                <div className="absolute">
                                <Link to={'/upload'}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />
                                        <Dialog>
                                        <DialogTrigger asChild className="">
                                        <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>                                     
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[900px]">
                                            <img src={src_img} className="" alt={`Image ${index}`} key={index} />
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
                        listTemp.slice(5, 29).map((image, index) => {
                            const src_img = image.image
                            return (
                                <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                <div className="w-[225px] h-[300px] ">
                                <div className="">
                                        <img src={src_img} className=" absolute group-hover:opacity-50 h-full w-full object-cover" alt={`Image ${index}`} key={index} />
                                        
                                    </div>                                    
                               
                                 
                                </div>
                                <div className="absolute">
                                <Link to={'/upload'}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] rounded-3xl">Create Now!</Button></Link> <br />
                                         <Dialog>
                                        <DialogTrigger asChild className="">
                                            <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                        group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl">View Detail</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[900px]">
                                            <img src={src_img} className="" alt={`Image ${index}`} key={index} />
                                        </DialogContent>
                                        </Dialog>
                                        
                                </div>  
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
export default ListTemplate