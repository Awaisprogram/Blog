// components/Blog.js
import Image from "next/image";
import blg4 from "../images/blg4.jpg";
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
                src={blg4}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                  Master The Art Of Nature With These 7 Tips
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                  Spending time in nature is more than just a getaway; it&apos;s a chance to connect deeply with the world around you. Whether it&apos;s a walk in the park or a hike in the mountains, nature has the power to ground us and bring clarity to our minds.
                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-color text-gray-600 mb-4">
                  Try practicing &quot;forest bathing&quot; or Shinrin-yoku—a Japanese practice that involves immersing yourself in nature with all of your senses. Take slow, deliberate steps, breathe deeply, and let the sounds, smells, and sights of nature fill your awareness. This method can help reduce stress and improve mental clarity.
                </blockquote>
                <p className="text-gray-600 mb-4">
                  By embracing these practices, you can develop a more profound connection with nature, and in doing so, unlock its potential to restore and inspire you.
                </p>
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
