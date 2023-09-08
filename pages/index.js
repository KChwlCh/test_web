import Nav from '@/components/Nav'
import Add from '@/components/Add'
import Image from 'next/image'
import Filterbar from '@/components/Filterbar'

export default function Home() {
  return (
    <>
      <div >
        <Nav />
        <Add></Add>
        <div className='m-5 p-5 grid justify-center'>

          <div className='bg-contain bg-center bg-gray-300 bg border-4'><Image class="grid rounded-md object-contain cursor-pointer"  width={800} height={480} alt="search" /></div>
          <div className='text-5xl text-center'>หมวดหมู่</div>
          <div className='grid grid-cols-4 m-2'>
            <div className='row-span-2 border text-2xl text-center'>หนังล่าสุด</div>
            <div className=' border text-2xl text-center'>แอคชั่น</div>
            <div className=' border text-2xl text-center'>การ์ตูน</div>
            <div className=' border text-2xl text-center'>หนังฝรั่ง</div>
            <div className=' border text-2xl text-center'>ซีรี่ส์</div>
            <div className=' border text-2xl text-center'>อนิเมะ</div>
            <div className=' border text-2xl text-center'>หนังไทย</div>
          </div>
          <div className='text-5xl text-center'>ค่ายหนัง</div>
          <div className='text-5xl text-center w-full h-96 border-4'>slide</div>
          <Filterbar></Filterbar>
          <div className='grid grid-cols-4 m-2'>
            <div>Poster1</div>
            <div>Poster2</div>
            <div>Poster3</div>
            <div>Poster4</div>
          </div>
        </div>
        
      </div>
    </>
  )
}