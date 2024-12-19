'use client'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'


export default function animation(){
    useLayoutEffect(() => {
         gsap.to("#bola",{
            x:0,
            opacity: 1
         }) 
    })

    useLayoutEffect(() => {
        gsap.to("#hometext",{
           x:0,
           opacity: 1
        }) 
   })

    return(
        <div id="bola" className='duration-300 -translate-x-40 rounded-full w-30 h-screen linear bg-red-600'>oi</div>
    )
}