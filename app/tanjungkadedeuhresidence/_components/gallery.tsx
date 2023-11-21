'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
    return (
        <div className='bg-white py-10'>
            <div className='max-con'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-emerald-600 text-white uppercase font-extrabold w-max px-5 py-1 text-3xl max-md:text-2xl max-sm:text-xl mx-auto my-10'>
                    LINGKUNGAN & FASILITAS
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='aspect-video w-full mx-auto max-w-[1000px]'>
                    <Carousel slideInterval={5000} pauseOnHover>
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/gallery/1.jpg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/gallery/2.jpg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/gallery/3.jpg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/gallery/4.jpg'
                            alt='...'
                        />
                    </Carousel>
                </motion.div>
            </div>
        </div>
    )
}

export default Gallery
