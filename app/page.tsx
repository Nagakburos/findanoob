import Image from "next/image";
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <header className="max-w-6xl max-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt='logo' />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">        
      <div>
        <h1  className=" capitalize text-4xl md:text-7xl font-bold">Assistente  <span className="text primary">de busca de </span>emprego</h1>
        <br/>
        <p className="leading-loose max-w-md mt4">Encontre talentos promissores e oportunidades. Conectando empresas inovadoras com profissionais em ascensão, nosso site de empregos oferece uma plataforma intuitiva e acessível para recrutamento e busca de emprego.</p>
        <Button asChild className="my-4">
          <Link href='/add-job'>
          vamos começar
          </Link>
        </Button>
      </div>
      <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
