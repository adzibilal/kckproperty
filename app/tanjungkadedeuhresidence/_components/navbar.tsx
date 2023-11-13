'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import * as pixel from '@/lib/fbpixel'

const Navbar = () => {
    const handleCta = () => {
        pixel.btnWhatsApp()

        const text = `Halo, saya tau Karya Cipta Property dari Google Ads, ingin mengetahui lebih lanjut tentang Tanjung Kadeudeuh Residence`

        // Membuat URL WhatsApp dengan parameter yang dinamis
        const waURL = `https://api.whatsapp.com/send?phone=6281234422245&text=${encodeURIComponent(
            text
        )}`

        // Membuka jendela baru dengan URL WhatsApp
        window.open(waURL, '_blank')
    }
    return (
        <div className='bg-white sticky top-0 z-10 p-3 shadow-sm'>
            <div className='max-con flex justify-between items-center'>
                <Image
                    src='/images/tkr/logo-tkr.png'
                    width={100}
                    height={100}
                    alt='Tanjung Kadedeuh Residence by KCKPROPERTY'
                />

                <div
                    onClick={handleCta}
                    className='bg-green-600 hover:bg-green-500 text-white cursor-pointer w-max px-5 py-2 rounded-md text-lg flex items-center gap-2'>
                    <FaWhatsapp />
                    Kontak Kami
                </div>
            </div>
        </div>
    )
}

export default Navbar
