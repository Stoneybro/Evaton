import { MdOutlinePhone, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'

const Topbar = () => {
  return (
    <div className="w-full bg-slate-50 h-[30px] hidden lg:flex items-center justify-end px-12">
      <div className="flex items-center gap-7">

        {/* Phone */}
        <a
          href="tel:08034258774"
          className="flex items-center gap-2 text-sm font-semibold text-black hover:text-[#F358AF] transition-colors"
        >
          <MdOutlinePhone size={18} color="#F358AF" />
          <span>08034258774, 08034258774</span>
        </a>

        {/* Email */}
        <a
          href="mailto:Evatoninternationalschools@gmail.com"
          className="flex items-center gap-2 text-sm font-semibold text-black hover:text-[#F358AF] transition-colors"
        >
          <MdOutlineEmail size={18} color="#F358AF" />
          <span>Evatoninternationalschools@gmail.com</span>
        </a>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <MdOutlineLocationOn size={18} color="#F358AF" />
          <span>Alimosho, Lagos</span>
        </div>

      </div>
    </div>
  )
}

export default Topbar
