import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Home = () => {
    return (
        <>
            <section>
                <div className="bg-dark-500 text-white py-20">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
                            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
                            </h2>
                            <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                                register now to showcase your talent and win exciting prizes.</p>
                            <a href="#"
                                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                Explore Now</a>
                        </div>
                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                            <div className="h-48 flex flex-wrap content-center">
                                {/* <div>
                            <Image className="inline-block mt-28 hidden xl:block" src="/DevFlow Logo - Blue.png" layout="fill" alt="test"/>
                        </div>
                        <div>
                            <Image className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/DevFlow Logo - Blue.png"  layout="fill" alt="test"/>
                        </div>
                        <div>
                            <Image className="inline-block mt-28 hidden lg:block" src="/DevFlow Logo - Blue.png"  layout="fill" alt="test" />
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
