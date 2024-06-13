// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ar from "../assets/Ar.svg";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="text-white flex flex-col md:flex-row justify-around items-center pt-15 min-h-screen bg-gray-900">
      <div className="mb-16 max-w-xl">
        <h1 className="font-semibold text-6xl mb-8">
          Create and Watch<br />
          <span className="font-thin text-sky-400">Video NFTs</span>
        </h1>
        <Slider {...settings}>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Welcome to MelodyTon </span>– The premier platform for digital artistry and innovation in the world of Video NFTs. Dive into an immersive experience where creativity meets blockchain technology, enabling artists and collectors alike to create, showcase, and watch unique video masterpieces.
          </div>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Create:</span> With our intuitive tools, transform your videos into one-of-a-kind NFTs. Whether it’s a captivating animation, a breathtaking short film, or an engaging motion graphic, your content is minted with a unique digital signature, ensuring authenticity and ownership.
          </div>
          <div className="text-xl font-thin">
          <span className='text-sky-400 font-bold'>Watch:</span> Explore a diverse gallery of Video NFTs created by talented artists from around the globe. Experience art in motion like never before, with each piece telling its own story and bringing a new perspective to the digital canvas.
          </div>
          <div className="text-xl font-thin">
          <span className='text-sky-400 font-bold'>Connect:</span> Join a community of visionary creators and enthusiastic collectors. Participate in discussions, collaborate on projects, and be at the forefront of the Video NFT movement.
          </div>
          <div className="text-xl font-thin">
          <span className='text-sky-400 font-bold'>MelodyTon</span> is more than a platform; it’s a revolution in the digital art space. Unleash your creativity, discover extraordinary art, and be part of the future of video expression today.
          </div>
        </Slider>
      </div>
      <div>
        <img src={Ar} alt="AR Illustration" className="h-[490px]" />
      </div>
    </div>
  );
}

export default Homepage;

  
  
  // import { TonConnectButton } from '@tonconnect/ui-react'
  // import { Link } from 'react-router-dom'
  {/* <div className='text-white flex justify-around items-center text-center pt-32'>
        
        <div className='mb-16 max-sm:text-center  '>
            <h1 className='font-semibold text-6xl'>View and Create<br></br><span className='font-thin text-sky-400'> Video NFTs </span></h1>
            <p className='pt-8 text-xl font-thin'> Non-fungible tokens (NFTs) are assets <br></br> that have been tokenized via a blockchain.</p>
            <br></br>
            <h2>Connect your wallet to continue</h2>
            <br></br>
            {/* <div className='flex justify-center'>
              <TonConnectButton/>
            </div> */}

{/* <Link to="/all-nft">
            <button type="button" className="text-white mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All NFT</button>
            </Link> */}
//     </div>
//     {/* <div className=''>
//        <img src={Ar} alt="" className='h-[490px]' />
//     </div> */}
// </div> */}
        {/* <Link to="/home">
          <button
            type="button"
            className="text-white mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore All
          </button>
        </Link> */}
        {/* <div>
          <TonConnectButton />
        </div> */}