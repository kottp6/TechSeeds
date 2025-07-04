import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    track: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateName = (name) => {
    const trimmed = name.trim();
    if (trimmed.length < 3) return 'Name must be at least 3 characters long';
    if (/\d/.test(trimmed)) return 'Name must not contain numbers';
    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) return 'Name must contain 2 or 3 words';
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]{2,}@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Email must start with a letter and be valid';
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(01[0125]\d{8})$/;
    if (!phoneRegex.test(phone.trim())) return 'Please enter a valid Egyptian phone number';
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';
    if (name === 'username') error = validateName(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'phone') error = validatePhone(value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const isFormValid = () => {
    return (
      formData.username.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.track &&
      !validateName(formData.username) &&
      !validateEmail(formData.email) &&
      !validatePhone(formData.phone)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.username);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const trackError = formData.track === '' ? 'Please select a learning track' : '';

    const newErrors = {
      username: nameError,
      email: emailError,
      phone: phoneError,
      track: trackError
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) return;
    console.log('Valid Data:', formData);
    toast.success('Form submitted successfully!');
    setFormData({ username: '', email: '', phone: '', track: '' });
    setErrors({});
  };

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 3.75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-full mx-auto mt-[5rem] px-4 capitalize'
    >
      <div className='max-w-[90rem] mx-auto'>
        <h1 className='w-[34.5rem] md:text-6xl text-3xl font-semibold tracking-tight mb-6'>
          Enrol for a track now
        </h1>

        <div className='flex flex-col lg:flex-row justify-between items-start gap-y-10'>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -3.75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className='mt-[4rem] text-2xl md:text-4xl sm:text-5xl lg:text-6xl max-w-[22.75rem] md:max-w-[35rem] font-bold'>
              Take your child’s education to the next level
            </h2>
            <p className='mt-[5rem] h-[10rem] md:w-[33rem] w-[22.75rem] text-2xl text-[#333] font-normal leading-8'>
              preparing them for the real world is our mission, giving them the skills and tools they need is our method.
            </p>
            <p className='md:w-[33rem] w-[22.75rem] text-2xl text-[#333] font-normal leading-8 mt-auto'>
              your children's education is our responsibility.
            </p>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 3.75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative w-full max-w-[36.7rem] mt-[5.125rem] bg-white rounded-3xl shadow-[0_0_1.5625rem_0_#1118272E]'
          >
            <div className='absolute top-[-6.25rem] right-[1.4375rem] w-[21.56rem] h-[6.25rem] bg-[#6D428F] flex flex-col items-center justify-center'>
              <p className='text-white text-2xl font-medium'>Book Now 20% OFF</p>
              <p className='text-white text-xl font-medium'>10% Extra Discount for Siblings</p>
            </div>

            <h3 className='mt-[2.3125rem] ml-[2.5rem] text-2xl font-semibold leading-5'>
              Registration for enrolment
            </h3>

            <form className="ml-[2.5rem] max-w-[36.7rem] w-full pb-20" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="group relative w-[80%] md:w-[90%] max-w-[32.8rem] mt-16">
                <input
                  required
                  minLength={3}
                  name="username"
                  id="username"
                  placeholder="Name"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="peer w-full h-[3.75rem] px-4 py-2 text-lg border border-gray-300 rounded-md outline-none hover:border-[#8a93a8] transition-all duration-300"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[0.125rem] bg-[#1B8354] transition-all duration-500 group-focus-within:left-0 group-focus-within:w-full"></span>
              </div>
              {errors.username && <p className="text-red-500">{errors.username}</p>}

              {/* Email */}
              <div className="group relative w-[80%] md:w-[90%] max-w-[32.8rem] mt-8">
                <input
                  required
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="peer w-full h-[3.75rem] px-4 py-2 text-lg border border-gray-300 rounded-md outline-none hover:border-[#8a93a8] transition-all duration-300"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[0.125rem] bg-[#1B8354] transition-all duration-500 group-focus-within:left-0 group-focus-within:w-full"></span>
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              {/* Phone */}
              <div className="group relative w-[80%] md:w-[90%] max-w-[32.8rem] mt-8">
                <input
                  required
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="peer w-full h-[3.75rem] px-4 py-2 text-lg border border-gray-300 rounded-md outline-none hover:border-[#8a93a8] transition-all duration-300"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[0.125rem] bg-[#1B8354] transition-all duration-500 group-focus-within:left-0 group-focus-within:w-full"></span>
              </div>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}

              {/* Track Select */}
              <div className="group relative w-[80%] md:w-[90%] max-w-[32.8rem] mt-8">
                <select
                  name="track"
                  id="track"
                  value={formData.track}
                  onChange={handleChange}
                  className="peer w-full h-[3.75rem] px-4 pr-[2.5rem] text-lg border border-gray-300 rounded-md outline-none appearance-none hover:border-[#8a93a8] transition-all duration-300"
                >
                  <option value="">Select a learning track</option>
                  <option value="track1">Track 1</option>
                  <option value="track2">Track 2</option>
                  <option value="track3">Track 3</option>
                </select>
                <span className="absolute bottom-0 left-1/2 w-0 h-[0.125rem] bg-[#1B8354] transition-all duration-500 group-focus-within:left-0 group-focus-within:w-full"></span>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.track && <p className="text-red-500">{errors.track}</p>}

              {/* Submit Button */}
              <div className="text-right relative right-16">
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`capitalize mt-[2.5rem] w-[13rem] h-[3.125rem] pl-4 pr-3 rounded-lg text-white font-[400]
                    ${isFormValid() ? 'bg-[#1B8354] hover:bg-[#166A45]' : 'bg-[#E5E7EB] text-[#9DA4AE] cursor-not-allowed'} 
                    focus:border-2 focus:border-[#161616] active:bg-[#104631]`}
                >
                  book your kid seat <FaArrowRight className='inline ml-1' />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
