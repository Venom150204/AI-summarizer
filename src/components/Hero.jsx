import React from 'react'
// import {logo} from '../assets';
// import {daily_news} from '../assets';
const Hero = () => {
  return (
<header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between items-center flex-col w-full mb-10 pt-3 ' >
<img src="https://chambermaster.blob.core.windows.net/images/customers/284/members/1247/logos/MEMBER_PAGE_HEADER/GCDN_logo_blk.jpg" alt="" className='w-25 h-20 mt-2  object-contain' style={{mixBlendMode:"darken"}}/>
</nav>
<h1 className='head_text' >
        Summarize News Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Sumz, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
</header>


  );
};

export default Hero