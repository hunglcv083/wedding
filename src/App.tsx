
import './App.css'
import Routers from './routes'
import { MyContext } from './hooks/MyContext';
import { listItemType } from './common/types/Album';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from './components/ui/use-toast';
function App() {
  const [data, setData] = useState<listItemType[]>([])
  useEffect(()=>{
    axios.get(`https://databaseswap.mangasocial.online/get/list_image/all_wedding_time`)
    .then(res=>setData(res.data))
  },[])
  const {toast} = useToast()
  const curent_date = new Date()
  const today = curent_date.toLocaleDateString('vi-VN',{day:'numeric',month:'numeric',year:'numeric'})
  const lastLoginDay = localStorage.getItem('lastLoginDate')
  const [day2,month2,year2] = today.split('/');
  const date2 = new Date(`${year2}-${month2}-${day2}`)
  if (lastLoginDay) {
    const [day1,month1,year1] = lastLoginDay.split('/');
    const date1 = new Date(`${year1}-${month1}-${day1}`)
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
    const days = Math.round(Math.abs((date2.getTime() - date1.getTime()) / millisecondsPerDay));
    if(days==7) {
      toast({
        variant: "destructive",
        description: `Your session has expired!`
      });
      localStorage.clear()
    }
  } 
  return (
    <>
            <MyContext.Provider value={data}>
              <Routers/>
            </MyContext.Provider>
    </>
  )
}
export default App
