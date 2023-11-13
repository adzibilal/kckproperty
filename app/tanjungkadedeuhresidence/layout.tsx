import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Tanjung Kadedeuh Residence by KCKPROPERTY',
    description: 'Hunian Komersil Strategis, Cicilan Mulai 1,5 Juta/Bulan',
    icons: '/images/tkr/favicon.png',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://www.kckproperty.com/tanjungkadedeuhresidence',
        siteName: 'Tanjung Kadedeuh Residence by KCKPROPERTY',
        images: [
            {
                url: '/images/tkr/meta-img.png',
                width: 800,
                height: 600,
                alt: 'Tanjung Kadedeuh Residence by KCKPROPERTY'
            }
        ]
    }
}

const TKRLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className=''>{children}</div>
}

export default TKRLayout
