'use client'

import FooterLp from '@/components/footer-lp'
import HeaderLp from '@/components/header-lp'
import Image from 'next/image'

export default function Workshops() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLp />
      <main>
        <section className="bg-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="underline decoration-lime-200 text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Workshops
                </h2>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O Espírito Santo nos edifica, guia e instrui. Desta forma
                  somos capacitados a cada desafio em fé. Quando buscamos o
                  Espírito Santo - meditando e orando - somos ensinados por Ele
                  e a Sua presença nos capacita a cada atitude nossa que reflete
                  Jesus.
                </p>
                <p className="max-w-[600px] text-white underline decoration-lime-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  João 14:26
                </p>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De uma olhada em nossa biblioteca de conteúdos!
                </p>
              </div>
              <Image
                src="/workshop.jpg"
                width="550"
                height="310"
                alt="Sobre Nós"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Workshops
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Assista aos nossos Workshops!
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="grid gap-4">
                  <Image
                    src="/podcast1.jpg"
                    alt="Podcast Thumbnail"
                    width={400}
                    height={700}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">The Tech Podcast</h3>
                    <p className="text-sm text-muted-foreground">45 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast2.jpg"
                    alt="Podcast Thumbnail"
                    width={400}
                    height={700}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Design Matters</h3>
                    <p className="text-sm text-muted-foreground">1 hr 15 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast1.jpg"
                    alt="Podcast Thumbnail"
                    width={400}
                    height={700}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Startup Stories</h3>
                    <p className="text-sm text-muted-foreground">30 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast2.jpg"
                    alt="Podcast Thumbnail"
                    width={400}
                    height={700}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">The Creative Spark</h3>
                    <p className="text-sm text-muted-foreground">1 hr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8 mt-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Fishers Podcast
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ouça de qualquer lugar
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="grid gap-4">
                  <Image
                    src="/podcast1.jpg"
                    alt="Video Thumbnail"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Intro to React</h3>
                    <p className="text-sm text-muted-foreground">15 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast2.jpg"
                    alt="Video Thumbnail"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Figma Design Workflow</h3>
                    <p className="text-sm text-muted-foreground">25 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast1.jpg"
                    alt="Video Thumbnail"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Building a SaaS App</h3>
                    <p className="text-sm text-muted-foreground">35 min</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Image
                    src="/podcast2.jpg"
                    alt="Video Thumbnail"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover aspect-video"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Mastering CSS Animations</h3>
                    <p className="text-sm text-muted-foreground">20 min</p>
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
