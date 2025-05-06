import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { ChevronDown } from "lucide-react";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
function Apple() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClick = () => {
        setIsModalOpen(!isModalOpen)
    }
    const fontstyle = {
        fontFamily: 'SF Pro Display',
    }

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (title) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const footerData = [
        {
            title: "Shop and Learn",
            links: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
        },
        {
            title: "Apple Wallet",
            links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
        },
        {
            title: "Account",
            links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
        },
        {
            title: "Entertainment",
            links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
        },
        {
            title: "Apple Store",
            links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Order Status"],
        },
        {
            title: "For Business",
            links: ["Apple and Business", "Shop for Business"],
        },
        {
            title: "For Education",
            links: ["Apple and Education", "Shop for K-12", "Shop for College"],
        },
        {
            title: "For Healthcare",
            links: ["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch", "Health Records on iPhone and iPad"],
        },
        {
            title: "For Government",
            links: ["Shop for Government", "Shop for Veterans and Military"],
        },
        {
            title: "Apple Values",
            links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain"],
        },
        {
            title: "About Apple",
            links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
        },
    ];
    
    return (
        <>
            {/*Navbar starts*/}
            <nav className="bg-white border-gray-200  dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
                <div className="flex justify-between md:justify-center sm:justify-between md: items-center md:p-3">
                    <a href="https://www.apple.com/" className="flex items-center px-4" style={fontstyle}>
                        <FontAwesomeIcon icon={faApple} />
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false" onClick={handleClick}>
                        {isModalOpen &&
                            (<div className={`transition-all duration-500 ease-in-out transform ${isModalOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0}'} fixed top-0 left-0 w-full h-full bg-white text-black z-40 flex flex-col px-10 py-18 items-start space-y-5`}>
                                <button onClick={handleClick} className="text-lg absolute top-4 right-6 cursor-pointer">✖</button>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Store</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Mac</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">iPad</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">iPhone</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Watch</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Vision</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">AirPods</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">TV & Home</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Entertainment</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Accessories</a>
                                <a href="#" style={fontstyle} className="text-lg font-extrabold  hover:text-gray-800">Support</a>
                            </div>)}
                        <span className="sr-only" style={fontstyle}>Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>



                    <div className="hidden w-full md:flex space-x-4 md:w-auto items-center justify-center" id="navbar-default">
                        <ul className="font-medium  flex flex-col items-center p-5 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                    className="block 
                                 rounded-sm 
                                 md:bg-transparent 
                                  md:p-0 
                                 dark:text-white 
                                 text-xs font-normal"
                                    style={fontstyle}>Store</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                 md:p-0 
                                dark:text-white 
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent
                                text-xs font-normal "
                                    style={fontstyle}>Mac</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                
                                md:p-0 dark:text-white 
                                
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>iPad</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white 
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>iPhone</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white 
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Watch</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Vision</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>AirPods</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Tv&Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Entertainment</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white 
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Accessories</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}>Support</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 
                                text-gray-900 rounded-sm 
                                hover:bg-gray-100 
                                md:hover:bg-transparent 
                                md:border-0 
                                md:p-0 
                                dark:text-white  
                                dark:hover:bg-gray-700 
                                dark:hover:text-white 
                                md:dark:hover:bg-transparent text-xs font-normal"
                                    style={fontstyle}><FontAwesomeIcon icon={faBagShopping} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*Navbar ends*/}

            {/*Iphone 16e banner starts */}
            <section className="bg-gray-100">
                <div className="text-center">
                    <div className="pt-25">
                        <h1 className="text-6xl font-semibold leading-1.5" style={fontstyle}>iPhone 16
                            <span className="highlight" style={fontstyle}>e</span></h1>
                        <p className="text-3xl font-normal mt-10 tracking-tighter" style={fontstyle}>Latest iPhone. Greatest price.</p>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="px-[21px] py-[8px] w-1xl text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-400 transition duration-100" style={fontstyle}>Learn More</button>
                        <button type="submit" className="ms-[11px] px-[21px] py-[8px] border-1 rounded-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-500" style={fontstyle}>Buy</button>
                    </div>
                    <div className="flex justify-center items-center py-8">
                        <img src="/images/apple-1.png" alt="Iphone-16e"/>
                    </div>
                    <div>
                        <p><span className="highlight text-xl font-semibold leading-1.5 " style={fontstyle}>Built for Apple Intelligence.</span></p>
                    </div>
                </div>
            </section>
            {/*Iphone 16e banner ends */}


            {/*iphone 16 banner starts*/}
            <section className="h-auto bg-gradient-to-b from-blue-950 to-blue-300 mt-3">
                <div className="flex justify-center items-center">
                    <div className="unit-text-wrapper pt-25">
                        <h2 className="text-6xl text-center font-semibold leading-1 text-white" style={fontstyle}>iPhone 16</h2>
                        <p className="text-white font-normal text-center text-2xl mt-7" style={fontstyle}>Built for Apple Intelligence.</p>
                        <div className="mt-5 flex justify-center items-center">
                            <button type="submit" className="px-[21px] py-[8px] w-1xl text-black rounded-4xl hover:bg-gray-50 bg-white cursor-pointer" style={fontstyle}>Learn More</button>
                            <button type="submit" className="ms-[11px] px-[21px] py-[8px] border-1  border-white rounded-3xl text-white cursor-pointer hover:bg-white hover:text-black" style={fontstyle}>Buy</button>
                        </div>
                        <div className="unit-image-wrapper py-10 flex justify-center">
                            <img src="/images/iphone-16.png" alt="iPhone 16" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>
            {/*iphone 16 banner ends*/}

            {/*iwatch banner starts*/}
            <section className="bg-black mt-3">
                <div className="flex justify-center items-center">
                    <div className="unit-text-wrapper-icon flex justify-center items-center flex-col"> {/*added flex-col*/}
                        <div className="text-5xl text-white flex items-center pt-12" style={fontstyle}>
                            <FontAwesomeIcon icon={faApple} />
                            <h2 className="text-white text-5xl ms-2 font-semibold" style={fontstyle}>WATCH</h2>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <p className="text-orange-500 text-xl font-normal ms-4 mt-2" style={fontstyle}>ULTRA 2</p>
                            <p className="text-white font-normal text-center text-2xl mt-2" style={fontstyle}>New finish. Never quit.</p>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="px-[21px] py-[8px] w-1xl text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100" style={fontstyle}>Learn More</button>
                            <button type="submit" className="ms-[11px] px-[21px] py-[8px] border-1 rounded-3xl text-blue-500 cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-500" style={fontstyle}>Buy</button>
                        </div>
                        <div className="unit-image-wrapper flex justify-center items-center mt-3">
                            <img src="/images/watch-1.png" alt="watch" width={"600px"} />
                        </div>
                    </div>
                </div>
            </section>
            {/*iwatch banner ends*/}

            {/*apple card starts */}
            <section className="cards mt-3 h-auto">
                <div className="cards-inner flex flex-col md:flex-row mx-2 gap-3.5">
                    <div className="w-full md:w-1/2 h-auto md:h-auto bg-gray-100 flex justify-center items-center flex-col">
                        <img src="/images/wwdc-2.png" alt="WWDC" className="h-[340px]" />
                        <p className=" font-normal text-center text-xl w-3/5 mt-2" style={fontstyle}>Apple Worldwide Developers Conference. Join us online June 9–13.</p>
                        <button type="submit" className="px-[12px] py-[5px] text-xs w-1xl text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100 my-6" style={fontstyle}>Learn More</button>
                    </div>

                    <div className="bg-gradient-to-b from-blue-100 to-blue-50 w-full md:w-1/2 h-auto md:h-auto flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <div className="unit-text-image-wrapper">
                                <h2 className="text-4xl text-center font-semibold text-black mt-3 lg:mt-4" style={fontstyle}>MacBook Air</h2>
                                <p className="text-black font-normal text-center text-xl mt-2" style={fontstyle}>Sky blue color.</p>
                                <p className="text-black font-normal text-center text-xl" style={fontstyle}>Sky high performance with M4.</p>
                                <div className="mt-5 flex justify-center items-center">
                                    <button type="submit" className="px-[12px] py-[5px] w-1xl text-xs text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100">Learn More</button>
                                    <button type="submit" className="ms-[11px] px-[12px] py-[5px] text-xs border-1 rounded-3xl text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">Buy</button>
                                </div>

                                <div className="macbook-image flex flex-col justify-center items-center my-5">
                                    <img src="/images/macbook-3.png" alt="macbook" width={"400px"} />
                                    <div className="img-head mt-5">
                                        <p><span className="highlight text-sm font-semibold leading-1.5" style={fontstyle}>Built for Apple Intelligence.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards-inner flex flex-col md:flex-row mx-2 gap-3.5 mt-3">
                    <div className="w-full md:w-1/2 h-auto md:h-auto flex justify-center items-center flex-col" style={{ background: 'linear-gradient(to bottom, #D9F2FB, #C4E7F6)' }}>
                        <img src="/images/ipad.jpg" alt="ipad-head" className="mt-5" />
                        <p className="text-black font-normal text-center text-xl mx-6 mt-3" style={fontstyle}>Now supercharged by the M3 chip.</p>
                        <div className="img-buttons mt-5">
                            <button type="submit" className="px-[12px] py-[5px] w-1xl text-xs text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100" style={{ fontFamily: 'SF Pro Display' }}>Learn More</button>
                            <button type="submit" className="ms-[11px] px-[12px] py-[5px] text-xs border-1 rounded-3xl text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white" style={{ fontFamily: 'SF Pro Display' }}>Buy</button>
                        </div>
                        <img src="/images/ipad-4.png" alt="Ipad" className="h-[250px] my-4" />
                        <div className="img-head my-5">
                            <p><span className="highlight text-sm font-semibold leading-1.5" style={fontstyle}>Built for Apple Intelligence.</span></p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-auto bg-cover bg-center md:h-auto flex justify-center items-center" style={{ backgroundImage: "url('/images/promo.jpg')" }}>
                        <div className="flex justify-center items-center">
                            <div className="unit-text-image-wrapper pt-70">
                                <h2 className="text-4xl text-center font-semibold text-white" style={fontstyle}>AirPods Pro 2</h2>
                                <p className="text-white font-normal text-center text-xl" style={fontstyle}>Now with a Hearing Aid feature.<sup>1</sup></p>
                                <div className="my-5 flex justify-center items-center">
                                    <button type="submit" className="px-[12px] py-[5px] w-1xl text-xs text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100" style={fontstyle}>Learn More</button>
                                    <button type="submit" className="ms-[11px] px-[12px] py-[5px] border-1 text-xs rounded-3xl text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-600" style={fontstyle}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards-inner flex flex-col md:flex-row mx-2 gap-3.5 mt-3">
                    <div className="w-full md:w-1/2 h-auto md:h-auto flex justify-center items-center flex-col bg-gray-50">
                        <div className="text-5xl text-black flex items-center mt-10" style={fontstyle}>
                            <FontAwesomeIcon icon={faApple} className="text-4xl" />
                            <h2 className="text-black text-4xl font-medium" style={fontstyle}>Trade In</h2>
                        </div>
                        <p className="text-black font-normal text-center text-xl w-1/2 md:w-1/2 lg:w-2/4 sm:w-1/2 " style={fontstyle}>Get $170–$630 in credit when you trade in iPhone 12 or higher.</p>
                        <div className="img-buttons ">
                            <button type="submit" className="px-[12px] py-[5px] text-[14px] mt-5 text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100" style={{ fontFamily: 'SF Pro Display' }}>Get your estimate</button>
                        </div>
                        <img src="/images/trade-in.png" alt="trade in" className="mt-12" />
                    </div>

                    <div className="w-full md:w-1/2 h-auto md:h-auto flex justify-center items-center flex-col bg-gray-100">
                        <div className="text-5xl text-black flex items-center mt-10" style={fontstyle}>
                            <FontAwesomeIcon icon={faApple} className="text-4xl" />
                            <h2 className="text-black text-4xl font-medium" style={fontstyle}>Card</h2>
                        </div>
                        <p className="text-black font-normal text-center text-xl w-1/2 md:w-1/2 lg:w-2/4 sm:w-1/2 " style={fontstyle}>Get up to 3% Daily Cash back with every purchase.</p>

                        <div className="my-5 flex justify-center items-center">
                            <button type="submit" className="px-[12px] py-[5px] w-1xl text-xs text-white rounded-4xl bg-blue-500 cursor-pointer hover:bg-blue-600 transition duration-100" style={fontstyle}>Learn More</button>
                            <button type="submit" className="ms-[11px] px-[12px] py-[5px] border-1 text-xs rounded-3xl text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-blue-600" style={fontstyle}>Apply now</button>
                        </div>
                        <img src="/images/card.png" alt="trade in" />
                    </div>
                </div>
            </section>
            {/*apple card ends */}


















            {/*apple carousel starts*/}
            {/* <section className="carousel mt-3 h-auto">
                <div id="default-carousel" className="relative w-full" data-carousel="slide" >
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_01" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_02" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_03" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_04" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_05" />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-6.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_06" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-7.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_07" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-8.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_08" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-9.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_09" />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/images/banner-10.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="pic_10" />
                        </div>
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </section> */}

            {/*apple carousel ends*/}



















            {/*apple footer starts*/}
            <section className=" bg-gray-100 text-gray-800 mt-4">

                <div className="px-6 sm:px-6 lg:px-60 pt-10 space-y-3 text-xs text-gray-500 tracking-tighter">
                    <p>
                        1.Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                    </p>
                    <p>
                        To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                    <p>
                        If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
                    </p>
                    <p>
                        Learn more about how Apple Card applications are evaluated at{" "}
                        <a
                            href="https://support.apple.com/kb/HT209218"
                            className="text-blue-600 hover:underline"
                        >
                            support.apple.com/kb/HT209218
                        </a>.
                    </p>
                    <p>
                        Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK, or U.S.), French, German, Italian, Japanese, Korean, Portuguese (Brazil), or Spanish, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
                    </p>
                    <p>
                        A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
                    </p>
                    <p>
                        Features are subject to change. Some features, applications, and services may not be available in all regions or
                        all languages.
                    </p>
                    <hr className="mt-5 border-t border-gray-300 " />
                </div>

                <div className="mt-2">
                    <div className="flex flex-wrap justify-between px-6 sm:px-6 md:justify-between lg:px-60">
                        {footerData.map((section, idx) => {
                            const isOpen = openSections[section.title];

                            return (
                                <div
                                    key={idx}
                                    className="border-b md:border-none w-full md:w-1/3 lg:w-1/6"
                                >
                                    <button
                                        className="w-full flex justify-between items-center py-3 font-medium text-center text-xs cursor-pointer md:cursor-default"
                                        onClick={() => toggleSection(section.title)}
                                    >
                                        {section.title}
                                        <ChevronDown
                                            className={`md:hidden transition-transform ${isOpen ? "rotate-180" : ""
                                                }`}
                                            size={18}
                                        />
                                    </button>

                                    <ul
                                        className={`overflow-hidden transition-all duration-300 text-xs space-y-1 ${isOpen ? "max-h-96 pb-3" : "max-h-0 md:max-h-full md:pb-0"
                                            } md:block`}
                                    >
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx} className="pl-2 md:pl-0 text-wrap md:text-balance lg:text-balance xl:text-balance text-xs cursor-pointer hover:underline">
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="pt-10 sm:px-6 lg:px-60 text-xs text-gray-600 space-y-3 pb-5 px-6">
                    <p>
                        More ways to shop:{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Find an Apple Store
                        </a>{" "}
                        or{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            other retailer
                        </a>{" "}
                        near you. Or call{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            1-800-MY-APPLE
                        </a>{" "}
                        (1-800-692-7753).
                    </p>

                    <hr className="border-t border-gray-300" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 lg:text-nowrap xl:text-nowrap">
                        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
                            <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
                            <span className="hidden md:inline">|</span>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">Terms of Use</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">Sales and Refunds</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">Legal</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">Site Map</a>
                        </div>

                        <div className="text-right md:text-left cursor-pointer">United States</div>
                    </div>
                </div>
            </section>
            {/*apple footer ends*/}
        </>
    );
}

export default Apple;
