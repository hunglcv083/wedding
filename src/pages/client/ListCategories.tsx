
import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { Link } from "react-router-dom"
import axios from "axios"
import Category from "../../features/_template/Category"
import Pagination from "../../components/Pagination"
type listItemType = {
        id_cate: number,
        name_cate: string,
        image_sample: string
}
const ListCategory = () =>{

    const [listTemp, setListTemp] = useState<listItemType[]|[]>([{id_cate:0, name_cate:'',image_sample:''}]);
    useEffect(()=>{
        axios.get(`https://api.santacall.online/get/categories_wedding`).then(res => {
                setListTemp(res.data.categories_all);                
        })
    },[])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage] = useState(5)
    const indexOfLastItem = currentPage * itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentItems = listTemp.slice(indexOfFirstItem,indexOfLastItem)
    const paginate = (number:number) => setCurrentPage(number)
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
                <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring gap-8 items-center justify-center mt-11">
                <div className="">
                    <h1 className="font-[600] text-[40px] leading-[48px] text-center mb-[10px] mt-[10px]">The Category</h1>
                    <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] text-center mt-[10px]">Choose a Category that's right for you to start creating these once-in-a-lifetime images</h5>
                    <div className="overflow-hidden">
                        <Category templates={currentItems}/>
                        <Pagination itemPerPage={itemPerPage} totalItem={listTemp.length} paginate={paginate}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ListCategory