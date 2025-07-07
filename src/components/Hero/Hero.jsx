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
    <section className="min-h-screen px-4 py-12 md:-mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{ fontFamily: "MyFont" }}
            className="text-[2rem] md:text-[2.8rem] font-400 leading-[3rem] md:leading-[5rem] mb-6 tracking-wider"
          >
            <span className="text-[#FE602F]">DIVE </span>
            INTO THE <br />
            <span className="text-[#111624]">GREATNESS OF</span>
            <br />
            <span className="text-[#A2BF00] inline-flex items-center gap-2">
              LEARNING.
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white"
              />
            </span>
          </h1>

          <p className="text-gray-600 max-w-lg text-base mb-8 mt-4">
            Educational platform for digital skills where students aged between
            6–17 make their dreams come true by designing real projects.
          </p>

          <button
            className="bg-green-700 text-white w-full sm:w-64 h-14 px-6 py-3 rounded-md font-medium 
            hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
            active:bg-green-900 transition duration-200 ease-in-out flex items-center justify-center space-x-2"
          >
            <span>Book your kid’s seat</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="relative w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-20 md:w-28 h-[34rem] py-20 bg-[#E4FFFF] rounded-tr-[10%] rounded-br-[10%] right-5 translate-x-[50%] md:translate-x-[20%] z-0 hidden sm:block" />


          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
            {/* Decorative avatars */}
            <img src={avatar1} alt="bg-avatar-1" className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-10 sm:h-14 rounded-full opacity-70 -z-10" />
            <img src={avatar3} alt="bg-avatar-2" className="absolute top-[30%] -left-3 w-12 sm:w-16 h-12 sm:h-16 rounded-full opacity-60 -z-10" />
            <img src={avatar2} alt="bg-avatar-3" className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full opacity-70 -z-10" />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 z-10">
              <div className="aspect-square rounded-full bg-[#08A5E4] flex items-center justify-center overflow-hidden">
                <img src={heroGirl} alt="Student" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl bg-[#FDDF2F] flex items-center justify-center overflow-hidden">
                <img src={heroGrad} alt="Graduate" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl bg-[#A2BF00] flex items-center justify-center overflow-hidden">
                <img src={heroLaptop} alt="Laptop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[1.125rem_3rem_3rem_1.125rem] bg-[#EB420E] flex items-center justify-center overflow-hidden">
                <img src={heroTeacher} alt="Teacher" className="w-[95%] h-[95%] object-cover rounded-full" />
              </div>
            </div>

            {/* Bottom floating info card */}
            <div className="hidden sm:flex items-center justify-center text-lg font-semibold absolute -bottom-8 -left-[3.5rem] z-10 translate-x-[-50%] bg-white shadow-md rounded-lg px-5 py-4 w-[16rem] sm:w-72 h-[10rem] sm:h-[12rem]">
              <div>
                <p className="text-center text-2xl text-gray-700 font-semibold">
                  Learn from best <br />
                  <span className="text-green-600">instructors</span>
                </p>
                <div className="flex mt-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={heroLaptop}
                      alt="avatar"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white -ml-2 first:ml-0"
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
