'use client'
import { motion } from 'framer-motion'

const Maps = () => {
    return (
        <div className=''>
            <div className='max-con'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-emerald-600 text-white uppercase font-extrabold w-max px-5 py-1 text-3xl my-3 max-md:text-2xl max-sm:text-xl mx-auto my-10'>
                    Lokasi Strategis
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='grid grid-cols-3 gap-5 my-10 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='border border-zinc-200 p-3 rounded-md flex items-center gap-3'>
                        <div className='text-6xl'>🏪</div>
                        <div className=''>
                            <div className='text-2xl font-bold text-emerald-700'>
                                10 Menit
                            </div>
                            <div className=''>Menuju pasar tanjungsari</div>
                        </div>
                    </div>
                    <div className='border border-zinc-200 p-3 rounded-md flex items-center gap-3'>
                        <div className='text-6xl'>🏫</div>
                        <div className=''>
                            <div className='text-2xl font-bold text-emerald-700'>
                                5 Menit
                            </div>
                            <div className=''>Menuju pusat Pendidikan</div>
                            <div className='text-xs text-zinc-500'>
                                SMP 1 tanjungsari, SMA 1 tanjungsari dan SD
                                negeri tanjungsari
                            </div>
                        </div>
                    </div>
                    <div className='border border-zinc-200 p-3 rounded-md flex items-center gap-3'>
                        <div className='text-6xl'>🏢</div>
                        <div className=''>
                            <div className='text-2xl font-bold text-emerald-700'>
                                10 Menit
                            </div>
                            <div className=''>Menuju Universitas</div>
                            <div className='text-xs text-zinc-500'>
                                UNPAD, IKOPIN dan ITB
                            </div>
                        </div>
                    </div>
                    <div className='border border-zinc-200 p-3 rounded-md flex items-center gap-3'>
                        <div className='text-6xl'>🛣️</div>
                        <div className=''>
                            <div className='text-2xl font-bold text-emerald-700'>
                                5 Menit
                            </div>
                            <div className=''>Menuju pintul tol Pamulihan</div>
                            <div className='text-xs text-zinc-500'>
                                Cisundawu
                            </div>
                        </div>
                    </div>
                    <div className='border border-zinc-200 p-3 rounded-md flex items-center gap-3'>
                        <div className='text-6xl'>🛣️</div>
                        <div className=''>
                            <div className='text-2xl font-bold text-emerald-700'>
                                10 Menit
                            </div>
                            <div className=''>Menuju pintul tol Cileunyi</div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.4872849237331!2d107.8074619!3d-6.8936451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68db608b47daed%3A0xd7288aa10aaa2143!2sPERUMAHAN%20TANJUNG%20KADEDEUH%20residence!5e0!3m2!1sid!2sid!4v1699678936643!5m2!1sid!2sid'
                width='600'
                height='450'
                className='w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] rounded-md shadow-sm'
                loading='lazy'></iframe>
        </div>
    )
}

export default Maps
