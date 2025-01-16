"use client"
import { useState } from 'react'
import dynamic from 'next/dynamic'
// import Navbar from '../ui/navbar'
import Navbar from '../../ui/navbar'
import Hero from '../../ui/hero'
import Nav from '../nav'

// Client Components:
const ComponentC = dynamic(() => import('../../components/logins'), { ssr: false })
// const ComponentD = dynamic(() => import('./components/tv'))
 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
    {/* <Navbar/> */}
    {/* <Hero/> */}
    <Nav/>
    <ComponentC/>
    </div>
  )
}