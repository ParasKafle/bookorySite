import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";
import * as Img from "../../assets/icons/index";

const Footer = () => {
    return (
        <div className="flex flex-col w-full h-[450px] bg-[#282828] mt-14">
            <div id="top" className="flex w-full h-[350px] border-b-[1px] justify-center items-center gap-10">
                <div id="left" className="flex flex-col w-[300px] h-[300px] mt-10">
                    <h2 className='flex flex-row font-bold text-3xl pt-7 text-white'><BookOpenIcon className="w-9 pb-8 text-green-600" />Bookory</h2>
                    <p className="w-[200px] text-white">1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                    <h2 className="w-[110px] mt-7 text-white underline cursor-pointer font-medium hover:text-orange-400">Show On Map</h2>
                    <div className="w-[170px] h-full flex justify-between mt-5">
                        <img className="w-[30px] h-[30px] cursor-pointer hover:scale-110" src={Img.facebookIcon} alt="" />
                        <img className="w-[30px] h-[30px] cursor-pointer hover:scale-110" src={Img.twitterIcon} alt="" />
                        <img className="w-[30px] h-[30px] cursor-pointer hover:scale-110" src={Img.instagramIcon} alt="" />
                        <img className="w-[30px] h-[30px] cursor-pointer hover:scale-110" src={Img.pinterestIcon} alt="" />
                    </div>
                </div>
                <div className="w-[1px] h-[250px] bg-black"></div>
                <div id="right" className="flex w-[1000px] h-[300px] justify-between">
                    <div id="help" className="flex flex-col text-white mt-10">
                        <h1 className="text-2xl font-medium mt-2 mb-5">Need Help</h1>
                        <h1 className="text-4xl text-orange-600 font-extrabold mb-5">+(84) - 1800 - 4635</h1>
                        <p className="w-[200px]">Monday – Friday: 9:00-20:00 Saturday: 11:00 – 15:00</p>
                        <h2 className="text-2xl mt-4">contact@example.com</h2>
                    </div>
                    <div id="explore" className="flex flex-col text-white mt-10">
                        <h1 className="text-2xl font-medium mt-2 mb-5">Explore</h1>
                        <div className="flex flex-col justify-between gap-1 -mt-2">
                            <p className="cursor-pointer hover:underline">About Us</p>
                            <p className="cursor-pointer hover:underline">Sitemap</p>
                            <p className="cursor-pointer hover:underline">Bookmarks</p>
                            <p className="cursor-pointer hover:underline">Sign in/John</p>
                        </div>
                    </div>
                    <div id="service" className="flex flex-col text-white mt-10">
                    <h1 className="text-2xl font-medium mt-2 mb-5">Our Service</h1>
                        <div className="flex flex-col justify-between gap-1 -mt-2">
                            <p className="cursor-pointer hover:underline">Help Center</p>
                            <p className="cursor-pointer hover:underline">Returns</p>
                            <p className="cursor-pointer hover:underline">Product Recalls</p>
                            <p className="cursor-pointer hover:underline">Accessibility</p>
                            <p className="cursor-pointer hover:underline">Contact us</p>
                            <p className="cursor-pointer hover:underline">Store Pickup</p>
                        </div>
                    </div>
                    <div id="categories" className="flex flex-col text-white mt-10">
                    <h1 className="text-2xl font-medium mt-2 mb-5">Categories</h1>
                        <div className="flex flex-col justify-between gap-1 -mt-2">
                            <p className="cursor-pointer hover:underline">Action</p>
                            <p className="cursor-pointer hover:underline">Comedy</p>
                            <p className="cursor-pointer hover:underline">Drama</p>
                            <p className="cursor-pointer hover:underline">Horror</p>
                            <p className="cursor-pointer hover:underline">Kids</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom" className="h-full flex justify-between items-center mx-[260px]">
                <div id="copyright" className="text-white">
                    <h2>Copyright © 2022 <span className="text-orange-400">Bookory</span>. All rights reserved.</h2>
                </div>
                <div id="cards">
                    <img src={Img.cardsIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;