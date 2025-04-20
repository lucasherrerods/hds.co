import Banner from '../../assets/heroimage.png'

export default function HeroSection() {
  return (
    <main className="relative w-full">
      <img src={Banner} alt="Iphone background" className="absolute inset-0 w-full object-cover" />
      <div className="relative w-1/2 z-10 flex flex-col h-full justify-center gap-10 py-12 pl-28">
        <h1 className="text-6xl uppercase font-bold">
          Encontre roupas que combinem com seu estilo
        </h1>
        <p className="text-base font-light text-[#0007]">
          Navegue pela nossa diversificada gama de peças meticulosamente elaboradas, projetadas para realçar a sua individualidade e atender ao seu senso de estilo.
        </p>
        <button className="px-6 py-4 border text-white bg-black rounded-lg w-44 cursor-pointer">
          Compre agora
        </button>
        <ul className='flex items-center justify-around'>
          <li>
            <h3 className='text-4xl font-bold'>200+</h3>
            <p className='text-base font-light text-[#0007]'>Marcas internacionais</p>
          </li>
          <li>
            <h3 className='text-4xl font-bold'>2.000+</h3>
            <p className='text-base font-light text-[#0007]'>Produtos de Alta Qualidade</p>
          </li>
          <li>
            <h3 className='text-4xl font-bold'>30.000+</h3>
            <p className='text-base font-light text-[#0007]'>Clientes satisfeitos</p>
          </li>
        </ul>
      </div>
    </main>
  )
}