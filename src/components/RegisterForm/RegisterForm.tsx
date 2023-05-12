import React, { useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isNameCorrect, setIsNameCorrect] = useState<boolean>(false)
    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(false)
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false)
    const [isPolicyChecked, setIsPolicyChecked] = useState<boolean>(false)
  
    const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
        const userName = event.target.value
        if(userName.length > 3) {
            setIsNameCorrect(true);
        }else{
            setIsNameCorrect(false);
        }
        setName(userName)
    }


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

    const handleClassDisable = () => {
        if(isPolicyChecked) return "bg-[#208D8E] p-[10px] h-[48px] rounded-[6px] text-white mt-[5px] hover:cursor-pointer"
        return 'bg-[#208D8E] p-[10px] h-[48px] rounded-[6px] text-white mt-[5px] opacity-50 cursor-not-allowed'
    }
    


  return (
    <main className='flex flex-col h-auto w-[402px] h-auto p-[24px] gap-[29px] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.18)] rounded-[20px] mx-auto'>
        <h2 className='text-[32px] font-[600]'>ثبت‌نام در کوئرا تسک منیجر</h2>
        <form action="" className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
            <label htmlFor=""> نام کامل</label>
            <input type="text" value={name} onChange={handleName} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {name!="" && !isNameCorrect && <p className='text-[#FF0000]'>نام کاربری باید بیشتر از 3 کاراکتر باشد</p>}
            <label htmlFor=""> ایمیل</label>
            <input type="email" value={email} onChange={handleEmail} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {email != "" && !isEmailCorrect && <p className='text-[#FF0000]'>ایمیل معتبر وارد کنید</p>}
            <label htmlFor="">رمز عبور</label>
            <input type="password" value={password} onChange={handlePassword} className='h-[40px] border-[1px] border-solid border-[#AAAAAA] rounded-[6px]'/>
            {password != "" && !isPasswordCorrect && <p className='text-[#FF0000]'>رمز عبور باید دارای حداقل 8 کاراکتر یک حرف و یک رقم باشد</p>}
            <div className="checkBox flex align-center">
                <input type="checkbox" checked={isPolicyChecked} onChange={()=>setIsPolicyChecked(!isPolicyChecked)} name="" id="" className='ml-[5px] w-[20px] h-[20px]'/>
                <label htmlFor="">قوانین و مقررات را می‌پذیرم.</label>
            </div>
            <button type="submit" disabled={!isPolicyChecked}  className={handleClassDisable()}>ثبت نام</button>
        </form>
    </main>
  )
}

export default RegisterForm