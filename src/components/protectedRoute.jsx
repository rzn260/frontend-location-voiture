import { getRole } from "../api/role"
import { Navigate } from "react-router-dom"
export default function ProtectedRoute({role, children}) {
   const currentrole=getRole()
   if(currentrole!==role){
      return <Navigate to='/login'/>
   }
   return children
}
