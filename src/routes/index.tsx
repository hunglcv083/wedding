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
import { useState } from "react"

const Routers = () => {
    const [privateId, setPrivateId] = useState('')
    const handleSetId = (id:string) => setPrivateId(id)
    return (
        <>
            
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='signin' element={<Signin setPrivateId={handleSetId}/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='profile' element={<PrivateRoute privateId={privateId} ><EditProfile/></PrivateRoute>}>
                    <Route path='edit/:id' element={<PrivateRoute privateId={privateId}><Editor/></PrivateRoute>}/>
                    <Route path='account/:id' element={<PrivateRoute privateId={privateId}><Account/></PrivateRoute>}/>
                </Route>
                <Route path="upload" element={<PrivateRoute privateId={privateId}><NewUpload/></PrivateRoute>} />
                <Route path="faceupload" element={<PrivateRoute privateId={privateId}><FaceUpload/></PrivateRoute>} />
                <Route path="generate" element={<PrivateRoute privateId={privateId}><Generate/></PrivateRoute>} />
                <Route path="preview" element={<PrivateRoute privateId={privateId}><Preview/></PrivateRoute>} />
                <Route path="forgotpassword" element={<ForgotPassword/>}/>
            </Routes>
        </>
    )
}
export default Routers