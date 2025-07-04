import { motion } from "framer-motion";
import boyBg from "../../assets/about.png";
import float1 from "../../assets/giphy1.png";
import float2 from "../../assets/giphy2.png";
import float3 from "../../assets/giphy3.png";

const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

export default function VideoSection() {
  return (
    <section
      className="mt-[10rem] w-full min-h-[40rem] relative bg-cover bg-no-repeat bg-center flex items-center justify-center px-[1.5rem] md:px-[2.5rem]"
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
      <div className="max-w-[90rem] w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[2.5rem] py-[2.5rem] z-20 relative md:-top-[10rem]">
        {/* 🎬 Video with motion */}
        <motion.div
          initial={{ opacity: 0, x: -3.75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-[30rem] md:h-[30rem] bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center mx-auto"
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
          className="text-black font-semibold text-[3rem] sm:text-[1.5rem] leading-[2rem] sm:leading-[2.5rem] max-w-[28rem] mx-auto text-center md:text-left 
          relative md:top-[10rem] top-[5rem]"
        >
          <p className="text-[1.875rem] leading-[4rem]">
            <span className="text-gray-800">We dream of</span>{" "}
            <span className="text-black">better education</span> for all the
            children in the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
