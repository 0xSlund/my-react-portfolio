import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#F0F5F9]">

            {/*container*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p>Hi, my name is</p>
            <h1>Sean Lund</h1>
            <h2>I'm a Fintech Student.</h2>
            <p>I am a student at Brandeis University that is interning at a startup called Fujn. I enjoy challenging myself and working in a collaborative environment to boost my ability to self-pace my learning journey. I am currently focusing on improving my web development skills and branching out to the wonderful world of Python.</p>
            <div>
                <button>View Work <HiArrowNarrowRight/></button>
            </div>
        </div>
        </div>
    )
}

export default Home