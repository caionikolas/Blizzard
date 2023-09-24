import Image from "next/image";
import bgFundo1 from "./../assets/imagens/bg-fundo1.png" 
import bgFundo2 from "./../assets/imagens/bg-fundo2.png" 

export default function Interface(){
    return (
        <div className="bg-gray-950 h-96">
            <Image
                src={bgFundo1}
                alt='imagem da inferface 1'
            />
            <Image
                src={bgFundo2}
                alt='imagem da inferface 2'
                className="relative bottom-[8.82rem] left-[5.28rem] z-10"
            />
        </div>
    )
}