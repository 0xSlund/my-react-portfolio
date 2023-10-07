import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#ffffff] text-black'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 '>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About Us
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1250px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. We are Fujn. Please take a look around.</p>
            </div>
            <div>
              <p>We are driven by enabling a better world and disrupting existing trends by offering a way for women to upskill and find a hub that fits all their needs from educational to professional.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
