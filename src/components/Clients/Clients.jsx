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
    <div className='mt-[5rem] max-w-[1440px] mx-auto capitalize mb-[6.28rem] px-4'>
      <div className='max-w-[90rem] mx-auto'>
        <h2 className='font-[600] text-4xl tracking-[-0.1rem] mb-6 text-center'>
          meet our instructors
        </h2>

        {/* Scrollable Cards with Drag Motion */}
        <motion.div
          ref={sliderRef}
          className='cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide'
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className='flex gap-6 w-max'
          >
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-[24.4rem]  h-[23.22rem]   bg-white flex-shrink-0 flex flex-col items-center shadow-md rounded-xl p-6"
              >
                <img
                  src={image}
                  alt={`${instructor.name} photo`}
                  className='w-[7.12rem] h-[7.12rem] rounded-full'
                />
                <p className='font-[600] text-xl text-[#333333] mt-4 text-center'>
                  {instructor.name}
                </p>
                <p className='font-[500] text-base text-[#09B451] text-center mt-[6px]'>
                  {instructor.role}
                </p>
                <p className='mt-6 text-base text-[#333333] text-center leading-relaxed'>
                  {instructor.quote}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
