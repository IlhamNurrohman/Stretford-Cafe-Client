import React from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateNotLoggedIn({
  children, 
  allowedRole, 
  redirectedTo = "/", 
  isRouteReplaced = true, 
  extraData = null
}) {
  const {token = null} = JSON.parse(localStorage.getItem("userinfo")) || {}
  if(!token){
    return (
      <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    )
  }
  // if(allowedRole !== "admin"){
  //   return (
  //     <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
  //   )
  // }
  return children
}

export function PrivateLoggedIn({
  children, 
  allowedRole, 
  redirectedTo = "/", 
  isRouteReplaced = true, 
  extraData = null
}) {
  const {token = null} = JSON.parse(localStorage.getItem("userinfo")) || {}
  if(token){
    return (
      <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    )
  }
  return children
}