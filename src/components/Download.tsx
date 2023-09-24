import Image from 'next/image'
import BattleNetLogo from "./../assets/imagens/battlenet-logo.svg"
import group1 from "./../assets/imagens/group1.svg"
import group2 from "./../assets/imagens/group2.svg"
import group3 from "./../assets/imagens/group3.svg"
import IOS from "./../assets/imagens/ios.svg"
import AplicativoMovel from "./../assets/imagens/aplicativo-movel-icon.svg"


export default function Download(){
    return (
        <div className="pl-6 pt-16 pr-12 pb-12 bg-transparent">
            <Image
                src={BattleNetLogo}
                alt='Battle net Logo'
                className='mb-[1.88rem]'
            />
            <h2 className="text-white text-[1.75rem] not-italic font-bold leading-[110.2%] pb-[0.38rem]">Baixe agora o battle.net</h2>
            <div className="flex item-center py-6 gap-4">
                <Image
                    src={group1}
                    alt='Battle net Logo'
                />
                <p className="text-slate-300">Seus jogos em um só lugar</p>
            </div>
            <div className="flex item-center py-6 gap-4">
                <Image
                    src={group2}
                    alt='Battle net Logo'
                />
                <p className="text-slate-300" >Conecte-se aos seus amigos</p>
            </div>
            <div className="flex item-center py-6 gap-4">
                <Image
                    src={group3}
                    alt='Battle net Logo'
                />
                <p className="text-slate-300">Compre jogos e itens digitais</p>
            </div>
            <button className="flex items-center py-[0.875rem] px-8 bg-sky-500 gap-2 rounded-[0.25rem] mb-10 mt-[1.12rem]">
                <Image
                src={IOS}
                alt='Battle net Logo'
                />
                <p className="text-white">Baixar para o MacOS</p>
            </button>
            <div className="flex items-center gap-4 mb-[2.44rem]">
                <Image
                    src={AplicativoMovel}
                    alt='Battle net Logo'
                />
                <p className="text-slate-200 text-[0.875rem] not-italic font-semibold w-60" >Também disponível como <span className="underline cursor-pointer">aplicativo móvel</span></p>
            </div>
        </div>
    )
}