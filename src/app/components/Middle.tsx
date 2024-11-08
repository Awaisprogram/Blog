import Image from 'next/image';
import middle from '../images/img.jpg'

const StoryOfTheWeek = () => {
  return (
    <div className="relative w-full mt-10 h-[600px] ">
      <Image
        src={middle} 
        alt="Story of the Week"
        layout="fill" 
        objectFit="cover"
        className="w-full h-full "
        priority 
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 space-y-8 text-white px-4 ">
        <h2 className="text-4xl font-light mb-2  text-center">STORY OF THE WEEK</h2>
        <p className="text-sm text-gray-300 mb-4">Jun 12, 2023 | 2 min read</p>
        <h1 className="text-4xl font-semibold text-center leading-relaxed max-w-2xl hover:text-gray-300">
          THE STORY BEHIND “FYI: I AM ABOUT TO LOVE YOU” — AN INTERVIEW WITH KAY VAN HANS
        </h1>
      </div>
    </div>
  );
};

export default StoryOfTheWeek;
