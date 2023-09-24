/* eslint-disable react/jsx-key */
import Image from 'next/image'
import { icons } from '@/api/icons'
import Diablo4Logo from './../assets/imagens/diablo4-logo.png'
import Diablo4Trailer from './../assets/imagens/diablo4-trailer.png'

export default function Start(){
    return (
        <div className='pt-[3.19rem] pr-[3.06rem] pb-[4.25rem] pl-[1.38rem] bg-transparent
                        md:pl-[4rem] md:pt-[4rem] md:pr-[1.94rem] md:pb-[4.44rem] md:relative'>
            <h1 className='text-white text-[2.5rem] not-italic font-bold leading-[110.2%] w-[17.68rem] pr-[1.3rem] pb-4
                           md:text-[3.9rem] md:w-[35.12rem]'>Retorne à escuridão com o game Diablo IV</h1>
            <h3 className='text-white text-lg not-italic font-normal tracking-[-0.00563rem] w-[17.68rem] pb-8
            md:w-[34rem] md:text-[1.1rem]
                        '>O retorno de Lilith traz uma era de escuridão e sofrimento</h3>
            <button className='flex py-[0.875rem] px-8 justify-center items-center gap-2 rounded-[0.25rem] bg-sky-500 text-white mb-12'>Jogue agora</button>
            <div className='flex items-center gap-4'>
                {icons.map((icon) => (
                    <Image
                        src={icon.image}
                        alt={icon.name}
                        width={48}
                        height={48}
                        className='cursor-pointer'
                    />
                ))}
            </div>
            <Image 
                src={Diablo4Logo}
                alt='Diablo 4 Logo'
                className='hidden md:block md:absolute md:right-[2rem] md:top-0'
            />
            <Image 
                src={Diablo4Trailer}
                alt='Diablo 4 Trailer'
                width={280}
                height={158}
                className='hidden md:block md:absolute md:right-[2.94rem] md:bottom-[3.37rem]'
            />
        </div>
    )
}