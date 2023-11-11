'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://karyaciptaproperty.com/'
  }, [])
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="animate-bounce">Redirecting ....</div>
    </div>
  )
}
