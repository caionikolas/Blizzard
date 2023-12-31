import Image from 'next/image'
import BlizzardLogo from "./../assets/imagens/blizzard.svg"
import Menu from "./../assets/imagens/menu.svg"

export default function Header() {
    return (
        <div className='bg-transparent p-6 flex items-center justify-between md:px-[2.81rem]'>
            <Image
                src={BlizzardLogo} 
                alt='Logo da Blizzard'
                className='cursor-pointer md:w-[5.42rem]'
            />
            <Image
                src={Menu} 
                alt='Icone de menu'
                className='cursor-pointer'
            />
        </div>
    )
}