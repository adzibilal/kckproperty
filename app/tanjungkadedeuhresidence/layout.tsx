import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Tanjung Kadedeuh Residence by KCKPROPERTY',
    description: 'Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan, Ingin memiliki hunian komersil yang strategis? Tanjung Kadedeuh Residence jawabannya! Hanya 5 menit menuju pintu tol Pamulihan Tanjungsari, menjadikannya akses yang mudah dan cepat ke berbagai tempat.',
    icons: '/images/tkr/favicon.png',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://www.kckproperty.com/tanjungkadedeuhresidence',
        siteName: 'Tanjung Kadedeuh Residence by KCKPROPERTY',
        images: [
            {
                url: '/images/tkr/meta-img.png',
                width: 1200,
                height: 630,
                alt: 'Tanjung Kadedeuh Residence by KCKPROPERTY'
            }
        ]
    }
}

const TKRLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className=''>{children}</div>
}

export default TKRLayout
