'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import * as pixel from '@/lib/fbpixel'

const Hero = () => {
    const handleCta = () => {
        pixel.btnWhatsApp()

        const text = `Karya Cipta Property dari Google Ads, ingin mengetahui lebih lanjut tentang Tanjung Kadeudeuh Residence`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6281234422245&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }
    return (
        <div className='max-con h-screen grid grid-cols-[2fr_1fr] items-center px-3 gap-10 max-md:flex max-md:flex-col-reverse max-md:h-max max-md:my-20'>
            <div className='max-md:text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-emerald-700 uppercase text-white text-2xl px-3 py-1 w-max rounded-md max-md:mx-auto max-md:text-xl max-sm:text-lg'>
                    Tanjung Kadedeuh Residence
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-6xl mt-5 font-extrabold text-emerald-950 max-md:text-4xl max-sm:text-3xl'>
                    Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='mt-5 text-xl text-zinc-700 max-md:text-lg max-sm:text-md mb-5'>
                    Ingin memiliki hunian komersil yang strategis? Tanjung
                    Kadedeuh Residence jawabannya! Hanya 5 menit menuju pintu
                    tol Pamulihan Tanjungsari, menjadikannya akses yang mudah
                    dan cepat ke berbagai tempat.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={handleCta}
                    className='bg-green-600 hover:bg-green-500 text-white cursor-pointer w-max px-5 py-2 rounded-md text-lg max-md:mx-auto flex items-center gap-2'>
                    <FaWhatsapp />
                    Kontak Kami
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className=''>
                <Image
                    src='/images/tkr/hero-img.jpeg'
                    width={400}
                    height={400}
                    className='aspect-[4/5] max-md:aspect-video rounded-md shadow-sm bg-center object-cover max-md:mx-auto w-full'
                    alt='Tanjung Kadedeuh Residence by KCKPROPERTY'
                />
            </motion.div>
        </div>
    )
}

export default Hero
