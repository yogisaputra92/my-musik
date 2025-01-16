'use client'


import Image from "next/image";
import Navbar from "../../ui/navbar";
import Hero from "../../ui/hero";

 
import { useState } from 'react'
import dynamic from 'next/dynamic'
import SearchBox from "../../components/searchbox";

 
// Client Components:
const ComponentC = dynamic(() => import('../../components/series'), { ssr: false })

 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SearchBox/>
      <ComponentC/>
    </div>
  )
}
