import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PiGreaterThanLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import image2 from "../../assets/user-profile-02.png";
import full from '../../assets/RatingStar.png';
import half from '../../assets/RatingStarhalf.png';
import empty from '../../assets/RatingStarempty.png';
import frame1 from '../../assets/Frame_6520.png';
import frame2 from '../../assets/Frame_people.png';
import './learning.css';

export const OurLearning = () => {
  return (
    <div className='max-w-[90rem] min-h-full lg:min-h-0 lg:h-auto mx-auto capitalize cont-1024'>
      <div className='max-w-[76rem] mx-auto mt-6 h-auto lg:h-[112.3rem]  mb-[6.25rem] bg-white'>

        <motion.div
          className='w-[9.875rem] h-5 flex items-center justify-between'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='w-[2.625rem] inline text-sm'>home</p>
          <PiGreaterThanLight className='inline text-[#9DA4AE]' />
          <span className='w-[7.5rem] text-[#9DA4AE] text-sm'>learning track</span>
        </motion.div>

        <motion.div
          className='flex justify-between items-center w-full h-[3.75rem] mb-6 header-414'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='w-[21.19rem] text-[2.25rem] font-[600] tracking-[-0.09rem] text-[#1F2A37]'>learning track name</h2>
          <button className='hover:bg-[#166A45] active:bg-[#104631] capitalize text-white w-[16.875rem] h-[3.75rem] rounded-[4px] bg-[#1B8354] text-whitebg-[#1B8354] font-[400]'>
            book your kid seat <span className='w-[24px] h-[24px] ml-1'><FaArrowRight className='inline' /></span>
          </button>
        </motion.div>

        <motion.div
          className='mb-[3.75rem]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <video className='w-full h-[32.3125rem] rounded-[20px]' controls autoPlay loop muted>
            <source src="/public/videos/2_5350365735585583249.mp4" type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          className='w-full h-[25.5rem] div-414'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='h-[2.75rem] font-[600] text-4xl text-[#1F2A37] tracking-[-0.09rem] he-fit'>What will your child be learning ?</h2>
          <p className='mt-[1.5rem] w-full h-24 text-2xl font-[300] text-[#161616] he-fit'>
             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
                        by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <p className='mt-[1.25rem] w-full h-56 text-2xl font-[300] text-[#161616] leading-8 he-fit'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in 
                        Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                        and going through the cites of the word in classical literature, discovered the undoubtable source. 
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
                        of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </motion.div>

        <motion.div
          className='mt-[3.75rem] h-[39rem] w-full flex justify-between gap-6 about-414'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='width-414 he-fit w-[24.3125rem] flex flex-col items-center gap-6'>
            <div className='w-full h-[33.5rem] border-[1px] border-[#D2D6DB] rounded-[1.5rem] p-4 flex flex-col items-center gap-6'>
              <img src={image2} alt="a photo" className='w-[22.5rem] h-[22.5rem] bg-[#F3F4F6] rounded-lg' />
              <div className='w-full h-[7.5rem] flex flex-col gap-3'>
                <p className='w-[12.3125rem] h-8 font-[600] text-2xl text-[#1F2A37]'>Abdullah Shahien</p>
                <p className='w-[10.875rem] h-8 font-[600] text-2xl text-[#1F2A37]'>UI/UX Designer</p>
                <div className='w-[14.5625rem] h-8 items-center flex gap-3'>
                  <div className='w-[11rem] flex justify-between items-center'>
                    <img src={full} alt="full star" />
                    <img src={full} alt="full star" />
                    <img src={full} alt="full star" />
                    <img src={half} alt="half star" />
                    <img src={empty} alt="empty star" />
                  </div>
                  <span className='w-[45px] h-[28px]'>(174)</span>
                </div>
              </div>
            </div>

            <div className='w-full h-16 flex justify-between items-center gap-[17px]'>
              <div className='hover:bg-[#166A45] w-[12.125rem] h-16 rounded-[5px] flex gap-3 justify-center items-center text-white bg-[#1B8354]'>
                <img src={frame1} alt="frame photo" className='bg-white rounded-[42.5px]' />
                <div className='w-[7.75rem] h-12'>
                  <p className='w-full h-6 text-base font-[600] leading-6 text-white'>Total Experience</p>
                  <p className='w-16 h-6 text-base font-[600] leading-6 text-white'>10 years</p>
                </div>
              </div>
              <div className='hover:bg-[#166A45] w-[11.125rem] h-16 rounded-[5px] flex gap-3 justify-center items-center text-white bg-[#1B8354]'>
                <img src={frame2} alt="frame photo" className='bg-white rounded-[42.5px]' />
                <div className='w-[6.75rem] h-12'>
                  <p className='w-full h-6 text-base font-[600] leading-6 text-white'>Total Students</p>
                  <p className='w-[53px] h-6 text-base font-[600] leading-6 text-white'>12,740</p>
                </div>
              </div>
            </div>
          </div>

          <div className='width-414 he-fit w-[50.1875rem] h-[18.25rem] flex flex-col items-start gap-6'>
            <h3 className='width-414 he-fit h-[2.75rem] text-4xl tracking-[-0.1rem] font-[600] leading-[44px] text-[#1F2A37]'>About Track Instructor</h3>
            <p className='width-414 he-fit w-full h-56 text-2xl font-[300] text-[#161616] leading-8'>
               A seasoned UX/UI Designer with over 10 years of experience in creating user-centered designs for diverse industries, 
                            including education, retail, and marketing. Skilled in end-to-end UX processes, design systems, 
                            and cross-functional collaboration, I have led projects for organizations like Shaqra University and UnionCoop. 
                            Fluent in Arabic and English, combine strategic thinking with a passion for accessibility and innovation to deliver impactful digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
