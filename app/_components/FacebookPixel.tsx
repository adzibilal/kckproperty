'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import * as pixel from '@/lib/fbpixel'

const FacebookPixel = () => {
    const [loaded, setLoaded] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (!loaded) return

        pixel.pageview()

        const fbkey = process.env.NEXT_PUBLIC_FB_PIXEL_ID

        console.error(fbkey, 'fbkey')
    }, [pathname, loaded])

    return (
        <div>
            <Script
                id='fb-pixel'
                src='/scripts/pixel.js'
                strategy='afterInteractive'
                onLoad={() => setLoaded(true)}
                data-pixel-id={pixel.FB_PIXEL_ID}
            />
        </div>
    )
}

export default FacebookPixel
