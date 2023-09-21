/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Points from "./../assets/imagens/points.svg"
import BlizzardLogo from "./../assets/imagens/blizzard.svg"
import { games } from '@/api/games' 

export default function List(){
    return (
        <div className="px-6 bg-slate-950 pt-[3.37rem] pb-[4.34rem]">
            <div className="flex items-end justify-between pb-[3.56rem]">
                <h2 className="text-white text-[1.75rem] not-italic font-bold leading-[110.2%]">Jogos exclusivos</h2>
                <div className="text-sky-500 text-center text-sm not-italic font-semibold w-36 flex justify-between cursor-pointer hover:underline">
                    <Image
                        src={Points}
                        alt='point icon'
                    />
                    <p>
                        Ver todos jogos
                    </p> 
                </div>
            </div>
            <div className="flex flex-wrap gap-4">
                {games.map((game) => (
                    <Image
                        src={game.image}
                        alt={game.name}
                        className='w-40 h-[13.68rem] cursor-pointer hover:border-2 hover:border-zinc-200'
                    />
                ))}
                <div className='w-40 h-[13.68rem] bg-slate-800 flex items-center justify-center flex-col'>
                    <Image
                        src={BlizzardLogo}
                        alt="capa Diablo 2"
                        className='pb-[0.94rem]'
                    />
                    <p className='text-white text-center text-base not-italic font-semibold cursor-pointer hover:underline'>Ver todos jogos</p>
                </div>
            </div>
        </div>
    )
}