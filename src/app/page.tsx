'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import HeaderLp from '@/components/header-lp'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BicepsFlexed, FishIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FooterLp from '@/components/footer-lp'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLp />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Aprenda. Pesque. Multiplique.
            </h1>
            <p className="underline decoration-lime-200 text-primary-foreground md:text-xl/relaxed">
              1 Pedro 4:10-11
            </p>
            <Link href="/links/about">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-stone-900 hover:bg-stone-700 px-8 text-sm font-medium text-lime-200 shadow">
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:px-6">
            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Aprenda a pescar
                </h1>
                <FishIcon className="h-7 w-7" />
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed">
                ‘Aprender a pescar’ vai além do conhecimento teórico, é sobre
                adquirir habilidades práticas que nos permitem servir melhor,
                liderar com sabedoria e multiplicar discípulos de forma eficaz.
                Ao investir em seu crescimento, você se torna um agente
                transformador, preparado para impactar o Reino de Deus de
                maneiras significativas e duradouras.
              </p>
              <Button className="w-[200px] h-10 items-center justify-center rounded-md bg-stone-900 hover:bg-stone-700 px-8 text-sm font-medium text-lime-200 shadow">
                <Link href="/links/about">Saiba Mais</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/placeholder.svg"
                  alt="lideranca"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Líder em tempos sombrios
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Como ser ovelha no meio de lobos
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/placeholder.svg"
                  alt="oracao"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Oração: Do raso as profundezas
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Está na hora de deixar o razo e ir mais fundo na presença de
                    Deus
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/placeholder.svg"
                  alt="discipulado"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    A matemática do Discípulado
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Ide e fazei discípulos e multiplicai-vos
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/placeholder.svg"
                  alt="pregação"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Pregue além do muro
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Sair da zona de conforto é difícil mas ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-current">
          <div className="container mx-auto grid gap-8 px-4 md:px-6">
            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl text-current text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Workshops
                </h2>
                <BicepsFlexed className="text-lime-200 h-7 w-7" />
              </div>
              <p className="text-white md:text-xl/relaxed">
                Capacite-se com Workshops online e presenciais para elevar sua
                vida em Cristo e transformar a do próximo!
              </p>
              <Link href="/links/workshops">
                <Button className="w-[200px] h-10 items-center justify-center rounded-md bg-lime-300 hover:bg-lime-200 px-8 text-sm font-medium text-stone-900 shadow">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/mesa-tecnica.jpg"
                  alt="Curso de React.js"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Mesa redonda
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Como anda a sua equipe técnica ?
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/design.jpg"
                  alt="Curso de Figma"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Design e Mídias
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Entenda os princípios da arte visual e da comunicação na
                    igreja.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/leaders.jpg"
                  alt="Curso de Marketing Digital"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Líderança: Visonaria ou Ultrapassada
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Será que a liderança em ministério está ultrapassada?
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <Image
                  src="/music.jpg"
                  alt="Curso de Empreendedorismo"
                  width="300"
                  height="200"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:bg-gradient-to-b">
                  <h3 className="text-lg font-medium line-clamp-2">
                    Louvor de ponta a ponta
                  </h3>
                  <p className="text-sm line-clamp-2">
                    Criando uma banda de louvor do zero, entenda os principais
                    desafios ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto grid gap-8 px-4 md:px-6">
            <div className="grid gap-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Seja um{' '}
                <span className="underline decoration-black">Pescador</span>
              </h2>
              <p className="max-w-[700px] text-black md:text-xl/relaxed">
                Conecte-se a Cristo, Compartilhe seu conhecimento, Capacite-se
                ...
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg overflow-hidden space-y-3">
                <video
                  className="w-full aspect-video"
                  src="https://www.youtube.com/watch?v=By9wCB9IZp0"
                  controls
                />
                <span className="text-md flex justify-center items-center">
                  Acesse agora
                  <ArrowRight className="ml-2 text-stone-900" />
                  <Button variant="link" className="text-md">
                    clique aqui!
                  </Button>
                </span>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage
                      src="https://github.com/Renan-Rosa.png"
                      alt="Instrutor"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Renan Rosa Schlemper</div>
                    <div className="text-muted-foreground">CEO e Instrutor</div>
                  </div>
                </div>
                <div className="bg-current rounded-lg p-4">
                  <h3 className="text-xl text-lime-50 font-bold mb-3">
                    Sobre o programa
                  </h3>
                  <p className="text-white">
                    Jesus nos deu uma missão e um objetivo, dar o primeiro passo{' '}
                    em direção ao seu amor e nos matermos contantes na fé. Porém
                    como posso eu seguir essa constancia sendo um pecador. De
                    acordo com a sua palavra devemos nos capacitar e sempre
                    buscar ao senhor, sendo pescadores de homens assim como
                    Jesus foi e sempre será,{' '}
                    <span className="underline decoration-lime-200">
                      tenha fé
                    </span>
                    .
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-xl font-bold">Comentários</h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="" alt="Usuário" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-muted-foreground">
                            Membro
                          </div>
                        </div>
                        <p>
                          Excelente curso, me ajudou muito a entender os
                          conceitos do React.js. O instrutor é muito claro e
                          didático.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage
                          src="/placeholder-user.jpg"
                          alt="Usuário"
                        />
                        <AvatarFallback>JA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">Jane Doe</div>
                          <div className="text-xs text-muted-foreground">
                            Líder de Juventude
                          </div>
                        </div>
                        <p>
                          Muito bom, aprendi muito com o The Fishers, além de
                          reatar um relacionamento morto com cristo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterLp />
    </div>
  )
}
