'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Testimonial = () => {
    return (
        <div className='bg-zinc-100 py-10'>
            <div className='max-con'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-emerald-600 text-white uppercase font-extrabold w-max px-5 py-1 text-3xl max-md:text-2xl max-sm:text-xl mx-auto my-10'>
                    Testimoni Penghuni
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
                            src='/images/tkr/testi/testi1.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi2.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi3.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi4.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi5.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi6.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi7.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi8.jpeg'
                            alt='...'
                        />
                        <Image
                            width={500}
                            height={500}
                            src='/images/tkr/testi/testi9.jpeg'
                            alt='...'
                        />
                    </Carousel>
                </motion.div>
            </div>
        </div>
    )
}

export default Testimonial
