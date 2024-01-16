import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Signin from "../pages/auth/Signin"
import Signup from "../pages/auth/Signup"
import EditProfile from "../pages/auth/EditProfile"
import Editor from "../features/_profiles/Editor"
import Account from "../features/_profiles/Account"
import NewUpload from "../pages/upload_image/NewUpload"
import FaceUpload from "../pages/upload_image/FaceUpload"
import Generate from "../pages/upload_image/Generate"
import Preview from "../pages/upload_image/Preview"
import ForgotPassword from "../pages/auth/ForgotPassword"
import PrivateRoute from "../components/PrivateRouter"
import Profile from "../pages/client/Profile"
import ListTemplate from "../pages/client/ListTemplate"
import PrivateUser from "../components/PrivateUser"
import ListCategory from "../pages/client/ListCategories"

const Routers = () => {
    // const [, setPrivateId] = useState('')
    // const handleSetId = (id:string) => setPrivateId(id)
    return (
        <>
            
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='signin' element={<Signin />}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='profile' element={<PrivateUser><PrivateRoute><EditProfile/></PrivateRoute></PrivateUser>}>
                    <Route path='edit/:id' element={<PrivateRoute ><Editor/></PrivateRoute>}/>
                    <Route path='account/:id' element={<PrivateRoute ><Account/></PrivateRoute>}/>
                </Route>
                <Route path="upload" element={<PrivateRoute ><NewUpload/></PrivateRoute>} />
                <Route path="faceupload" element={<PrivateRoute ><FaceUpload/></PrivateRoute>} />
                <Route path="generate" element={<PrivateRoute ><Generate/></PrivateRoute>} />
                <Route path="preview" element={<PrivateRoute ><Preview/></PrivateRoute>} />
                <Route path="forgotpassword" element={<ForgotPassword/>}/>
                <Route path="profile/:id" element={<Profile/>}/>
                <Route path="listtemplate/:id" element={<ListTemplate/>}/>
                <Route path="listcategories" element={<ListCategory/>}/>
            </Routes>
        </>
    )
}
export default Routers