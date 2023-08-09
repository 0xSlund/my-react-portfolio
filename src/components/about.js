import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F0F5F9] text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sean, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about exploring new skills and building tools
                that can tangibly impact the lives of others for the better. I
                have a background in research and thrive in collaborative
                spaces. I am mastering my frontend web development skills to confidently create fullstack applications in future.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
