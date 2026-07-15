import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaInstagram,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {BiLogoFacebook} from 'react-icons/bi'
import {RxCaretUp} from 'react-icons/rx'
import evaton from '../../public/evaton2.png'
import stripes from '../../public/Stripes.png'

const Footer = () => {
  return (
    <>
    <div className='bg-secondary py-8 text-white relative overflow-hidden'>
        <Image src={stripes} alt="Background Stripes" fill className="object-cover opacity-1 z-0" />
        
        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:px-0 px-4 mx-auto lg:max-w-[1150px] justify-between">
              
              <div className="flex flex-col">
                  <div className='mb-4'><Image src={evaton} width={200} height={120}  alt="evaton" /></div>
                  <div className="text-lg font-semibold mb-4">Stay Connected</div>
                  <div className="flex gap-4">
                      <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"> <BiLogoFacebook color='#0D41DB' /></div>
                      <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"><FaInstagram color='#0D41DB' /> </div>
                      <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"> <FaLinkedinIn color='#0D41DB' /></div>
                      <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"> <FaYoutube color='#0D41DB' /></div>
                  </div>
              </div>

              <div className="flex mt-6 lg:mt-0 flex-col gap-3 text-lg font-semibold">
                  <Link href={'#'}>Home</Link>
                  <Link href={'#'}>About</Link>
                  <Link href={'#'}>Schools</Link>
                  <Link href={'#'}>Admissions</Link>
              </div>

              <div className="flex mt-6 lg:mt-0 flex-col gap-3 text-lg font-semibold">
                  <Link href={'#'}>Academics</Link>
                  <Link href={'#'}>School Portal</Link>
              </div>

              <div className="mt-6 lg:mt-0 self-start lg:self-auto">
                  <div className="bg-pink rounded-full p-1 cursor-pointer"><RxCaretUp color='white' size={40} /></div>
              </div>

            </div>

            <div className="mt-10 text-center text-indigo-400 text-base font-semibold px-4">
                Designed and Developed by NEXT STUDIO © Evaton International Schools 2023. All Rights Reserved
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer