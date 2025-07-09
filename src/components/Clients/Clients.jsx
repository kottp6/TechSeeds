import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/person.png";

const instructors = [
  { name: "john mark", role: "senior developer", quote: "“Education will be for you what you want it to be”" },
  { name: "lara shrof", role: "Marketing Lead", quote: "“Knowledge has to be improved, challenged, and increased constantly, or it vanishes”" },
  { name: "zeng chin", role: "Data Analyst at Meta", quote: "“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”" },
  { name: "mariam lee", role: "UX Designer", quote: "“Design is intelligence made visible”" },
  { name: "abdul rahman", role: "AI Engineer", quote: "“Machines are great, but teaching is an art”" },
  { name: "sophia chen", role: "Cloud Architect", quote: "“The sky is not the limit when you’re in the cloud”" }
];

const Clients = () => {
  const sliderRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollWidth = sliderRef.current?.scrollWidth || 0;
    const offsetWidth = sliderRef.current?.offsetWidth || 0;
    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <div className="select-none mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <h2 className="text-2xl text-[#1F2A37] sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
        Meet Our Instructors
      </h2>

      {/* Scrollable Cards */}
      <motion.div
        ref={sliderRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing py-10"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 w-max"
        >
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[90vw] sm:min-w-[20rem] max-w-sm bg-white flex-shrink-0 shadow-lg shadow-[#CBCBCB] rounded-xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={image}
                alt={`${instructor.name} photo`}
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="font-semibold text-lg text-[#333333] mt-4">
                {instructor.name}
              </p>
              <p className="font-medium text-[#09B451] mt-1 text-sm sm:text-base">
                {instructor.role}
              </p>
              <p className="mt-4 text-[#333333] text-sm sm:text-base leading-relaxed">
                {instructor.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Clients;
