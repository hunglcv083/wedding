import { Link } from "react-router-dom"
type listItemType = {
    id_cate: number,
    name_cate: string,
    image_sample: string
}
const Category = ({templates}:any) =>{    
    return(
        <>
            <div className="md:grid grid-cols-3 gap-8 mt-8">
            {templates.slice(0,25).map((temp:listItemType,index:number)=>(
                <div className="mt-8 md:mt-0" key={index}>
                               
                        <div className="border-[2px] border-[#f3e5e5] shadow-lg shadow-[#fdd3d3] rounded-3xl p-[24px] md:p-[24px] mt-2">
                        <div className="block ">
                            <img
                                alt="Art"
                                src={temp.image_sample}
                                className="w-full md:h-96 md:hover:scale-105 object-cover"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 text-[24px] md:ml-4">{temp.name_cate}</h3>

                            <Link to={`/listtemplate/${temp.id_cate}`}><button className="mt-3 w-[100px] h-[30px] rounded-3xl bg-[#fab0b0] text-white md:ml-[80px] hover:bg-white hover:text-[#ff8989] hover:border-[#ff8989] hover:border-2">Start</button></Link>
                            </div>
                        </div>
                        </div>
                            ))
                            }
                            </div>
        </>
    )
}
export default Category