import { Linkedin, Instagram, Phone, Github, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Footer({ theme }) {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    setMode(theme)
  }, [])

  return (
    <footer className={`mt-20 pt-12 pb-6 ${mode ? 'bg-black text-white' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-extrabold mb-4 uppercase">
              Hds.co
            </h3>
            <p className='font-light'>
              Produtos que combinam com o seu estilo e que você tem orgulho de usar.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li className="font-light hover:font-bold transition cursor-pointer">
                <Link to={'/'}>
                  Home
                </Link>
              </li>
              <li className="font-light hover:font-bold transition cursor-pointer">
                <Link to={'/offers'}>
                  Ofertas
                </Link>
              </li>
              <li className="font-light hover:font-bold transition cursor-pointer">
                <Link to={'/about'}>
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 font-bold" />
                <span className="font-light">(11) 4002-8922</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 font-bold" />
                <span className="font-light">lucasherrerosilva.lh@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 font-bold" />
                <span className="font-light">Rua Pirituba, 123 - Centro</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Redes Sociais
            </h4>
            <ul className="flex gap-4">
              <li className={`border p-2 rounded-full transition cursor-pointer ${mode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                <Link to={'https://www.linkedin.com/in/lucasherrero/'} target='blank'>
                  <Linkedin className="w-5 h-5" />
                </Link>
              </li>
              <li className={`border p-2 rounded-full transition cursor-pointer ${mode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                <Link>
                  <Instagram className="w-5 h-5" />
                </Link>
              </li>
              <li className={`border p-2 rounded-full transition cursor-pointer ${mode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                <Link to={'https://github.com/lucasherrerods'} target='blank'>
                  <Github className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center font-medium">
          <p>© {new Date().getFullYear()} Lucas Herrero</p>
        </div>
      </div>
    </footer>
  )
}