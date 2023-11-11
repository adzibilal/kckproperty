'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='h-screen grid grid-cols-[2fr_1fr] items-center px-3 gap-10 max-md:grid-cols-1 max-md:pt-[200px]'>
            <div className='max-md:text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-emerald-700 uppercase text-white text-2xl px-3 py-1 w-max rounded-md max-md:mx-auto max-md:text-xl'>
                    Tanjung Kadedeuh Residence
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='text-6xl mt-5 font-extrabold text-emerald-950 max-md:text-4xl'>
                    Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='mt-5 text-xl text-zinc-700 max-md:text-lg'>
                    Ingin memiliki hunian komersil yang strategis di Cimahi?
                    Tanjung Kadedeuh Residence jawabannya! Hanya 5 menit menuju
                    pintu tol Pamulihan Tanjungsari, menjadikannya akses yang
                    mudah dan cepat ke berbagai tempat.
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className=''>
                <Image
                    src='/images/tkr/hero-img.jpeg'
                    width={500}
                    height={500}
                    className='aspect-[4/5] rounded-md shadow-sm bg-center object-cover max-md:mx-auto'
                    alt='Tanjung Kadedeuh Residence by KCKPROPERTY'
                />
            </motion.div>
        </div>
    )
}

export default Hero
