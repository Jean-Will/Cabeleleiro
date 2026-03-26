import React from 'react'

export default function MapSection() {
  return (
    <section id="location" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Localização
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-8">
                Venha nos fazer uma visita.
            </p>
            <div className="h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                {/* Frame */}
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.391761397138!2d-8.758472323278223!3d41.365572471302706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2447eb04f2ee7b%3A0x25720a5418e0b15c!2sStudio%20Minucelli%20Cabeleireiro%20e%20Barbearia!5e0!3m2!1spt-PT!2spt!4v1774535231628!5m2!1spt-PT!2spt" 
                className="w-full h-full"
                style= {{   border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </section>
  )
}
