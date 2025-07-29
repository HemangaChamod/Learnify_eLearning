import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction= () => {
    return (
          <div className="w-[80%] mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/30">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-r from-[#F3EAFF] to-[#E1EFFF]">  
                <h2 className="text-2xl md:text-4xl font-medium mt-2">
                    Learn Smarter, Grow Faster with <br />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Learnify’s Guided Learning </span> 
                     & Proven Results!
                </h2>
                <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm"> Whether you're a beginner or leveling up your skills, Learnify provides expert-led content, flexible paths, and powerful tools to fuel your success.</p>
                <button type="button" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300"> 
                    Get Started Today
                </button>
            </div>
        </div>
    );
};

export default CallToAction