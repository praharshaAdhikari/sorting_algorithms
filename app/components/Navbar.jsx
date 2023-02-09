"use client";
import { Kelly_Slab } from "@next/font/google"; 
import { FaSortAmountDownAlt } from "react-icons/fa"
import { useState } from "react";

const kelly_slab = Kelly_Slab({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-kelly-slab",
  });
  
const Navbar = (props) => {
  const [isSelected, setIsSelected] = useState({
    home: true,
    bubble_sort: false,
    quick_sort: false
  });
  const handleClick = (id) => {
    setIsSelected({
      home: false,
      bubble_sort: false,
      quick_sort: false,
      [id]: true
    });
  }

  const sectionsArray = ["home", "bubble sort" ,"quick sort"];
  const sectionsEl = sectionsArray.map((item)=>{
    let itemModified = item.split(' ').join('_');
    return(
      <a key={sectionsArray.indexOf(item)} href={`#${itemModified}`} className={`text-transform: uppercase ml-20 ${isSelected[itemModified] ? `text-yellow-400` : `text-white`} hover:text-yellow-400 duration-200 active:text-yellow-700 xsm:hidden xl:inline`} onClick={()=>handleClick(itemModified)}>{item}</a>
    )
  })
  return (
    <div className={`mb-1 px-16 w-full xl:h-20 xsm:h-16 flex items-center fixed border-b border-zinc-600 xsm:justify-center xl:justify-between ${props.scrolled ? `backdrop-blur-3xl bg-navBlur shadow-nav` : ``} duration-100`}>
      <a href="/" className={(kelly_slab.variable) + " font-serif xl:text-2xl xsm:text-xl text-yellow-400 text-transform: uppercase flex items-center"}>
        Sorting_Algorithms_Visualizer{'\u00A0'}<FaSortAmountDownAlt />
      </a>
      <div className="">
        {sectionsEl}
      </div>
    </div>
  )
}

export default Navbar;