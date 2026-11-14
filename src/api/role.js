import{jwtDecode} from "jwt-decode"
export function getRole(){
   const token = localStorage.getItem("token")
   if(!token) return null
   try {
      const decoded = jxtDecode(token)
      return decoded.role
   }catch(error){
      return null
   }
}