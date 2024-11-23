import React from 'react'
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChalkboardUser, FaBullhorn, FaUsersRays, FaCode, FaUserShield, FaCloudversify, FaBusinessTime, FaNetworkWired } from "react-icons/fa6";




const Services = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-3xl font-bold leading-loose sm:text-4xl xl:text-5xl mb-6">We Will Provide The <br /> Best <span className='text-orange-500'>IT and Business</span> Solutions</h2>

                                <p className="mt-4 text-gray-700 text-xl">
                                    From cutting-edge training programs to comprehensive IT and digital services, Akbor Skills Development Limited (ASDL) is committed to delivering results that empower businesses and individuals to achieve their growth goals.
                                </p>

                                <p className="inline-flex items-center mt-8 bg-gray-900 text-white hover:bg-orange-500 py-2 px-6 gap-2 rounded ">
                                    <Link to={'/src/components/Contacts/Contacts.jsx'} className='uppercase'>
                                        Contact Us
                                    </Link>
                                    <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                        <h2 className="text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl mb-6">What <span className='text-orange-500'>we can</span> do for you</h2>
                        <p className="mb-4 text-xl">We Use Our Expertise and Proven Experience to Deliver Exceptional Results for Your Business.</p>
                    </div>

                    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-5 mx-auto xl:px-0 mt-5">
                        <div className="w-full">
                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                        <div className="relative h-full p-4 bg-white border-2 border-blue-500 rounded-lg">
                                            <h1>
                                                <FaLaptopCode className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    IT Training & Development</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">We provide cutting-edge IT training programs to help individuals develop the skills needed to excel in the digital world.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-orange-500 rounded-lg">
                                            <h1>
                                                <FaChalkboardUser className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    E-Learning Platforms</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">Through Instructorium, we offer comprehensive online learning solutions for both professional development and IT skill-building.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-green-500 rounded-lg">
                                            <h1>
                                                <FaBullhorn className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">Branding & Digital Marketing</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">We offer targeted digital marketing and branding strategies to boost your online presence and drive business growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full mb-10 sm:flex-row">
                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-green-500 rounded-lg">
                                            <h1>
                                                <FaUsersRays className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    Remote IT Recruitment</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">We specialize in recruiting top IT talent from Bangladesh, providing remote professionals for international clients.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-blue-500 rounded-lg">
                                            <h1>
                                                <FaCode className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    Web Design & Development</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">Our team delivers custom web development services to build responsive, user-friendly websites tailored to your business.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-orange-500 rounded-lg">
                                            <h1>
                                                <FaUserShield className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">Cybersecurity Solutions</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">We provide robust cybersecurity solutions to protect your business from online threats and data breaches.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full sm:flex-row">
                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-blue-500 rounded-lg">
                                            <h1>
                                                <FaCloudversify className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    Cloud Computing & Storage</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">Leverage our cloud services for scalable storage and computing solutions, ensuring efficiency and security.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-orange-500 rounded-lg">
                                            <h1>
                                                <FaBusinessTime className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">
                                                    Business Process Outsourcing (BPO)</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">We manage various business processes, including back-office tasks, allowing your business to focus on growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:mb-0 sm:w-1/2">
                                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                        <div className="relative h-full p-6 bg-white border-2 border-green-500 rounded-lg">
                                            <h1>
                                                <FaNetworkWired className='text-4xl' />
                                            </h1>
                                            <div className="flex items-center ">
                                                <h3 className="py-2 text-xl font-bold text-gray-900">IT Infrastructure Management</h3>
                                            </div>
                                            <p className="py-1 text-xs font-medium text-orange-500 uppercase">------------</p>
                                            <p className="mb-2 text-gray-600">Our team ensures the seamless management and optimization of your IT infrastructure for better performance and reliability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;