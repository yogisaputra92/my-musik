'use client'


import Image from "next/image";
import Navbar from "../ui/navbar";
import Hero from "../ui/hero";

 
import { useState } from 'react'
import dynamic from 'next/dynamic'

 
// Client Components:
const ComponentC = dynamic(() => import('../components/Trailers'), { ssr: false })

 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ComponentC/>
    </div>
  )
}
