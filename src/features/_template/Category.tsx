import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
type listItemType = {
    id_cate: number,
    name_cate: string,
    image_sample: string
}
const Category = ({templates}:any) =>{    
    return(
        <>
            {templates.slice(0,5).map((temp:listItemType,index:number)=>(
                <div className="" key={index}>
                                <div className="relative h-[429px] bg-[#4DC8DF] w-[950px] mt-11 md:block hidden" key={temp.id_cate}>
                                    <div className=""><div className="absolute left-[40px] top-[40px]">
                                    <h1 className="font-[700] text-[40px]">{temp.name_cate}</h1>
                                    <ul className="list-disc w-[450px] text-white text-[16px] font-[400]">
                                        <li className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
    
                                            <span>Wishing you a healthy family and generations of beautiful children</span>
                                            </li>
                                            <li className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-11">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
    
                                            <span>Marriage is the meeting of two hearts to share love and pain, always still be one. Congratulations!</span>
                                            </li>
                                            <li className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
    
                                            <span>Wishing you all the health, and happiness in the world, on your wedding</span>
                                            </li>
                                            <li className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>
    
                                            <span>I congratulate you wholeheartedly on your blissful marriage. May the significant bond fruit everlasting felicity on your new family.</span>
                                            </li>
                                    </ul>
                                    <Link to={`/listtemplate/${temp.id_cate}`}><Button variant={"cus4"} className="mt-6 w-[200px] ml-[40px]">Start</Button></Link>
                                    </div>
                                    </div>
                                
                                <div className="">  
                                        <div className="w-[380px] h-[429px] left-[571px] absolute overflow-hidden">
                                            <img className="w-full h-full object-cover" src={`${temp.image_sample}`} alt="" />
                                        </div>
                                       
                                </div>
                        </div>
                        <div className="border-[2px] border-[#fab0b0] rounded-3xl p-[24px] mt-11 md:hidden">
                        <div className="block ">
                            <img
                                alt="Art"
                                src={temp.image_sample}
                                className="h-64 w-full object-contain sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 text-[24px]">{temp.name_cate}</h3>

                            <p className="mt-2 max-w-sm text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
                            </p>
                            <Link to={`/listtemplate/${temp.id_cate}`}><button className="mt-3 w-[100px] h-[30px] rounded-3xl bg-[#fab0b0] text-white">Start</button></Link>
                            </div>
                        </div>
                        </div>
                            ))
                            }
        </>
    )
}
export default Category