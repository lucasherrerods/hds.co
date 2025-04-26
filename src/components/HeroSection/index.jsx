import Banner from '../../assets/heroimage.png'
import Fade from '../Fade'

export default function HeroSection() {
  return (
    <Fade>
      <main className="relative w-full h-[90vh] flex items-center overflow-hidden">
        <img src={Banner} alt="Iphone background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative w-full md:w-1/2 z-10 flex flex-col justify-center gap-10 py-12 px-8 md:pl-28">
          <h1 className="text-5xl uppercase font-bold">
            Encontre roupas que combinem com seu estilo
          </h1>
          <p className="text-base font-light text-[#0007]">
            Navegue pela nossa diversificada gama de peças meticulosamente elaboradas, projetadas para realçar a sua individualidade e atender ao seu senso de estilo.
          </p>
          <button className="px-6 py-4 border text-white bg-black rounded-lg w-48 cursor-pointer transition duration-600 hover:scale-105">
            Compre agora
          </button>
          <ul className='flex items-center justify-around gap-6'>
            <li>
              <h3 className='text-3xl font-bold'>200+</h3>
              <p className='text-sm font-light text-[#0007]'>Marcas internacionais</p>
            </li>
            <li>
              <h3 className='text-3xl font-bold'>2.000+</h3>
              <p className='text-sm font-light text-[#0007]'>Produtos de Alta Qualidade</p>
            </li>
            <li>
              <h3 className='text-3xl font-bold'>30.000+</h3>
              <p className='text-sm font-light text-[#0007]'>Clientes satisfeitos</p>
            </li>
          </ul>
        </div>
      </main>
    </Fade>
  )
}