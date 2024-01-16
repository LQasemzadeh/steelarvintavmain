import React from 'react';
import { TERipple } from "tw-elements-react";
import { FaInstagram, FaWhatsapp, FaTelegram, FaLinkedin } from "react-icons/fa";



const FooterComponent = () => {
    return (
        <footer className="bg-blue-900 text-center text-white sticky bottom-0">
            <div className="container px-6 pt-6 mx-auto">
                <div className="mb-6 flex justify-center w-full">
                    <TERipple rippleColor="light">
                        <FaInstagram />
                    </TERipple>

                    <TERipple rippleColor="light">
                         <FaWhatsapp />
                    </TERipple>

                    <TERipple rippleColor="light">
                         <FaTelegram />
                    </TERipple>

                    <TERipple rippleColor="light">
                          <FaLinkedin />
                    </TERipple>

                </div>

                {/* divider */}
                <hr
                    className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:opacity-100"
                />

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className="mx-6 py-10 md:text-start">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- TW Elements section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">

                                استیل آروین تاو
                            </h6>
                            <p>
                                شرکت فنی و مهندسی استیل آروین تاو فعالیت خود را از سال ۱۳۸۶ با تکیه بر تجربه و تخصص جمعی از فارغ التحصیلان دانشگاه‌های معتبر داخلی و خارجی و مجهز به ماشین آلات به روز و پیشرفته در زمینه طراحی و ساخت انواع تجهیزات صنایع نفت، گاز، پتروشیمی و صنایع دیگر آغاز نموده است.
                            </p>
                        </div>

                        {/* <!-- Products section --> */}
                        <div className="mr-16">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                لینک‌های مرتبط
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >مخازن ذخیره</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >مبدل حرارتی</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >قطعات صنعتی</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 text-white"
                                >ایر کولر</a>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                خدمات مشتریان
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >صفحه اصلی</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >کاتالوگ محصولات</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 text-white"
                                >مجله استیل آروین تاو</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 text-white"
                                >فرصت شغلی</a>
                            </p>
                        </div>
                        {/* <!-- Contact section --> */}
                        <div>
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                اطلاعات تماس
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                شیراز، میدان صنعت
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                info@steelarvintav.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                ۰۹۱۷۶۲۸۸۸۰۸
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            {/* <!--Copyright section--> */}
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                <a className="text-whitehite" href="https://tw-elements.com/"
                >کلیه حقوق این وب سایت متعلق به گروه تولیدی و صنعتی استیل آروین تاو می باشد.</a>
            </div>
        </footer>
    );
};

export default FooterComponent;