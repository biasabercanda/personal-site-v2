"use client";

import { BlogPosts } from 'app/components/posts'
import { Navbar } from './components/nav'
import {useState,useEffect} from 'react';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function Page() {
  const [music, setMusic] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [svgLoaded, setSvgLoaded] = useState(false);

  function playButton(){
    setMusic(prevMusic => !prevMusic)
    console.log(music)
  }

  useEffect(() => {
    // Function to load the SVG
    const loadSVG = () => {
      const img = new Image();
      img.onload = () => {
        setSvgLoaded(true); // Set state when SVG is loaded
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      };
      img.src = '/holssi.svg'; // Path to your SVG file in the /public directory
    };

    loadSVG();
  }, []);

  return (
    <section className='h-screen'>
      <section id='Landing' className='min-h-full w-full flex flex-col gap-y-2 items-center justify-center'>
        {isLoading? <div className='max-w-[458px]'><DotLottieReact
        src="/loading.lottie"
        autoplay
        autoResizeCanvas={true}/>
      </div>: <div className='w-fit flex flex-col gap-y-2 items-center justify-center'>
          <div className='flex justify-between w-full'>
            <div className='flex w-full gap-x-1'>
              <img src="/mdi_spotify.svg" alt="" />
              <h1 className='text-[#7a7a7a]'>IU - Holssi</h1>
            </div>
            {music?<img className="cursor-pointer" onClick={playButton} src="/mdi_play.svg" alt="" />:<img className="cursor-pointer" onClick={playButton} src="/mdi_pause.svg" alt="" />}
            
          </div>
          <img rel='preload' src="/holssi.svg" alt="holssi" />
          <h1 className='text-[#7a7a7a]'>Scroll to view my work</h1>
        </div>    }
        
      </section>

      <section id='portfolio' className='h-dvh flex flex-col'>
        <Navbar/>
        <div className='pt-2 pb-8 grow h-max flex flex-col gap-y-2'>
          <div className='grow bg-[#F6F6F6]'></div>
          <div className='grow flex gap-x-2'>
            <div className='grow  bg-[#F6F6F6]'></div>
            <div className='grow flex flex-col gap-y-2'>
              <div className='grow bg-[#F6F6F6]'></div>
              <div className='grow bg-[#F6F6F6]'></div>
            </div>
          </div>
        </div>
      </section>
      
    </section>
  )
}
