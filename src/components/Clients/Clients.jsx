import React, { useRef } from 'react';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='mt-[5rem] max-w-[1440px] mx-auto capitalize mb-[6.28rem] px-4'>
      <div className='max-w-[90rem] mx-auto'>
        <h2 className='font-[600] text-4xl tracking-[-0.1rem] mb-6 text-center'>
          meet our instructors
        </h2>

        {/* Scrollable Cards */}
        <div className='overflow-hidden'>
          <div
            ref={scrollRef}
            className='flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide'
          >
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="w-[22rem] h-[26rem] bg-white flex-shrink-0 flex flex-col items-center shadow-md rounded-xl p-6"
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
              </div>
            ))}
          </div>
        </div>

        {/* Arrows Under Section */}
        <div className='flex justify-center gap-4 mt-6'>
          <button
            onClick={() => scroll('left')}
            className='p-5 bg-[#09B451] text-white rounded-full hover:bg-[#068a3f]'
          >
            <VscChevronLeft className='text-2xl' />
          </button>
          <button
            onClick={() => scroll('right')}
            className='p-5 bg-[#09B451] text-white rounded-full hover:bg-[#068a3f]'
          >
            <VscChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
