import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import trackImg1 from "../../assets/Frame 6530.png";
import trackImg2 from "../../assets/a kid learning coding.png";
import trackImg3 from "../../assets/a Egyptian kid learning programming.png";
import trackImg4 from "../../assets/an arab girl learning ui design.png";
import trackImg5 from "../../assets/an arab 6 years old kid learning cyber securety.png";
import trackImg6 from "../../assets/a 12 years girl learning CSS.png";
import Navbar from '../Navbar/Navbar';

// Sample Data
const level1Data = [
  { id: 1, title: 'Learn Marketing from Top Instructors.', image: trackImg1 },
  { id: 2, title: 'Master UI/UX Design from Scratch.', image: trackImg2 },
  { id: 3, title: 'Advanced React Development Bootcamp.', image: trackImg3 },
  { id: 4, title: 'UI Design Fundamentals for Beginners.', image: trackImg4 },
  { id: 5, title: 'Cyber Security Basics for Kids.', image: trackImg5 },
  { id: 6, title: 'Learn CSS Like a Pro.', image: trackImg6 },
];

const level2Data = [...level1Data];
const level3Data = [...level1Data];

// Drag hook
const useDragScroll = () => {
  const ref = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    ref.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    ref.current.classList.remove('cursor-grabbing');
  };

  const onMouseUp = () => {
    isDragging.current = false;
    ref.current.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const TrackSection = ({ title, subtitle, data }) => {
  const drag = useDragScroll();

  return (
    <motion.div
      className="mt-12 select-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative inline-block">
        <motion.h2
          className="text-[#09B451] font-bold text-2xl sm:text-3xl md:text-[2.25rem] z-10 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <svg
          className="absolute -bottom-1 left-0 w-full h-[10px]"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,8 Q25,2 50,5 T100,8"
            fill="none"
            stroke="#09B451"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <motion.p
        className="mt-4 text-sm sm:text-base text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {subtitle}
      </motion.p>

      <div
        ref={drag.ref}
        onMouseDown={drag.onMouseDown}
        onMouseLeave={drag.onMouseLeave}
        onMouseUp={drag.onMouseUp}
        onMouseMove={drag.onMouseMove}
        className="mt-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
      >
        <Link to='/ourlearning' className="flex gap-6 sm:gap-8 w-max pb-4 px-1 sm:px-0">
          {data.map((track, i) => (
            <motion.div
              key={track.id}
              custom={i}
              variants={cardVariants}
              className="w-[24rem] h-[21.688rem] bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img src={track.image} alt={track.title} className="w-full h-[13.438rem] object-cover" />
              <div className="p-4">
                <h3 className="text-base text-[1.5rem] font-medium text-gray-800 mt-2">
                  {track.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </Link>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-sm text-gray-600 mb-4">
        <Link to="/" className="text-gray-800 font-medium">Home</Link> &gt; All Learning Tracks
      </div>

      <TrackSection
        title="Level 1"
        subtitle="( no prior knowledge required ) recommended for age 8-10"
        data={level1Data}
      />
      <TrackSection
        title="Level 2"
        subtitle="Level 2 ( requires passing Level 1 assessment )  recommended for age 10 - 12"
        data={level2Data}
      />
      <TrackSection
        title="Level 3"
        subtitle="Level 3 ( Requires passing Level 2 Assessment ) recommended for age 12 - 15"
        data={level3Data}
      />
    </div>
    </>
  );
};

export default Courses;
