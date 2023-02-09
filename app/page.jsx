"use client";
import { useState, useEffect } from "react";
import BubbleSort from "./components/BubbleSort";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import QuickSort from "./components/QuickSort";

const Page = ()=> {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  const handleScroll = () => {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  }
  return(
    <div className= "bg-neutral-900 scroll-smooth">
      <Navbar scrolled = {isScrolled}/>
      <Home/>
      <BubbleSort/>
      <QuickSort/>
    </div>
  )
}

export default Page;