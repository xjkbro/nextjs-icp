// import LoadImage from "./LoadImage"

const Footer = () => {
    return (
        <div className="w-auto p-4 bottom-0 h-auto relative bg-gray-600 ">
            <div className="lg:flex  lg:mt-3 md:mx-12 lg:mx-28 lg:justify-between">
                <div className="mb-4 lg:columns-1 w-2/3">
                    <p className="text-white font-bold mb-1 mt-3">About Us</p>
                    <p className="text-gray-200 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries
                    </p>
                </div>
                <div className="mb-4  lg:mt-3">
                    <h3 className="text-white font-bold mb-2 lg:mb-4"> Social Media</h3>
                    <div className="">
                        <div className=" flex lg:items-center ">
                            <div className="lg:container lg:max-w-screen-lg ">
                                <div>
                                    <div className="lg:flex lg:flex-wrap gap-2 ">
                                        <a href="">
                                            <button className="bg-gray-700 hover:bg-white hover:text-black  p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                                <i className="fab fa-twitter-square"></i>
                                            </button>
                                        </a>
                                        <a href="">
                                            <button className="bg-blue-400 p-2 hover:bg-white hover:text-black font-semibold  text-white inline-flex items-center space-x-2 rounded">
                                                <i className="fab fa-twitter-square"></i>
                                            </button>
                                        </a>
                                        <a href="">
                                            <button className="bg-red-500 p-2 hover:bg-white hover:text-black font-semibold text-white inline-flex items-center space-x-2 rounded">
                                                <i className="fab fa-twitter-square"></i>
                                            </button>
                                        </a>
                                        <a href="">
                                            <button className="bg-blue-600 p-2 hover:bg-white hover:text-black font-semibold text-white inline-flex items-center space-x-2 rounded">
                                                <i className="fab fa-twitter-square"></i>
                                            </button>
                                        </a>
                                        <a href="">
                                            <button className="bg-green-600 p-2 hover:bg-white hover:text-black font-semibold text-white inline-flex items-center space-x-2 rounded">
                                                <i className="fab fa-twitter-square"></i>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-3 mb-4">
                    <h3 className="text-white font-bold mb-2 lg:mb-2">Navigate</h3>
                    <div className="columns-2 md:columns-3 lg:columns-2">
                        <div><a className="text-gray-200" href="">
                            Navigate 0
                        </a></div>
                        <div><a className="text-gray-200" href="">
                            Navigate 0
                        </a></div>
                        <div><a className="text-gray-200" href="">
                            Navigate 0
                        </a></div>
                        <div><a className="text-gray-200" href="">
                            Navigate 0
                        </a></div>
                        <div><a className="text-gray-200" href="">
                            Navigate 0
                        </a></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center mt-2">
                    <p className="text-gray-400">
                        {" "}
                        Copyright &copy;
                        {/* <script>document.write(new Date().getFullYear());</script> All rights reserved */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

// <div className="flex justify-between m-6">
//   <p className="text-xs font-semibold text-gray-600">
//     Strapi Starter Next.js E-commerce
//   </p>
//   <div className="flex gap-3 ml-4">
//     <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
//       <LoadImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
//     </a>
//     <a href="https://facebook.com/strapijs" className="ml-3">
//       <LoadImage
//         src="/facebook.svg"
//         width={20}
//         height={20}
//         alt="Facebook"
//       />
//     </a>
//     <a
//       href="https://github.com/strapi/strapi-starter-next-ecommerce"
//       className="ml-3"
//     >
//       <LoadImage src="/github.svg" width={20} height={20} alt="GitHub" />
//     </a>
//   </div>
// </div>
