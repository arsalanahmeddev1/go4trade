import React from 'react'
import { useRef } from 'react';
import glow_image from '../assets/images/glow-image.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(useGSAP, CustomEase);


const HighlightBox = () => {
    const container = useRef();

    const pulse = () => {
        useGSAP(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: CustomEase.create("custom", "M0,0 C0.6,0.6,0,1,1,1"),
                    // ease: CustomEase.create("custom", "M0,0 C0.064,0 0.264,0.136 0.37,0.353 0.44,0.498 0.474,0.719 0.514,0.811 0.604,1.021 0.872,1 1,1 "),
                    // ease: CustomEase.create("custom", "M0,0 C0.07,0 0.223,0.181 0.349,0.37 0.417,0.472 0.473,0.692 0.508,0.772 0.598,0.983 0.872,1 1,1 "),
                    // ease: CustomEase.create("custom", "M0,0 C0.272,0 0.321,0.536 0.321,0.536 0.321,0.536 0.323,0.77 0.441,0.88 0.588,1 0.859,1 1,1 "),
                },
                repeat: -1,
            });
            tl.to('.glow-image span:nth-child(4)', {
                width: '280%',
                height: '280%',
                opacity: 0,
                duration: 3.5,
            }, 0);
            tl.to('.glow-image span:nth-child(3)', {
                width: '210%',
                height: '210%',
                opacity: 0,
                duration: 3.5,
            }, 0);
            tl.to('.glow-image span:nth-child(2)', {
                width: '150%',
                height: '150%',
                opacity: 0,
                duration: 3.5,
            }, 0);


        }, { scope: container });
    }

    pulse();




    return (
        <div ref={container} className='grid max-w-[984px] h-[793px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 highlighs-box'>
            <div className="text flex justify-center items-center item-1">
                <div className='max-w-[193px] text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize'>Risk-Free Trading</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Trade with simulated capital and keep real profits.</p>
                </div>
            </div>
            <div className="text flex justify-center items-center item-2">
                <div className='max-w-[193px] text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize'>Risk-Free Trading</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Trade with simulated capital and keep real profits.</p>
                </div>
            </div>
            <div className="text flex justify-center items-center item-3">
                <div className='max-w-[193px] text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize'>Risk-Free Trading</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Trade with simulated capital and keep real profits.</p>
                </div>
            </div>
            <div className="text flex justify-center items-center item-4">
                <div className='max-w-[193px] text-center'>
                    <h6 className='text-[22px] text-[#F8F6FF] font-medium capitalize'>Risk-Free Trading</h6>
                    <p className='text-[18px] font-light text-[#CCCCCC]'>Trade with simulated capital and keep real profits.</p>
                </div>
            </div>

            <div className="glow-image absolute top-1/2 left-1/2 -translate-1/2">
                <img src={glow_image} alt="image" />
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default HighlightBox