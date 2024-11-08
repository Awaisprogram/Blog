// components/Blog.js
import Image from "next/image";
import blg3 from "../images/blg3.png";
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
                src={blg3}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                The Era of Web 3.0 & Generative AI
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                The digital landscape is undergoing a profound shift with the rise of Web 3.0 and Generative AI, two transformative forces reshaping how we interact with the internet and technology. Web 3.0, with its decentralized structure, promises more control for users over their data, as opposed to the centralized model of Web 2.0. Powered by blockchain and decentralized networks, it aims to create a more open and user-centric web where privacy, security, and transparency are prioritized.
                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-color text-gray-600 mb-4">
                As Web 3.0 grows, the integration of Generative AI will play a pivotal role in creating personalized, dynamic, and interactive content. AI can generate new ideas, automate content creation, and even design personalized digital experiences, bridging the gap between technology and human creativity in unprecedented ways.
                </blockquote>
                <p className="text-gray-600 mb-4">The combination of Web 3.0 and Generative AI is set to unlock new opportunities for innovation, collaboration, and digital ownership, paving the way for a more intelligent and decentralized internet. This era will redefine how we connect, create, and communicate online.</p>
              </div>
            </div>
            <Bottom />
          </div>
          <div className="lg:w-1/3">
            <Search />
            <Catogary />
             <Post/>
            <Tag/>
            <News/>
          </div>
        </div>

       <Pre/>
      </div>
    <Comment/>
    </div>
  );
};

export default Blog;
