import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion
import trackImg1 from "../../assets/Frame 6530.png";
import trackImg2 from "../../assets/a kid learning coding.png";
import trackImg3 from "../../assets/a Egyptian kid learning programming.png";
import trackImg4 from "../../assets/an arab girl learning ui design.png";
import trackImg5 from "../../assets/an arab 6 years old kid learning cyber securety.png";
import trackImg6 from "../../assets/a 12 years girl learning CSS.png";

// Data
const tracksData = [
  { id: 1, title: 'Learn Marketing from Top Instructors.', image: trackImg1 },
  { id: 2, title: 'Master UI/UX Design from Scratch.', image: trackImg2 },
  { id: 3, title: 'Advanced React Development Bootcamp.', image: trackImg3 },
  { id: 4, title: 'UI Design Fundamentals for Beginners.', image: trackImg4 },
  { id: 5, title: 'Cyber Security Basics for Kids.', image: trackImg5 },
  { id: 6, title: 'Learn CSS Like a Pro.', image: trackImg6 },
];

// Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Tracks() {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4 py-12 capitalize select-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left text-[#1F2A37] tracking-tight">
          Most Popular Tracks
        </h2>
        <Link
          to="/ourcourses"
          className="flex items-center justify-center bg-[#1B8354] text-white text-sm sm:text-base px-4 py-2 rounded-sm hover:bg-[#166B46] transition duration-200"
        >
          <span>View all</span>
          <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </motion.div>

      {/* Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracksData.map((track, i) => (
          <motion.div
            key={track.id}
            className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300"
            variants={cardVariants}
            custom={i}
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-[1.5rem] w-[18.438rem] sm:text-xl font-medium font-[500] text-[#333333] leading-snug">
                {track.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
