


import { RxCaretDown } from 'react-icons/rx'
import Link from 'next/link'
const Text = () => {

  return (
    <div className='flex flex-col items-center lg:w-[800px] lg:px-0 px-4 mx-auto py-8'>
      <div className=" hidden lg:block relative mb-6"><div className="bg-pink rounded-full  z-20   p-1 pulse"><RxCaretDown color='white' size={40} /></div>
</div>
        <div className=" font-medium">
            <h1 className='text-4xl font-bold my-6 text-center text-secondary'>WELCOME TO EVATON INTERNATIONAL SCHOOLS </h1>
            <div className="lg:w-[780px] lg:px-0 mx-auto">
            <p className=' text-justify mb-5 leading-relaxed text-xl font-medium text-black'> Step into a world of limitless possibilities, where education transcends boundaries and excellence thrives. At Evaton International Schools, we are dedicated to providing a holistic educational experience that nurtures the whole child.
</p>
<p className="text-justify mb-5 leading-relaxed text-xl font-medium text-black">Our mission is to empower students to become independent thinkers, instill a profound respect for the dignity of labor, and embrace the core values that shape a meaningful life. We believe in inspiring a passion for achievement and self-improvement, both within the walls of our school and throughout their future endeavors.
</p>
<div className='w-full flex justify-center mb-16 lg:mb-36'><Link href={'/about'} className='mx-auto'><button className='px-6 py-3.5 bg-secondary text-white font-bold text-lg mx-auto'>View All</button></Link></div>


            </div>

        </div>


       
    </div>
  )
}

export default Text