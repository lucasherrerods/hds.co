import Banner from '../../assets/heroimage.png'
import Fade from '../Fade'

export default function HeroSection() {
  return (
    <Fade>
      <main className="relative w-full h-[90vh] flex items-center overflow-hidden">
        <img src={Banner} alt="Iphone background" className="absolute inset-0 w-full h-full object-cover object-[70%] md:object-center" />

        <div className="relative w-full md:w-1/2 z-10 flex flex-col justify-center gap-6 py-12 px-6 md:pl-28 bg-black/50 md:bg-transparent text-white md:text-black">
          <h1 className="text-2xl md:text-5xl uppercase font-bold leading-tight">
            Encontre roupas que combinem com seu estilo
          </h1>

          <p className="text-sm md:text-base font-light text-white/80 md:text-black/70 max-w-48 sm:max-w-none">
            Navegue pela nossa diversificada gama de peças meticulosamente elaboradas, projetadas para realçar a sua individualidade e atender ao seu senso de estilo.
          </p>

          <button className="px-6 py-4 text-white bg-black rounded-lg w-48 cursor-pointer transition duration-600 hover:scale-105">
            Compre agora
          </button>

          <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-6 md:pt-4">
            <li className="text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">200+</h3>
              <p className="text-sm font-light text-white/80 md:text-black/70">Marcas internacionais</p>
            </li>
            <li className="text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">2.000+</h3>
              <p className="text-sm font-light text-white/80 md:text-black/70">Produtos de Alta Qualidade</p>
            </li>
            <li className="text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">30.000+</h3>
              <p className="text-sm font-light text-white/80 md:text-black/70">Clientes satisfeitos</p>
            </li>
          </ul>
        </div>
      </main>
    </Fade>
  )
}
