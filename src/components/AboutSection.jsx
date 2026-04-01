import React from 'react'
import minucelliImg from '../imgs/minucelli_.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-8 md:items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg text-slate-700 mb-4">
            O nosso salão é especializado em cortes modernos, coloração e tratamentos capilares, com foco em atendimento
            personalizado e resultados que valorizam a sua identidade.
          </p>
          <p className="text-lg text-slate-700">
            Trabalhamos com uma equipa experiente e produtos de qualidade profissional, num espaço confortável e
            acolhedor, para que cada visita seja uma experiência completa de cuidado e bem-estar.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="h-56 md:h-80 rounded-xl overflow-hidden">
            <img
              src={minucelliImg}
              alt="Imagem do salão"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}