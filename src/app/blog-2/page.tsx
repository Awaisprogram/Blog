// components/Blog.js
import Image from "next/image";
import blg2 from "../images/blg2.png";
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
                src={blg2}
                alt="Blog 1"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">
                  Project Ideas Around the House
                </h5>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                  <i className="fas fa-user"></i> Travel, Lifestyle |
                  <i className="fas fa-comment"></i> 03 Comments
                </div>
                <p className="text-gray-600 mb-4">
                  Transforming your home can be a fulfilling and creative
                  process, and there are countless ways to spruce things up with
                  projects you can easily tackle around the house. Start with
                  small upgrades like organizing your space, rearranging
                  furniture for a fresh look, or incorporating DIY home decor
                  projects. You can also try creating custom shelves, repainting
                  old furniture, or even crafting personalized wall art to
                  showcase your style.
                </p>
                <blockquote className="bg-gray-100 p-4 italic border-l-4 border-color text-gray-600 mb-4">
                  Try repurposing unused household items for new purposes. For
                  example, turn an old wooden ladder into a stylish bookshelf or
                  use mason jars as planters. Not only will this reduce waste,
                  but it will also give you one-of-a-kind pieces that add charm
                  and character to your home.
                </blockquote>
                <p className="text-gray-600 mb-4">
                  With a bit of creativity and resourcefulness, you can easily
                  transform your space into a more functional and aesthetically
                  pleasing environment, making it a place you love to be.
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
        <Pre />
      </div>
      <Comment/>
    </div>
  );
};

export default Blog;
