import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Fade from '../../components/Fade'

export default function About() {
  return (
    <Fade>
      <Header />
      <div className="py-12 px-8 md:pl-28">
        <h1 className="text-2xl font-bold mb-4 capitalize">Sobre</h1>
        <p className="text-lg leading-relaxed mb-4">
          <span className='font-bold uppercase'>Hds.co</span> surgiu como um projeto fictício de e-commerce criado com o propósito de praticar habilidades em front-end e explorar conceitos como navegação entre páginas, manipulação de estado e consumo de APIs externas.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Os produtos exibidos são fornecidos pela API pública <a href="https://dummyjson.com" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">DummyJSON</a>.
        </p>
        <p className="text-lg leading-relaxed">
          Caso tenha alguma sugestão ou queira acompanhar outros projetos, você pode conferir meu <a href="https://github.com/lucasherrerods" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
      <Footer theme="dark" />
    </Fade>
  )
}