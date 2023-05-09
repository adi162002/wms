import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
const PrivateRoutes = () => {
  let auth = {'token':sessionStorage.getItem("response")}
return (
    auth.token ? <Outlet/> : <Navigate to='/'/>
  )
}
export default PrivateRoutes;

