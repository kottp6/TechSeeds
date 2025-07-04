import { useRef, useState } from "react";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const videos = [
  {
    name: "Project 1",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Project 2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Project 3",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Project 4",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
];

export default function StudentsProjects() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="max-w-[1440px] mx-auto my-16 px-4 mt-[5rem]">
      <h1 className="text-center text-4xl font-bold mb-10">Our Students Projects</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Left Title & Controls */}
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[30%]">
          <h2 className="text-5xl font-bold text-center lg:text-left leading-snug mb-10">
            What our <br />
            <span className="relative inline-block">
              <span className="text-[#09B451] font-bold z-10 relative">Students</span>
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
            </span>
            <br />
            Have Done
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-16 h-16 rounded-full border border-[#09B451] text-[#09B451] flex items-center justify-center mr-10 hover:bg-[#09B451] hover:text-white transition"
            >
              <VscChevronLeft className="text-3xl cursor-pointer" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-16 h-16 rounded-full border border-[#09B451] text-[#09B451] flex items-center justify-center hover:bg-[#09B451] hover:text-white transition"
            >
              <VscChevronRight className="text-3xl cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Right Video Cards with drag-to-scroll */}
        <div className="w-full lg:w-[65%] overflow-hidden">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none scrollbar-hide"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-[28rem] max-w-[28rem] bg-white shadow-md rounded-xl overflow-hidden"
              >
                <div className="w-full h-[18rem] bg-gray-200">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
                <div className="p-4 text-center font-medium text-gray-800">
                  {video.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
