import useAuthStore from "@/providers/auth-provider"
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'


const DashBoard = () => {
  const navigate = useNavigate()
  const isLoggedIn = useAuthStore((state: { isLoggedIn: boolean; }) => state.isLoggedIn)
  
  console.log("1", isLoggedIn)
  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  }, [])
  
  return (
    <div>DashBoard</div>

  )
}

export default DashBoard