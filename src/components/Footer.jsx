import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-4 bg-glassyBlack px-5 py-14 !sm:py-6 text-white">

            <div className="footer-logo md:col-start-1 md:col-end-2 row-start-3 row-end-4 md:row-start-1 md:row-end-2 pt-6">
                <a href="" className="logo relative -translate-x-1/2 left-1/2 inline-flex flex-col items-center md:justify-start justify-center w-fit just-another-hand md:left-0 md:translate-x-0">
                        <span className='inline m-0 text-[60px] leading-[60px]'>Cloud 9</span>
                        <span className='inline m-0 text-[30px] leading-[30px] relative -translate-y-3'>Perfumery</span>
                </a>
            </div>

            <div className="meta-data flex flex-wrap justify-center md:justify-start gap-3 roboto-slab-medium text-lg row-start-4 row-end-5 md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-2">
                <a href="#">Term of Use</a>
                <a href="#">Privacy policy</a>
                <a href="#">Become an Affiliate</a>
                <a href="#">FAQ</a>
                <a href="">Reviews</a>
                <a href="">Track Orders</a>
                <a href="">Refund policy</a>
            </div>

            <div className="mail-and-subscribe flex flex-col md:flex-row gap-7 md:gap-9 row-start-2 row-end-3 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
                {/* Cloud9 email button */}
                <div className="w-full h-fit roboto-slab-semibold text-lg border-2 border-solid border-white py-2 text-center rounded-full">
                    Your email
                </div>
                {/* Cloud9 subscription button */}
                <div className="w-full h-fit roboto-slab-semibold text-lg border-2 border-solid border-white py-2 text-center rounded-full">
                    Subscribe
                </div>
            </div>

            <div className="socials row-start-1 row-end-2 flex flex-col md:flex-row items-center gap-2 md:gap-9 md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-2">
                <div className="w-[220px] h-fit roboto-slab-semibold text-lg border-2 border-solid border-white py-2 text-center rounded-full">
                        CONTACT US
                </div>
                <div className="links w-220px flex flex-row justify-between gap-8">
                    <a href="" className="">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="" className="">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    <a href="" className="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="row-start-5 row-end-6 roboto-slab-semibold text-[#bbb] text-xs text-center md:text-start pt-7  md:pt-0 md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-2">
                2024 Cloud 9
            </div>

        </footer>
    )
}