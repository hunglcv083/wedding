
import './App.css'
import Routers from './routes'
import { MyContext } from './hooks/MyContext';
import { listItemType } from './common/types/Album';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState<listItemType[]>([])
  useEffect(()=>{
    axios.get(`https://metatechvn.store/get/list_image/all_wedding_time`)
    .then(res=>setData(res.data))  
  },[]) 
  return (
    <>
            <MyContext.Provider value={data}>
              <Routers/>
            </MyContext.Provider>
    </>
  )
}
export default App
