import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MicIcon from '@mui/icons-material/Mic';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'

function Sidebar() {
    const [activeTab, setActiveTab] = useState(0);
    const [swiperRef, setSwiperRef] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        swiperRef.slideTo(index, 500);
    };

    const [slides, setSlides] = useState(
        Array.from({ length: 8 }).map((_, index) => ``)
    );

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    const tabStyles = (index) => {
        if (index === activeTab) {
            return 'bg-slate-300 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl w-60 drop-shadow h-12 items-center flex pl-3 font-semibold transition ease-out delay-70 ';
        }
        else {
            return 'opacity-50 text-xs';
        }

    };



    return (
        <>
            <div className='grid place-items-end mr-10 my-10 opacity-75'>9:41</div>
            <div className="fixed top-10 left-0 h-screen sidebar flex flex-col text-black my-20 mx-10 w-60 space-y-7 text-sm">

                <div
                    className={`items-center pl-3 w-60 flex cursor-pointer ${tabStyles(0)}`}
                    onClick={() => handleTabClick(0)}
                >
                    <span className="text-xl pr-2 font-normal">+</span> New flow
                </div>
                <div
                    className={`items-center pl-3 w-60 flex cursor-pointer ${tabStyles(1)}`}
                    onClick={() => handleTabClick(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                    <span className="pl-2 font-semibold">Coffee? •</span>
                    <span className="pl-1 font-normal">  Marisa lu</span>
                </div>
                <div
                    className={`items-center pl-3 w-60 flex cursor-pointer ${tabStyles(2)}`}
                    onClick={() => handleTabClick(2)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000000" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                    <span className="pl-2 font-semibold">Feedback •</span>
                    <span className="pl-1 font-normal">Lindsey Weiss</span>
                </div>
                <div
                    className={`items-center pl-3 w-60 flex cursor-pointer ${tabStyles(3)}`}
                    onClick={() => handleTabClick(3)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#000000" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" /></svg>
                    <span className="pl-2 font-semibold">Location •</span>
                    <span className="pl-1 font-normal">Phliz Coffee</span>
                </div>
                <div
                    className={`items-center pl-3 w-60 flex cursor-pointer ${tabStyles(4)}`}
                    onClick={() => handleTabClick(4)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000000" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>

                    <span className="pl-2 font-semibold">Launch plan •</span>
                    <span className="pl-1 font-normal">Dennis Jin</span>
                </div>
                <div className={`flex items-center pl-2 font-semibold cursor-pointer ${tabStyles(5)}`} onClick={() => handleTabClick(5)}>
                    <svg className="size-7 pr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z"></path><path fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z"></path>
                    </svg>
                    Victoria Wang</div>
                <div className={`flex items-center pl-2 font-semibold cursor-pointer ${tabStyles(6)}`} onClick={() => handleTabClick(6)}>
                    <svg className="size-7 pr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z"></path><path fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z"></path>
                    </svg>
                    Advait Kalakkad</div>
                <div className={`flex items-center pl-2 font-semibold cursor-pointer ${tabStyles(7)}`} onClick={() => handleTabClick(7)}>
                    <svg className="size-7 pr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                    </svg>
                    Danny Trinh</div>
            </div >
            <div className="w-40">
                <Swiper
                    className='swiper'
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}
                    pagination={{
                        type: 'fraction',
                        renderFraction: function (currentClass, totalClass) {
                            return ``;
                        },
                    }}
                    virtual
                    initialSlide={activeTab}
                    effect="fade"
                    watchSlidesProgress={true}
                    allowTouchMove={false}
                >
                    <SwiperSlide className='w-100 drop-shadow-xl' style={{ opacity: activeTab === 0 ? 1 : 0.5, transition: 'opacity 0.5s ease', }}>
                        <div className='bg-white rounded-lg m-0 ' style={{ height: '461px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button className='text-6xl hover:bg-gray-300 rounded-full bg-gray-200 ' style={{
                                width: '60px',
                                height: '60px'
                            }}><span className='opacity-50'>+</span></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-100 overflow-hidden drop-shadow-xl' style={{ opacity: activeTab === 1 ? 1 : 0.5, transition: 'opacity 0.5s ease', }}>
                        <div >
                            <div className='bg-gray-200 rounded-t-lg h-10 flex items-center'>
                                <span className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                    </svg>
                                </span>
                                <span className="pl-2 text-sm font-semibold">Coffee? •</span>
                                <span className="pl-1 text-sm font-normal">  Marisa lu</span>
                                <div className="flex-grow">
                                </div>

                                <svg className='mr-10 opacity-40' xmlns="http://www.w3.org/2000/svg" height="14" width="12" viewBox="0 0 384 512"><path fill="#000000" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>


                            </div>
                            <div className='bg-white pl-10 py-10 rounded-b-lg'>
                                <h2 className='text-xl'>Marisa Lu</h2>
                                <h1 className='text-2xl py-4 font-bold'>Coffee?</h1>
                                <p className='text-sm pr-10'>
                                    Hey Jason,<br />
                                    <br />
                                    <span className='py-4  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem repellendus maxime numquam, sint est eum eveniet deserunt neque optio sunt maiores. Enim eligendi voluptatibus delectus ea aut? Explicabo, harum.</span>
                                    <br /> <br />
                                    Marisa
                                </p>
                                <div className='bg-black'></div>
                                <div className="border-t border-gray-300 py-3 my-5 mb-0" style={{ width: '810px' }}></div>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-0 mb-2 mr-2">Reply</button>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-0 mb-2 mr-2">Forward</button>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-0 mb-2">Delete</button>
                                <div className='flex items-center my-5 mb-0 cursor-pointer '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 448 512"><path fill="#9ca3af" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" /></svg>
                                    <span className='pl-2 text-xs text-gray-400'>More actions</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-100 overflow-hidden drop-shadow-xl' style={{ opacity: activeTab === 2 ? 1 : 0.5, transition: 'opacity 0.5s ease', }}>
                        <div >
                            <div className='bg-gray-200 rounded-t-lg h-10 flex items-center'>
                                <span className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000000" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>

                                </span>
                                <span className="pl-2 text-sm font-semibold">Feedback •</span>
                                <span className="pl-1 text-sm font-normal">  Lindsey Weiss</span>
                                <div className="flex-grow">
                                </div>
                                <svg className='mr-10 opacity-40' xmlns="http://www.w3.org/2000/svg" height="14" width="12" viewBox="0 0 384 512"><path fill="#000000" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>


                            </div>
                            <div className='bg-white pl-10 py-10 rounded-b-lg'>
                                <h2 className='text-xl'>Lindsey Weiss</h2>
                                <h1 className='text-2xl py-4 font-bold'>Feedback</h1>
                                <p className='text-sm pr-10'>
                                    Hi Marisa,<br />
                                    <br />
                                    <span className='py-4  '>Thanks for the coffee chat! It was great catching up and discussing of Product. Your insights added a lot to the conversation, and I enjoyed our time together. Looking forward to the next one!
                                        <br /> <br />
                                        Lindsey Weiss</span>

                                    Marisa
                                </p>
                                <div className="border-t border-gray-300 py-2 my-6 mb-0" style={{ width: '810px' }}></div>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-1  mr-2">Dismiss</button>
                                <div className='flex items-center my-5 mb-0 cursor-pointer '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 448 512"><path fill="#9ca3af" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" /></svg>
                                    <span className='pl-2 text-xs text-gray-400'>More actions</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-100 drop-shadow-xl' style={{ opacity: activeTab === 0 ? 1 : 0.5, transition: 'opacity 0.5s ease', }}>
                        <div className='bg-white rounded-lg' style={{ height: '456px' }}>
                            <div className='bg-gray-200 rounded-t-lg h-10 flex items-center'>
                                <span className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#000000" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" /></svg>
                                </span>
                                <span className="pl-2 text-sm font-semibold">Location •</span>
                                <span className="pl-1 text-sm font-normal">  Phliz Coffee</span>
                                <div className="flex-grow">
                                </div>
                                <svg className='mr-10 opacity-40' xmlns="http://www.w3.org/2000/svg" height="14" width="12" viewBox="0 0 384 512"><path fill="#000000" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                            </div>
                            <img className="object-cover" style={{ height: '150px', width: '100%' }} src="https://miro.medium.com/v2/resize:fit:1400/1*8ZGC79f70ZpDbwrhYha-xA.png" />
                            <h1 className='text-2xl py-4 pl-10 font-bold'>Phliz Coffee</h1>
                            <h2 className='text-md pl-10'>Custom-blended java in casual setting.</h2>
                            <h2 className='text-sm py-4 pl-10 mb-1 pb-1 opacity-50'>20686 Stevens Creek BLVD<br />Cupertino, CA 95014</h2>
                            <div className="border-t border-gray-300 py-2 ml-10" style={{ width: '810px' }}></div>
                            <button className="ml-10 my-0 text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-10 mb-2 mr-2">
                                <span className='flex items-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#000000" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" /></svg>
                                    <span className='pl-2'>Get directions
                                    </span>
                                </span>
                                <span className='flex items-start p text-xs opacity-50'>Requires your location</span>
                            </button>
                            <div className='flex items-center pl-10 py-2 mb-0 cursor-pointer '>
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 448 512"><path fill="#9ca3af" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" /></svg>
                                <span className='pl-2 text-xs text-gray-400'>More actions</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-100 overflow-hidden drop-shadow-xl' style={{ opacity: activeTab === 1 ? 1 : 0.5, transition: 'opacity 0.5s ease', }}>
                        <div >
                            <div className='bg-gray-200 rounded-t-lg h-10 flex items-center'>
                                <span className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000000" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                </span>
                                <span className="pl-2 text-sm font-semibold">Launch plan •</span>
                                <span className="pl-1 text-sm font-normal">  Dennis Jin</span>
                                <div className="flex-grow">
                                </div>

                                <svg className='mr-10 opacity-40' xmlns="http://www.w3.org/2000/svg" height="14" width="12" viewBox="0 0 384 512"><path fill="#000000" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>


                            </div>
                            <div className='bg-white pl-10 py-10 rounded-b-lg'>
                                <h2 className='text-xl'>Dennis Jin</h2>
                                <h1 className='text-2xl py-4 font-bold'>Launch plan</h1>
                                <p className='text-sm pr-10'>
                                    Coffee Rich<br />
                                    <br />
                                    <span className='py-4  '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem repellendus maxime numquam, sint est eum eveniet deserunt neque optio sunt maiores. Enim eligendi voluptatibus delectus ea aut? Explicabo, harum.</span>
                                    <br /> <br />
                                    Marisa
                                </p>
                                <div className='bg-black'></div>
                                <div className="border-t border-gray-300 py-3 my-5 mb-0" style={{ width: '810px' }}></div>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-0 mb-2 mr-2">Forward</button>
                                <button className="text-gray-900 bg-white bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm px-5 py-2.5 my-0 mb-2">Delete</button>
                                <div className='flex items-center my-5 mb-0 cursor-pointer '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 448 512"><path fill="#9ca3af" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" /></svg>
                                    <span className='pl-2 text-xs text-gray-400'>More actions</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div >
        </>
    );
}

export default Sidebar;