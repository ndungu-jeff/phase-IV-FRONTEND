import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>

            <footer className="bg-[#005163] mt-3 absolute inset-x-0 bottom-0 ">
                <div className="mx-auto max-w-7xl overflow-hidden pb-2 px-4 sm:px-6 lg:px-8">
                    <nav
                        className="justify-center h-9"
                        aria-label="Footer"
                    >
                        <div className="px-5 py-2">
                            <NavLink to="/aboutus" className="text-base text-white hover:text-gray-900">
                                About Us
                            </NavLink>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base text-white hover:text-gray-900">
                                Contacts
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base text-white hover:text-gray-900">
                                Privacy Policy
                            </a>
                        </div>
                    </nav>
                    <div className=" flex justify-center space-x-6">
                        <a
                            href="https://twitter.com"
                            className="text-white hover:text-gray-500"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        
                    </div>
                    <p className="mt-8 text-center text-base text-white">
                        © 2023 HappyStays. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;