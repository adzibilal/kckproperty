'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Values = () => {
    return (
        <div className='bg-zinc-50 min-h-[50vh] py-44'>
            <div className='max-con'>
                <div className='grid grid-cols-2 gap-10 items-center max-md:grid-cols-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='max-md:text-center'>
                        <div className='text-2xl max-md:text-xl'>Dengan harga terjangkau</div>
                        <div className='bg-emerald-600 text-white uppercase font-extrabold w-max px-5 py-1 text-3xl my-3 max-md:mx-auto max-md:text-2xl'>
                            mulai dari Rp 480 juta,
                        </div>
                        <div className='text-xl max-md:text-lg'>
                            Anda sudah bisa memiliki rumah impian di Tanjung
                            Kadedeuh Residence. Dapatkan juga promo cicilan 1,5
                            juta per bulan untuk 1 tahun pertama.
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='bg-white shadow-md p-3 rounded-lg'>
                        <Image
                            src='/images/tkr/illustrasi1.jpeg'
                            width={1000}
                            height={500}
                            alt=''
                            className='aspect-video rounded-md object-cover'
                        />
                    </motion.div>
                </div>
                <div className='grid grid-cols-2 gap-10 items-center mt-40 max-md:mt-20 max-md:flex max-md:flex-col-reverse'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='bg-white shadow-md p-3 rounded-lg'>
                        <Image
                            src='/images/tkr/illustrasi1.jpeg'
                            width={1000}
                            height={500}
                            alt=''
                            className='aspect-video rounded-md object-cover'
                        />
                    </motion.div>

                    <div className='max-md:w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='bg-emerald-600 text-white uppercase font-extrabold w-max px-5 py-1 text-3xl my-3 max-md:text-2xl max-sm:text-xl max-sm:mx-auto'>
                            Apa yang Anda dapatkan?
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 , delay: 0.2}}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ Sudah ramai penghuni
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 , delay: 0.4}}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ Keamanan 24 jam sudah berjalan
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 , delay: 0.6}}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ Masjid sudah aktif
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ Sudah terbentuk RT dan RW
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ Air bersih aktif 24 jam
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className='bg-white p-3 shadow-md rounded-md mb-3 text-xl max-md:text-lg'>
                            ✅ One Gate System
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values
