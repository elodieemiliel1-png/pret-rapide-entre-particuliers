import { Check, Percent, Clock, Shield, Users, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Percent,
      title: 'Taux Compétitifs',
      description: 'Des taux d\'intérêt accessibles et transparents, adaptés à votre situation financière.'
    },
    {
      icon: Clock,
      title: 'Traitement Rapide',
      description: 'Une réponse rapide à votre demande de prêt, généralement sous 24 heures.'
    },
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Toutes nos transactions sont sécurisées et respectent la réglementation en vigueur.'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnel',
      description: 'Un suivi personnalisé tout au long de votre projet par Sylvie Landry.'
    },
    {
      icon: TrendingUp,
      title: 'Flexibilité',
      description: 'Des modalités de remboursement flexibles selon vos capacités financières.'
    },
    {
      icon: Check,
      title: 'Conditions Accessibles',
      description: 'Des critères d\'éligibilité simplifiés pour faciliter l\'accès au crédit.'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des avantages pensés pour vous accompagner dans la réalisation de vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Prêt à concrétiser votre projet ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous dès aujourd'hui pour une étude personnalisée de votre demande
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Faire une demande
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
