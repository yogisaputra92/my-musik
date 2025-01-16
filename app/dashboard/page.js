'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from "next/image";
import Navbar from "../ui/navbar";
import Hero from "../ui/hero";

 
import { useState } from 'react'
import dynamic from 'next/dynamic'
import SearchBox from '../components/searchbox';
 
// Client Components:
const ComponentA = dynamic(() => import('../components/upcoming'), { ssr: false })
const ComponentC = dynamic(() => import('../components/populer'), { ssr: false })
const ComponentD = dynamic(() => import('../components/series'), {ssr: false })
 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SearchBox/>
      <ComponentA/>
      <ComponentC/>
      <ComponentD/>
    </div>
  )
}
