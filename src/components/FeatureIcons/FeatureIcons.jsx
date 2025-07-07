import { motion } from "framer-motion";
import icon1 from "../../assets/problem.png";
import icon2 from "../../assets/liveChat.png";
import icon3 from "../../assets/group.png";
import icon4 from "../../assets/courses.png";
import icon5 from "../../assets/hand.png";

const features = [
  { icon: icon1, title: "Problem Solving" },
  { icon: icon2, title: "Live chat" },
  { icon: icon3, title: "Group Reading" },
  { icon: icon4, title: "10k Courses" },
  { icon: icon5, title: "Hand-on activities" },
];

export default function FeatureList() {
  return (
    <section className="px-[1rem] py-[2rem]">
      <div className="max-w-[90rem] mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-[1.5rem]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-[1rem] bg-cyan-100 px-[1.5rem] py-[1rem] rounded-xl w-[13.75rem] sm:w-[14rem]"
            initial={{ opacity: 0, y: 2.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-600 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {feature.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
