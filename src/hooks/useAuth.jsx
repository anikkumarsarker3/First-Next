
"use client"
import { AuthContext } from '@/contexts/AuthContext'
import { use, useContext } from 'react'
// import { useContext } from 'react'


const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
