import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function PrivateNotLoggedIn({
  children, 
  allowedRole, 
  redirectedTo = "/", 
  isRouteReplaced = true, 
  extraData = null
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  // const {token = null} = JSON.parse(localStorage.getItem("userinfo")) || {}
  if(!isLoggedIn){
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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if(isLoggedIn){
    return (
      <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    )
  }
  return children
}