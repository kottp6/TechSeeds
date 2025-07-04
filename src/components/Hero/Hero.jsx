import heroGirl from "../../assets/hero-girl.png";
import heroLaptop from "../../assets/hero-laptop.png";
import heroTeacher from "../../assets/hero-teacher.png";
import heroGrad from "../../assets/hero-grad.png";
import avatar from "../../assets/avatar.png";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <section className="bg-[#fefefe] min-h-screen px-[1.5rem] py-[3rem] md:-mb-[2.5rem] overflow-hidden">
  <div className="max-w-[90rem] w-full mx-auto bg-green-50 p-[1.25rem] rounded-2xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-[5rem]">
    {/* Left Section */}
    <motion.div initial={{ opacity: 0, y: 3.125 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h1
        style={{ fontFamily: "MyFont" }}
        className="md:text-[4rem] text-[2rem] sm:text-[3rem] lg:text-[3rem] font-extrabold leading-tight lg:leading-[6rem] mb-[1.5rem] tracking-wider"
      >
        <span className="text-orange-500">DIVE </span>
        INTO THE <br />
        <span className="text-black">GREATNESS OF</span>
        <br />
        <span className="text-lime-600">
          LEARNING.
          <img
            src={avatar}
            alt="avatar"
            className="inline-block w-[3rem] sm:w-[4rem] h-[3rem] sm:h-[4rem] rounded-full border-2 border-white ml-[0.5rem]"
          />
        </span>
      </h1>

      <p className="text-gray-600 max-w-lg text-md mb-[2.5rem] mt-[1.5rem]">
        Educational platform for digital skills where students aged between
        6–17 make their dreams come true by designing real projects.
      </p>

      <button
        className="bg-green-700 text-white w-full sm:w-[16.875rem] h-[3.75rem] px-6 py-3 rounded-md font-medium 
        hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
        active:bg-green-900 transition duration-200 ease-in-out flex items-center justify-center space-x-2"
      >
        <span>Book your kid’s seat</span>
        <ArrowRight size={20} />
      </button>
    </motion.div>

    {/* Right Section */}
    <motion.div
      className="relative w-full flex justify-center items-center z-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-[5rem] md:w-[6.6875rem] h-[110%] py-[5rem] bg-[#E4FFFF] rounded-xl right-0 translate-x-[50%] md:translate-x-[16%]" />

      <div className="relative w-full max-w-[31.25rem] h-auto">
        <img src={avatar1} alt="bg-avatar-1" className="absolute -top-[1.5rem] left-[45%] w-[2.5rem] sm:w-[3.5rem] h-[2.5rem] sm:h-[3.5rem] rounded-full opacity-70 -z-10" />
        <img src={avatar3} alt="bg-avatar-2" className="absolute top-[30%] -left-[0.5rem] w-[3rem] sm:w-[4rem] h-[3rem] sm:h-[4rem] rounded-full opacity-60 -z-10" />
        <img src={avatar2} alt="bg-avatar-3" className="absolute -bottom-[1.5rem] left-[44%] w-[2rem] sm:w-[3rem] h-[2rem] sm:h-[3rem] rounded-full opacity-70 -z-10" />

        <div className="grid grid-cols-2 gap-[1rem] w-full z-10">
          <div className="aspect-square rounded-full bg-cyan-600 flex items-center justify-center overflow-hidden">
            <img src={heroGirl} alt="Student" className="w-[90%] h-[90%] object-cover rounded-full" />
          </div>
          <div className="aspect-square rounded-xl bg-yellow-300 flex items-center justify-center overflow-hidden">
            <img src={heroGrad} alt="Laptop" className="w-[95%] h-[95%] object-cover rounded-xl" />
          </div>
          <div className="aspect-square rounded-xl bg-lime-400 flex items-center justify-center overflow-hidden">
            <img src={heroLaptop} alt="Teacher" className="w-[95%] h-[95%] object-cover rounded-xl" />
          </div>
          <div className="aspect-square rounded-[1.138rem_34.15rem_34.15rem_1.138rem] bg-red-500 flex items-center justify-center overflow-hidden">
            <img src={heroTeacher} alt="Graduate" className="w-[95%] h-[95%] object-cover rounded-full" />
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center text-lg font-semibold absolute -bottom-[0.5rem] -left-[5rem] z-10 -translate-x-1/2 bg-white shadow-md rounded-lg px-[1.25rem] py-[1rem] w-[16rem] sm:w-[18.75rem] h-[10rem] sm:h-[12.5rem]">
          <div>
            <p className="font-semibold text-2xl text-gray-700 text-center">
              Learn from best <br /> <span className="text-green-600">instructors</span>
            </p>
            <div className="flex mt-[0.75rem] items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={heroLaptop}
                  alt="avatar"
                  className="w-[2rem] sm:w-[2.25rem] h-[2rem] sm:h-[2.25rem] rounded-full border-2 border-white -ml-[0.5rem] first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

  );
}
