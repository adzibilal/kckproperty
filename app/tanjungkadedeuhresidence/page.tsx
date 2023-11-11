import type { Metadata } from 'next'
import Hero from './_components/hero'
 
export const metadata: Metadata = {
  title: 'Tanjung Kade Deuh Residence by KCKPROPERTY',
  description: 'Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan',
}

const TKRPage = () => {
    return (
        <div className='max-con'>
            <Hero/>
        </div>
    )
}

export default TKRPage
