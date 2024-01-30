import { useContext } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "../../hooks/MyContext"
const LineCard = () =>{ 
    const data = useContext(MyContext)
    return(
        <>
            <div className="md:grid grid-cols-3 gap-8">
                {
                    data.map((item:any,index:number)=>{
                        return(
                            <div className="mt-8 md:mt-0" key={index}>
                               
                        <div className="border-[2px] border-[#f3e5e5] shadow-lg shadow-[#fdd3d3] rounded-3xl p-[24px] md:p-[24px] mt-2">
                        <div className="block ">
                            <img
                                alt="Art"
                                src={item.list_sukien_image[0].link_da_swap}
                                className="w-full md:h-96 md:hover:scale-105 object-cover"
                            />

                            <h3 className="mt-4 text-lg italic text-gray-900 text-[12px] md:ml-8">{item.list_sukien_image[0].thoigian_sukien}</h3>

                            <Link to={`event/${item.list_sukien_image[0].id_sk_swap_album}`}><button className="mt-3 w-[100px] h-[30px] rounded-3xl bg-[#fab0b0] text-white md:ml-[80px] hover:bg-white hover:text-[#ff8989] hover:border-[#ff8989] hover:border-2">View Detail</button></Link>
                            </div>
                        </div>
                            </div>
                        )
                    })
                }                                  
            </div>
        </>
    )
}
export default LineCard