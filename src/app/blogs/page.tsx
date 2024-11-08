import React from 'react'
import Heading from '../components/Heading'
import Cards from '../components/Card'
import blg1 from  '../images/blg1.png'
import blg2 from  '../images/blg2.png'
import blg3 from  '../images/blg3.png'
import blg4 from  '../images/blg4.jpg'
import blg5 from  '../images/blg6.png'
import blg6 from  '../images/blg5.png'


function Blogs() {
  const posts = [
    {
      name: 'How to Give Yourself a Spa Day from Home',
      description: 'Creating a spa day at home is a wonderful way to relax and rejuvenate. Begin by setting a calming atmosphere: dim the…',
      image: blg1,
      url: '/blog-1'
    },
    {
      name: 'Project Ideas Around the House',
      description: 'Transforming your home can be a fulfilling and creative process, and there are countless ways to spruce ',
      image: blg2,
      url: '/blog-2'
    },
    {
      name: 'The Era of Web 3.0 & Generative AI',
      description: 'The digital landscape is undergoing a profound shift with the rise of Web 3.0 and Generative AI, two...',
      image: blg3,
      url: '/blog-3'
    },
    {
      name: '16 Unheard Ways To Achieve Greater Walker',
      description:'Achieving greater walking efficiency and endurance is not just about putting one foot in front of the other.',
      image: blg6,
      url: 'blog-5'
    },
    {
      name: 'Ready To Go Home After The Sunset View?',
      description: 'There is something magical about watching the sun dip below the horizon, painting the sky with vibrant hues of... ',
      image: blg5,
      url: 'blog-6'
    },
    {
      name: 'Master The Art Of Nature With These 7 Tips',
      description: 'Spending time in nature is more than just a getaway; its a chance to connect deeply with the world around you...',
      image: blg4,
      url: 'blog-4'
    },
  
  ]
  return (
    <>
      <div>
        <Heading title='Latest Blogs'/>
      </div>
      <div className='project flex lg:flex-row flex-col flex-wrap justify-center items-center gap-4 fade-in'>
        {posts.map((post, index) => (
          <Cards key={index} post={post} />
        ))}
      </div>
    </>
  )
}

export default Blogs
