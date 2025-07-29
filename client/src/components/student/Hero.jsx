import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <section className="bg-white w-full px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl pt-28 font-extrabold text-gray-900 leading-tight">
            Elevate Your Potential <br />
            With <span className="text-purple-600">Learnify</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
           Join thousands of learners and educators unlocking new skills every day. Learnify offers personalized learning paths, expert-led courses, and powerful tools to help you succeed.
          </p>

          {/* SearchBar */}
          <div className="mt-6 max-w-xl mx-auto md:mx-0">
            <SearchBar />
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 relative mt-20">
          <img src={assets.hero_girl} alt="Student" className="w-full max-w-md mx-auto" />

          {/* Decorative shape */}
          <div className="absolute bottom-0 -z-10 right-0 w-56 h-56 bg-purple-100 rounded-tl-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
