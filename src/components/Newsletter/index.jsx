import { Mail } from 'lucide-react'
import Fade from '../Fade'

export default function Newsletter() {
  return (
    <Fade>
      <section className="py-12 px-6 bg-black flex flex-wrap w-full items-center justify-around gap-8 rounded-2xl">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl uppercase font-bold text-white">
            Fique atualizado sobre nossas últimas ofertas
          </h2>
        </div>
        <div className="flex flex-col gap-4 items-center w-full max-w-md">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" name="input-email" id="input-email" placeholder="Digite seu e-mail" className="bg-white rounded-full pl-12 pr-4 py-2 w-full text-black outline-none placeholder:text-gray-500" />
          </div>
          <button className="bg-white py-2 px-8 w-full rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
            Inscreva-se
          </button>
        </div>
      </section>
    </Fade>
  )
}
