import { Heart, Shield, CheckCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-4">
              Sylvie Landry
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de financement entre particuliers.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Prêt personnel
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Prêt professionnel
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Rachat de crédits
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Garanties</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Transactions sécurisées
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Confidentialité assurée
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Service professionnel
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2024 Sylvie Landry - Prêt entre particuliers. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>pour vous accompagner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
