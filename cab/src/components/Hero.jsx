import React from 'react'

export default function Hero() {
  return (
      <section
        id="home"
        className="min-h-[600] flex items-center bg-gradient-to-r from-gray-800 to-white-400 text-white">

        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Salão de Cabeleleiro</h1>
          <p className="text-lg">Oferecemos os melhores serviços de beleza e cabelo.</p>
          <a href="https://wa.me/351? text=Olá,%20gostaria%20agendar%20um%20horario."
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-gray-600 font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-50">Agendar Horário no WhatssApp
          </a>
        </div>
      </section>
  )
}
