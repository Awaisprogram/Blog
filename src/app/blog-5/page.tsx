// components/Blog.js
import Image from "next/image";
import blg5 from "../images/blg5.png";
import Header from "../components/Header";
import Bottom from "../components/Blg-cards";
import Search from "../components/Search";
import Catogary from "../components/Catogary";
import Post from "../components/Post";
import Tag from "../components/Tag";
import News from "../components/News";
import Pre from "../components/Pre";
import Comment from "../components/Comment";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <Image
                src={blg5}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                16 Unheard Ways To Achieve Greater Walkers
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                Achieving greater walking efficiency and endurance is not just about putting one foot in front of the other. It&apos;s  about adopting mindful habits, leveraging the environment, and optimizing your walking technique to improve your overall health and stamina.


                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-green-500 text-gray-600 mb-4">
                Try practicing &quot;mindful walking,&quot; where you focus on your breathing, the movement of your body, and the surroundings with each step. This not only reduces stress but can also enhance your walking performance by aligning your mental state with your physical activity.
                </blockquote>
                <p className="text-gray-600 mb-4">By incorporating these lesser-known strategies into your routine, you&apos;ll experience improved posture, endurance, and overall enjoyment in your walking journey. Whether you&apos;re  looking to walk more efficiently, longer, or with less strain, these techniques can help elevate your walking experience.</p>
              </div>
            </div>

            <Bottom />
          </div>

          <div className="lg:w-1/3">
            <Search />
            <Catogary />
            <Post />
            <Tag />
            <News />
          </div>
        </div>
        <Pre/>
      </div>
      <Comment/>
    </div>
  );
};

export default Blog;
