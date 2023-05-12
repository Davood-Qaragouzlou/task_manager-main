import Link from 'next/link';
import React, { useState } from 'react'

const LoginForm = () => {
    
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(false)
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false)
    
  
    


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userEmail = event.target.value
        if(userEmail.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            setIsEmailCorrect(true);
        }else{
            setIsEmailCorrect(false);
        }
        setEmail(userEmail)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userPassword = event.target.value
        if(userPassword.length > 8 && userPassword.match(/(?=.*[a-z])/) && userPassword.match(/(?=.*[0-9])/)){
            setIsPasswordCorrect(true);
        }else{
            setIsPasswordCorrect(false);
        }
        setPassword(userPassword)
    }


    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        console.log(name)
        console.log(email);
        console.log(password);
        
        
    }

    
    


  return (
    <main className='flex flex-col h-auto w-[517px] h-auto p-[24px] gap-[29px] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.18)] rounded-[20px] mx-auto'>
        <h2 className='text-[32px] w-[469px] font-[600]'>به کوئرا تسک منیجر خوش برگشتی :) </h2>
        <form action="" className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
            <label htmlFor=""> ایمیل</label>
            <input type="email" value={email} onChange={handleEmail} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {email != "" && !isEmailCorrect && <p className='text-[#FF0000]'>ایمیل معتبر وارد کنید</p>}
            <label htmlFor="">رمز عبور</label>
            <input type="password" value={password} onChange={handlePassword} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {password != "" && !isPasswordCorrect && <p className='text-[#FF0000]'>رمز عبور باید دارای حداقل 8 کاراکتر یک حرف و یک رقم باشد</p>}
            <Link href={"/forgetpassword"}>
                <span className="text-[#208D8E]">رمز عبور را فراموش کرده‌ای؟</span>
            </Link>
            <button type="submit" className="bg-[#208D8E] p-[10px] h-[48px] rounded-[6px] text-white mt-[5px]">ورود</button>
        </form>
        <div className="didSignIn">
            <span>ثبت‌نام نکرده‌ای؟ </span>
            <Link href={"/register"}><span className="text-[#208D8E]">ثبت‌نام</span></Link>
        </div>
    </main>
  )
}

export default LoginForm