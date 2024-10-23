'use client'

import FooterLp from '@/components/footer-lp'
import HeaderLp from '@/components/header-lp'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLp />
      <main className="flex-1">
        <div className="flex flex-col">
          <section className="bg-foreground py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="underline decoration-lime-200 text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Sobre Nós
                  </h2>
                  <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos um grupo focado em um único objetivo, tornar você em
                    um pescador de homens
                  </p>
                  <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nossa missão é compatilhar e formar pessoas capacitadas para
                    discipular e transformar vidas, ajudando também com
                    conhecimentos variáveis como tecnologia, música, design,
                    liderança, som e muito mais.
                  </p>
                  <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Se você deseja colocar seus dons a prova, nós estamos aqui
                    para ajudar e capacitara sua vida.
                  </p>
                </div>
                <Image
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Sobre Nós"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Conheça Nossa Equipe
                </h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nosso time é composto por pessoas com uma carga de
                  conhecimento e apaixonados pelo que fazem. Juntos, trabalhamos
                  para impulsionar o seu relacionamento com Deus e suas
                  capacidades.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Foto do Usuário"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Renan Rosa Schlemper
                    </h3>
                    <p className="text-muted-foreground">CEO</p>
                    <p className="text-sm text-muted-foreground">
                      +5 anos em liderança jovem e adolescente, gestor de
                      projetos de software e desenvolvedor.
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Foto do Usuário"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground">CTO</p>
                    <p className="text-sm text-muted-foreground">
                      15+ anos de experiência em desenvolvimento de software.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Foto do Usuário"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Bob Smith</h3>
                    <p className="text-muted-foreground">Gerente de Produto</p>
                    <p className="text-sm text-muted-foreground">
                      8 anos de experiência em gestão de produtos digitais.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Foto do Usuário"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                    <p className="text-muted-foreground">Gerente de Projetos</p>
                    <p className="text-sm text-muted-foreground">
                      12 anos de experiência em gerenciamento de projetos de
                      tecnologia.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="bg-muted py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Entre em Contato
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Estamos super abertos para lhe ouvir e ajudar com o que
                    podemos, afinal todos nós temos o mesmo objetivo em busca de
                    sermos mais próximos de Deus
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Digite seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="exemplo@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="text-lime-300 w-full">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterLp />
    </div>
  )
}
