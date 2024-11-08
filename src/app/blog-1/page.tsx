// components/Blog.js
import Image from "next/image";
import blg1 from "../images/blg1.png";
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
                src={blg1}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                How to Give Yourself a Spa Day from Home
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                Creating a spa day at home is a wonderful way to relax and rejuvenate. Begin by setting a calming atmosphere: dim the lights, use candles with soothing scents, and play soft music. You can then enjoy a warm bath or shower, using Epsom salts or essential oils to relieve any tension in your body. Follow this with a gentle face mask to refresh your skin and a simple manicure or pedicure for added relaxation.
                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-color text-gray-600 mb-4">
                Add a touch of mindfulness during your spa time. Try closing your eyes, focusing on your breath, and practicing deep breathing or light meditation. This mental pause enhances the physical relaxation, turning your home spa experience into a holistic retreat.
                </blockquote>
                <p className="text-gray-600 mb-4">
                A spa day at home not only rejuvenates your body but also helps restore your mental clarity, making it the perfect way to unwind without leaving your house.
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
