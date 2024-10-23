import { FishSymbol } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeaderLp() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Defina o valor de scroll desejado para ativar a transparência
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-20 w-full shadow transition-colors duration-300 ${isScrolled ? 'bg-lime-100/80 backdrop-blur-md' : 'bg-lime-100'}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <FishSymbol className="h-6 w-6 text-primary" />
          The Fishers
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/links/about"
            className="hover:text-stone-600"
            prefetch={false}
          >
            Quem somos?
          </Link>
          <Link
            href="/links/workshops"
            className="hover:text-stone-600"
            prefetch={false}
          >
            Workshops
          </Link>
          <Link
            href="#footer"
            className="hover:text-stone-600"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {/* <ModeToggle /> */}
          <Button variant="link">Entrar</Button>
          <Button className="rounded-2xl text-white">Cadastrar</Button>
        </div>
      </div>
    </header>
  )
}
