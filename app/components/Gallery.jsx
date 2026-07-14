import React from 'react'
import Gallery1 from '../../public/gallery1.png'
import Gallery2 from '../../public/gallery2.png'
import Gallery3 from '../../public/gallery3.png'
import Gallery4 from '../../public/gallery4.png'
import Gallery5 from '../../public/gallery5.png'
import Gallery6 from '../../public/gallery6.png'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div>
        <div className=" lg:w-[1050px] mx-auto px-4 lg:pt-16">
        <div className="font-bold text-4xl text-black text-center my-16">OUR GALLERY</div>
        <div className="lg:grid flex flex-wrap justify-center items-center grid-cols-3  grid-rows-2 gap-5 lg:gap-10">
            <div className=""><Image src={Gallery1}  alt="Gallery1" /></div>
            <div className=""><Image src={Gallery2}  alt="Gallery2" /></div>
            <div className=""><Image src={Gallery3}  alt="Gallery3" /></div>
            <div className=""><Image src={Gallery4}  alt="Gallery4" /></div>
            <div className=""><Image src={Gallery5}  alt="Gallery5" /></div>
            <div className=""><Image src={Gallery6}  alt="Gallery6" /></div>
        </div>
        </div>
    </div>
  )
}

export default Gallery