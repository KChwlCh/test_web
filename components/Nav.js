import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function Nav() {
    return (
        <nav>
        <div className='grid grid-cols-2 gap-4 justify-items-center px-10 py-2 border'>
            <div className='grid grid-cols-7 gap-4'>
                <div className='cursor-pointer'>LOGO</div>
                <div  className='col-span-6'><Image class="grid rounded-md object-contain" src="/search.svg" width={16} height={30} alt="search" /> </div>
                <div className='cursor-pointer'>หนังล่าสุด</div>
                <div className='cursor-pointer'>แอคชั่น</div>
                <div className='cursor-pointer'>ซีรี่ส์</div>
                <div className='cursor-pointer'>การ์ตูน</div>
                <div className='cursor-pointer'>อนิเมะ</div>
                <div className='cursor-pointer'>หนังไทย</div>
                <div className='cursor-pointer'>หนังฝรั่ง</div>
            </div>
            <div>
            <button href="/#" className='border rounded-lg bg-gray-300 mx-2'>Register</button>
            <button href="/#" className='border rounded-lg border-gray-300'>Sign In</button>
            </div>
            
        </div>    
        </nav>

    )
}

export default Nav