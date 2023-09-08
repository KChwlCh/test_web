import React from 'react'
import Image from 'next/image'

function Add() {
  return (
    <div className='realti'>
      <div class="fixed bg-cover bg-gray-300 left-0 h-3/5 w-1/6 border text-3xl  ">
        <Image className='absolute top-0 right-0 cursor-pointer' src="xmark.svg" alt='x' width={16} height={30}></Image>
        Add01
      </div>

      <div class="fixed bg-cover bg-gray-300 right-0  h-3/5 w-1/6 border text-3xl">
        <Image className='absolute top-0 right-0 cursor-pointer' src="xmark.svg" alt='x' width={16} height={30}></Image>Add02
      </div>

      
        <div class=" fixed  bg-cover bg-gray-300 inset-x-1/4 inset-y-2/3 bottom-0  w-2/4 h-1/6 border text-3xl ">
          <Image className='absolute top-0 right-0 cursor-pointer' src="xmark.svg" alt='x' width={16} height={30}></Image>
          Add03

        </div>

        <div class="fixed  bg-cover bg-gray-300 inset-x-1/4 bottom-0 w-2/4 h-1/6  border text-3xl">
          <Image className='absolute top-0 right-0 cursor-pointer' src="xmark.svg" alt='x' width={16} height={30}></Image>
          Add04

        </div>
    </div>
  )
}

export default Add