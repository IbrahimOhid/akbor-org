import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="body-font relative sm:px-32">
                <div className="flex flex-col text-center w-full py-8">
                    <h1 className="sm:text-5xl text-2xl tracking-wide font-extrabold title-font  mb-4 text-gray-900">Get In <span className='text-orange-500'>Touch</span></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">Our mission is to empower individuals and businesses with cutting-edge IT solutions and professional training, bridging skill gaps and fostering growth.</p>
                </div>
                <div className="container  py-10 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.704095553868!2d90.38671997418986!3d23.757929188489573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e08cf400dd%3A0xfd98428cb49cb53c!2sAkbor%20Skills%20Development%20Limited!5e0!3m2!1sen!2sbd!4v1732246839787!5m2!1sen!2sbd" width="100%" height="100%" className="absolute inset-0" allowfullscreen="" loading="lazy"></iframe>
                        <div className="bg-white relative flex flex-wrap py-3 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1 text-sm">R-502, House No. #03, Century Dale, Indira Road, Farmgate, Tejgaon, Dhaka 1215</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <p>
                                    <a href="http://mailto@inquiry@akbor.org" target="_blank" className="text-orange-500 text-sm">
                                        inqury@akbor.org
                                    </a>
                                </p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="mt-2">
                                    <a
                                        href="https://akbor.org/services/tel:+8809638909192"
                                        target="_blank"
                                        className="text-orange-500 "
                                    >
                                        <span className='text-sm'>+880 96 38 90 91 92</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Have Any Question?</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Let's Start a Conversation</p>
                        <div className="relative mb-4">
                            <input type="text" id="name" name="name" className="w-full bg-white  border border-gray-900 focus:border-orange-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-black" placeholder='Your Name (Required)' required />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" id="email" name="email" className="w-full bg-white  border border-gray-900 focus:border-orange-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-black" placeholder='Your Email (Required)' required />
                        </div>
                        <div className="relative mb-4">
                            <textarea id="message" name="message" className="w-full bg-white  border border-gray-900 focus:border-orange-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out min-h-[100px] placeholder-black" placeholder='Message' />
                        </div>
                        <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 transition duration-700 ease-in-out rounded text-md uppercase">Send Now</button>
                    </div>
                </div>


                <div className="text-gray-600 body-font">
                    <div className="container  py-10 mx-auto">
                        <h1 className="sm:text-4xl text-center text-2xl font-extrabold tracking-wide title-font  mb-10 text-gray-900">Our <span className='text-orange-500'>Offices</span></h1>
                        <div className='py-5'>
                            <div className="flex flex-wrap -m-12 px-5">
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">Head Office</h1>
                                            <p className="leading-relaxed mb-3">R-502, House No. #03, Century Dale, Indira Road, Farmgate, Tejgaon, Dhaka 1215</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">Dhaka Office #2</h1>
                                            <p className="leading-relaxed mb-3">R-2/B, House No. #10, West Tejturi Bazar Road, Tejgaon, Dhaka 1215</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">Dhaka Office #3</h1>
                                            <p className="leading-relaxed mb-3">R-9/D, House No. #150, West Tejturi Bazar Road, Tejgaon, Dhaka 1215</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-12 px-5 ">
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">Regional Office</h1>
                                            <p className="leading-relaxed mb-3">Shop #201-204, Level 1, Kalam Hosen Super Market, Gangni, Meherpur 7110</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">Malaysia Office</h1>
                                            <p className="leading-relaxed mb-3">79, Jalan Taj 1/2, Bandar Puncak Alam, 42300, Selangor, Malaysia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-orange-400  rounded-lg overflow-hidden">
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-center underline underline-offset-8 decoration-orange-500 decoration-1 text-gray-900 mb-3">New Zealand Office</h1>
                                            <p className="leading-relaxed mb-3">28 Vina Place, Massey, Auckland 0614, New Zealand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Contact;