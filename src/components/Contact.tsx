import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Nous sommes là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Sylvie Landry</h3>
              <p className="text-lg mb-6 opacity-90">
                Experte en prêts entre particuliers, je m'engage à vous offrir un service personnalisé et des solutions financières adaptées à vos besoins.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Email</div>
                    <a
                      href="mailto:landrysylvie496@gmail.com"
                      className="font-semibold hover:underline"
                    >
                      landrysylvie496@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Disponibilité</h4>
                <p className="text-gray-600">Lun - Sam<br />9h - 18h</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Service</h4>
                <p className="text-gray-600">100% en ligne<br />Europe entière</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Montant souhaité
                </label>
                <input
                  type="text"
                  id="amount"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Ex: 10 000 €"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet et vos besoins..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Envoyer la demande
                <Send className="w-5 h-5" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Vos données sont sécurisées et ne seront jamais partagées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
