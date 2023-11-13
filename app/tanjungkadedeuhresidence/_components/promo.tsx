'use client'
import Image from 'next/image'
import React from 'react'
import * as pixel from '@/lib/fbpixel'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Promo = () => {
    const handleCta = () => {
        pixel.btnPromo()

        const text = `Karya Cipta Property dari Google Ads, ingin mengetahui lebih lanjut tentang Tanjung Kadeudeuh Residence`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6281234422245&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }
    return (
        <div className='bg-emerald-600 py-10'>
            <div className='max-con grid grid-cols-2 max-md:grid-cols-1 items-center'>
                <div className='max-md:mb-10'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <div className='bg-white px-3 py-1 w-max -skew-x-6 font-bold mb-3 max-md:mx-auto'>
                            PROMO 9 UNIT PERTAMA
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className='bg-yellow-500 text-white px-3 py-1 w-max -skew-x-6 font-extrabold mb-3 text-6xl max-xl:text-5xl max-lg:text-4xl max-md:mx-auto max-sm:text-3xl'>
                            CUKUP 2,5 JT ALL IN
                        </div>
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <div className='bg-yellow-500 text-white px-3 py-1 w-max -skew-x-6 font-extrabold mb-3 text-6xl max-xl:text-5xl max-lg:text-4xl max-md:mx-auto max-sm:text-3xl'>
                            SAMPAI TERIMA KUNCI
                        </div>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='flex gap-3 items-center max-lg:flex-col max-lg:gap-0 max-lg:items-start max-md:items-center'>
                        <div className='bg-red-600 text-white px-3 py-1 w-max -skew-x-6 font-bold mb-3'>
                            36/60 Type
                        </div>
                        <div className='bg-red-600 text-white px-3 py-1 w-max -skew-x-6 font-bold mb-3'>
                            CICILAN 1,5 JT / BULAN FIX RATE 1 TAHUN
                        </div>
                        <div className='bg-red-600 text-white px-3 py-1 w-max -skew-x-6 font-bold mb-3'>
                            GRATIS BIAYA KPR
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className='mt-5'
                        onClick={handleCta}>
                        <div className='bg-yellow-500 hover:bg-yellow-400 text-white cursor-pointer w-max px-5 py-2 rounded-md text-lg max-md:mx-auto flex items-center gap-2'>
                            <FaWhatsapp />
                            Kontak Kami
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative flex justify-center'>
                    <Image
                        src='/images/tkr/denah.png'
                        width={400}
                        height={600}
                        alt=''
                        className='rounded-md shadow-md'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Promo
