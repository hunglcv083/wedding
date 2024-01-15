import { useState } from "react"

const Pagination = ({itemPerPage, totalItem, paginate}:any) => {
    const pageNumber = []
    for (let i = 1; i<= Math.ceil(totalItem/itemPerPage);i++)
    {
        pageNumber.push(i)
    }
    const [currentButt, setCurrentButt] = useState(pageNumber[0])
    return(
        <>
            <ul className="list-style-none flex mt-6 rounded-2xl items-center justify-center">
                {
                    pageNumber.map((number)=>{
                        return(
                            <li className="ml-2" key={number} onClick={()=>{paginate(number);setCurrentButt(number)}}>
                                 {
                                    number == currentButt 
                                    ? 
                                    <span
                                    className="cursor-pointer relative block bg-transparent px-3 py-1.5 text-[24px] text-black transition-all duration-300 bg-[#4DC8DF] hover:bg-white w-[50px] text-center rounded-2xl border border-[#4DC8DF]"
                                    >{number}
                                    </span> 
                                :
                                    <span
                                    className="cursor-pointer relative block bg-transparent px-3 py-1.5 text-[24px] text-black transition-all duration-300 hover:bg-[#80d2e1] w-[50px] text-center rounded-2xl border border-[#4DC8DF]"
                                    >{number}
                                    </span>
                                 }   
                            </li>
                        )
                    })
                }         
            </ul>
        </>
    )
}
export default Pagination