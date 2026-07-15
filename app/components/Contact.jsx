import React from 'react'
import Image from 'next/image'
import {FaWhatsapp} from 'react-icons/fa'
import building from '../../public/cbuilding.svg'
import phone from '../../public/phone.svg'
import mail from '../../public/mail.svg'
const Contact = () => {
  return (
    <div className='bg-[#9D174D] border-b-[5px] border-secondary text-white mt-32 overflow-hidden'>
        <div className="lg:w-[1050px] mx-auto px-4">
            <div className="text-6xl font-semibold py-10 text-white">CONTACT US</div>
            <div className="flex pb-16 flex-col lg:flex-row gap-12 lg:gap-0">
                <div className=" flex-[1.4] flex flex-col gap-6 items-start">
                    <div className="flex gap-2 lg:gap-4"><Image src={building} className='w-[30px] '  alt="building" /><div className="text-xl font-semibold text-white">36, Ishaga Road, Ishaga, Agbelekale, Abule-Egba, Lagos State, Nigeria.</div></div>
                    <div className=" ml-10 lg:ml-12 text-xl font-semibold text-white">5/7, Jide Akinola Close, Off Michael Ayorinder Str., Agbelekale, Abule-Egba, Lagos State, Nigeria</div>
                    <div className="flex gap-2 lg:gap-4"><Image src={phone} className='w-[30px] '   alt="phone" /><div className="text-xl font-semibold text-white">08034258774, 08034258774, 08034258774</div></div>
                    <div className="flex gap-2 lg:gap-4 items-center"><Image src={mail} className='w-[30px] '   alt="mail" /><div className=" break-words text-xl font-semibold text-white">Evatoninternationalschools@gmail.com</div></div>
                    <button className="bg-green-400 py-3.5 px-10 flex gap-4 items-center text-lg font-bold text-white"><FaWhatsapp color='white' size={24} />Whatsapp</button>
                </div>
                <div className="flex-[2] flex flex-col  lg:pl-16 text-black ">
                    <div className="w-full flex flex-col">
                    <div className="flex  flex-[1] flex-col lg:flex-row gap-4 lg:gap-6 wrap w-full mb-10">
                        <div className="w-full "><input type="text" className='w-full py-4 px-4 text-lg font-semibold placeholder:text-zinc-400' placeholder='Name'/></div>
                        <div className="w-full"><input type="text" className='w-full py-4 px-4 text-lg font-semibold placeholder:text-zinc-400' placeholder='Email Address' /></div>
                    </div>
                    <div className="flex flex-[3] w-full h-full"><textarea name="" id="" placeholder='Message' className='w-full h-44 outline-none p-4 text-lg font-semibold placeholder:text-zinc-400'></textarea></div>
                    <button className="flex-[1] py-3.5 px-14 bg-secondary mt-10 lg:mt-6 lg:ml-auto flex justify-center items-center text-center text-lg font-bold text-white lg:w-40 ">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact