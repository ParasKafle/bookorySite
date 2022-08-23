import React from "react";
import { useState } from "react";
import { Categories } from "../models/categories";
import { Lists } from "../models/lists";
import { BookOpenIcon, UserIcon, HeartIcon, ShoppingBagIcon, ChevronDownIcon, ViewListIcon } from "@heroicons/react/outline";

const Navbar = () => {
    const [category, setCategory] = useState(false);
    const [list, setList] = useState(false);

    const handleListOver = () => {
        setList(true);
    }
    // const handleListLeave = () => {
    //     setList(false);
    // }

    const handleMouseOver = () => {
        setCategory(true);
    }
    const handleMouseLeave = () => {
        setCategory(false);
    }
    return (
        <div className="flex flex-col relative z-20">
            <div className="flex flex-row w-full h-[100px] justify-between shadow-lg px-[300px] bg-white">
                <div className="flex">
                    <h2 className='flex flex-row font-bold text-3xl pt-7'><BookOpenIcon className="w-9 pb-8 text-green-600" />Bookory</h2>
                    <div className="flex px-6">
                        <div className="rounded-[40px] my-7 mx-6 color-1 hover:color-2 text-white w-60 shadow-lg cursor-pointer ">
                            <h3 onMouseOver={handleMouseOver} className="flex flex-row group text-xl justify-between text-left py-2 px-6"><ViewListIcon className="w-5" />Categories<ChevronDownIcon className="w-5 ml-2 bg-transparent group-hover:animate-drop" /></h3>
                            {category && <div><div className="w-[15px] h-[15px] border translate-y-[40px] rotate-45 translate-x-[120px] relative bg-white"></div>
                            <div onMouseLeave={handleMouseLeave} className="w-[250px] border group rounded-lg bg-white mt-8 absolute z-20 divide-y cursor-default">
                                    {Categories.map((item) => {return (
                                        <li key={item.title} className='flex relative list-none text-black text-xl py-3 pt-[3px] hover:color-2 hover:text-white hover:rounded-lg'>
                                            <item.icon className="w-6 h-6 mx-2 mt-[3px]" />{item.title}
                                        </li>
                                    )})}
                                </div></div>}
                        </div>
                        <input className="w-[500px] border border-orange-400 my-7 rounded-3xl px-5" placeholder="Search Products"/>
                    </div>
                </div>
                <div className="flex justify-between w-[100px] divide-x">
                    <UserIcon className="w-8 my-8 px-1 hover:text-orange-400 cursor-pointer hover:animate-beat" />
                    <HeartIcon className="w-8 my-8 ml-0 px-1 hover:text-orange-400 cursor-pointer hover:animate-beat" />
                    <ShoppingBagIcon className="w-8 my-8 px-1 hover:text-orange-400 cursor-pointer hover:animate-beat" />
                </div>
            </div>
            <div className="w-full flex justify-center gap-[60px] mt-[30px] text-xl font-bold">
                {Lists.map((item) => {return (
                    <div className="group h-full">
                        <div className="list-div group" onMouseOver={handleListOver}>{item.title}<ChevronDownIcon className="w-6 pl-2 pt-1 group-hover:text-orange-400" /></div>
                        {list && <div>
                            <div className="absolute bg-white pt-5 divide-y -ml-3 invisible group-hover:visible rounded-lg drop-shadow-lg">
                            {item.subs.map(sub => {
                                return (
                                    <div>
                                        <li className="list-none px-3 py-2 cursor-default hover:bg-orange-400 hover:text-white rounded-lg drop-shadow-lg">{sub.title}</li>
                                    </div>
                                )
                            })}
                        </div></div>}
                    </div>
                )})}
                <div className="cursor-pointer hover:text-orange-400">Contact</div>
            </div>
        </div>
    );
};

export default Navbar;