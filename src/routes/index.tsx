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

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='signin' element={<Signin/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='profile' element={<EditProfile/>}>
                    <Route path='edit' element={<Editor/>}/>
                    <Route path='account' element={<Account/>}/>
                </Route>
                <Route path="upload" element={<NewUpload/>} />
                <Route path="faceupload" element={<FaceUpload/>} />
                <Route path="generate" element={<Generate/>} />
            </Routes>
        </>
    )
}
export default Routers