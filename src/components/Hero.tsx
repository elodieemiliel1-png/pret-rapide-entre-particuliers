import { ArrowRight, Shield, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Prêt entre particuliers de confiance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sylvie Landry
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Votre Solution Financière
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Des prêts entre particuliers avec des conditions accessibles et transparentes.
            Concrétisez vos projets en toute sérénité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Demander un prêt
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#process"
              className="px-8 py-4 bg-white/40 backdrop-blur-md border border-white/60 text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Comment ça marche
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Shield, title: 'Sécurisé', desc: 'Transactions 100% sécurisées' },
            { icon: Sparkles, title: 'Rapide', desc: 'Réponse sous 24h' },
            { icon: ArrowRight, title: 'Simple', desc: 'Processus simplifié' }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
