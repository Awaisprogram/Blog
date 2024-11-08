import Heading from './Heading'
import Cards from './Card'
import blg1 from  '../images/blg1.png'
import blg2 from  '../images/blg2.png'
import blg3 from  '../images/blg3.png'
import Button from './Button'
import Link from 'next/link'

function Page() {
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
    },]
    return (
      <>
        <div>
          <Heading title='Featured Blogs'/>
        </div>
        <div className='project flex lg:flex-row flex-col flex-wrap justify-center items-center gap-4'>
          {posts.map((post, index) => (
            <Cards key={index} post={post} />
          ))}
          <Link href='./blogs'>  
          <Button text='See more'/>
          </Link>
         
        </div>
      </>
    )
  }
  
  export default Page