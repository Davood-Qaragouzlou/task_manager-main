import Link from 'next/link';
import React, { useState } from 'react'

const LoginForm = () => {
    
    const [email, setEmail] = useState<string>("")
    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    
  
    


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

    


    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(email);
        setShow(true);
    }

    
    


  return (
    <main className='flex flex-col mt-[100px] h-auto w-[463px] h-auto p-[24px] gap-[29px] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.18)] rounded-[20px] mx-auto'>
        <h2 className='text-[32px] font-[600]  mx-auto'>فراموشی رمز عبور </h2>
        {!show &&
            <form action="" className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
            <label htmlFor=""> ایمیل خود را وارد کنید</label>
            <input type="email" value={email} onChange={handleEmail} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {email != "" && !isEmailCorrect && <p className='text-[#FF0000]'>ایمیل معتبر وارد کنید</p>}
            <button type="submit" className="bg-[#208D8E] p-[10px] h-[48px] rounded-[6px] text-white mt-[5px]">دریافت ایمیل بازیابی رمز عبور</button>
        </form>
        }
        {show && 
            <div className="didSignIn">
                <p className='text-[14px]'>لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>
            </div>
        }
        
    </main>
  )
}

export default LoginForm