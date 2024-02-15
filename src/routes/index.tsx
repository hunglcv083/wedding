import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Signin from "../pages/auth/Signin"
import Signup from "../pages/auth/Signup"
import EditProfile from "../pages/auth/EditProfile"
import Editor from "../features/_profiles/Editor"
import Account from "../features/_profiles/Account"
import NewUpload from "../pages/swap_image/NewUpload"
import Generate from "../pages/swap_image/Generate"
import Preview from "../pages/swap_image/Library"
import ForgotPassword from "../pages/auth/ForgotPassword"
import PrivateRoute from "../components/PrivateRouter"
import Profile from "../pages/client/Profile"
import ListTemplate from "../pages/client/ListTemplate"
import PrivateUser from "../components/PrivateUser"
import ListCategory from "../pages/client/ListCategories"
import Timeline from "../pages/client/Timeline"
import Event from "../features/_timeline/Event"
import LineCard from "../features/_timeline/LineCard"
import FunnyVideo from "../pages/client/FunnyVideo"
import NewUploadVideo from "../pages/swap_video/NewUploadVideo"
import ListVideoTemplate from "../pages/client/ListVideoTemplate" 
import EventVideo from "../features/_funnyvideo/Event"
import Policy from "../pages/Policy"
import AboutUs from "../pages/AboutUs"
const Routers = () => {
    // const [, setPrivateId] = useState('')
    // const handleSetId = (id:string) => setPrivateId(id)
    return (
        <>
            
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/policy' element={<Policy/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='signin' element={<Signin />}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='profile' element={<PrivateUser><PrivateRoute><EditProfile/></PrivateRoute></PrivateUser>}>
                    <Route path='edit/:id' element={<PrivateRoute ><Editor/></PrivateRoute>}/>
                    <Route path='account/:id' element={<PrivateRoute ><Account/></PrivateRoute>}/>
                </Route>
                <Route path="upload/:id" element={<PrivateRoute ><NewUpload/></PrivateRoute>} />
                <Route path="generate" element={<PrivateRoute ><Generate/></PrivateRoute>} />
                <Route path="library/:id" element={<Preview/>} />
                <Route path="forgotpassword" element={<ForgotPassword/>}/>
                <Route path="profile/:id" element={<Profile/>}/>
                <Route path="listtemplate/:id" element={<ListTemplate/>}/>
                <Route path="listcategories" element={<ListCategory/>}/>
                <Route path="timeline" element={<Timeline/>}>
                    <Route path='' element={<LineCard/>}/>
                    <Route path='event/:id' element={<Event/>}/>
                </Route>
                <Route path="funnyvideo" element={<FunnyVideo/>}></Route>
                <Route path="uploadvideo/:id" element={<PrivateRoute ><NewUploadVideo/></PrivateRoute>}/>
                <Route path="listvideotemplate" element={<ListVideoTemplate/>} />
                <Route path="funnyvideo/detail/:id_user/:id_sukien" element={<EventVideo/>} />
            </Routes>
        </>
    )
}
export default Routers