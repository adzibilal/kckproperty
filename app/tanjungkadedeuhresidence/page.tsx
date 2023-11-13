import type { Metadata } from 'next'
import Hero from './_components/hero'
import Values from './_components/values'
import Maps from './_components/maps'
import Image from 'next/image'
import Promo from './_components/promo'

export const metadata: Metadata = {
    title: 'Tanjung Kade Deuh Residence by KCKPROPERTY',
    description: 'Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan'
}

const TKRPage = () => {
    return (
        <div className=''>
            <Hero />
            <Values />
            <Promo />
            <Maps />
            <div className='max-con !py-5'>
                <Image
                    src='/images/tkr/logo-tkr.png'
                    width={100}
                    height={100}
                    alt='Tanjung Kadedeuh Residence by KCKPROPERTY'
                />
            </div>
        </div>
    )
}

export default TKRPage
