import Link from 'next/link';
import React from 'react'


const AuthHeader = () => {
  return (
    <header className="flex justify-between items-center w-10/12 h-[51px] mx-auto mt-[41px]">
        <h1 className="text-[32px] font-extrabold bg-gradient-to-r from-start-linear to-end-linear inline-block text-transparent bg-clip-text">
          کوئرا تسک منیجر
        </h1>
        <div className="flex justify-end items-center w-[207px] h-[40px] gap-[27px]">
          <span className="text-[16px] w-[105px] whitespace-nowrap">
            قبلا ثبت‌نام کرده‌ای؟
          </span>
          <Link href={"/login"}>
            <button className="bg-blue-cyan text-[14px] w-[95px] h-[40px] text-white rounded-[6px]">
              ورود
            </button>
          </Link>
        </div>
      </header>
  )
}

export default AuthHeader;