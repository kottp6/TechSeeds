import { motion } from "framer-motion";
import boyBg from "../../assets/about.png";
import float1 from "../../assets/giphy1.png";
import float2 from "../../assets/giphy2.png";
import float3 from "../../assets/giphy3.png";

const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

export default function VideoSection() {
  return (
    <section
      className="select-none mt-[10rem] w-full h-[33.25rem] relative bg-cover bg-no-repeat bg-center flex items-center justify-center px-[1.5rem] md:px-[2.5rem]"
      style={{ backgroundImage: `url(${boyBg})` }}
    >
      {/* ✅ Floating Images Overlay */}
      <div className="absolute inset-0 z-10 opacity-50 flex items-center justify-center overflow-hidden">
        <img
          src={float1}
          alt="float1"
          className="w-1/3 h-full object-cover opacity-80"
        />
        <img
          src={float2}
          alt="float2"
          className="w-1/3 h-full object-cover opacity-80"
        />
        <img
          src={float3}
          alt="float3"
          className="w-1/3 h-full object-cover opacity-80"
        />
      </div>

      {/* ✅ Main Content with Motion */}
      <div className="md:w-[90rem] w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[7.563rem] py-[2.5rem] z-20 relative 
      md:-top-[3.563rem]">
        {/* 🎬 Video with motion */}
        <motion.div
          initial={{ opacity: 0, x: -3.75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[32.063rem] md:h-[32.313rem] bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center mx-auto"
        >
          <video
            className="w-full h-full object-cover rounded-xl"
            src={videoUrl}
            controls
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* 📝 Text with motion */}
        <motion.div
          initial={{ opacity: 0, y: 2.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#1F2A37] font-[700] text-[2.25rem] md:text-[2.25rem] leading-[3.5rem] -tracking-[2%] max-w-[28rem] mx-auto text-center md:text-left 
          relative md:top-[8rem] top-[1rem] md:w-[37.25rem] md:h-[5.5rem] -mt-10"
        >
          <p className="md:font-[700] md:leading-[2.75rem]  text-2xl">
            <span className="text-gray-800">We dream of</span>{" "}
            <span className="text-black">better education</span> for all the
            children in the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
