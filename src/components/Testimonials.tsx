import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marie D.',
      role: 'Entrepreneure',
      content: 'Grâce à Sylvie Landry, j\'ai pu lancer mon commerce. Le processus était simple et les conditions très accessibles. Je recommande vivement !',
      rating: 5
    },
    {
      name: 'Jean-Pierre M.',
      role: 'Particulier',
      content: 'Un service professionnel et humain. Sylvie a pris le temps de comprendre ma situation et m\'a proposé une solution adaptée. Merci infiniment !',
      rating: 5
    },
    {
      name: 'Sophie L.',
      role: 'Étudiante',
      content: 'J\'avais besoin d\'un prêt pour financer mes études. La réactivité et la transparence de Sylvie m\'ont vraiment aidée. Service impeccable.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-3xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Prêts Accordés</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-300" />
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Clients Satisfaits</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-300" />
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">
                24h
              </div>
              <div className="text-gray-600 font-medium">Temps de Réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
