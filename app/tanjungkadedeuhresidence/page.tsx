import type { Metadata } from 'next'
import Hero from './_components/hero'
import Values from './_components/values'
import Maps from './_components/maps'

export const metadata: Metadata = {
    title: 'Tanjung Kade Deuh Residence by KCKPROPERTY',
    description: 'Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan'
}

const TKRPage = () => {
    return (
        <div className=''>
            <Hero />
            <Values />
            <Maps/>
        </div>
    )
}

export default TKRPage
