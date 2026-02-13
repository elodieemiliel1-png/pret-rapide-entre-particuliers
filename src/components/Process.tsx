import { FileText, CheckCircle, CreditCard, Handshake } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Demande',
      description: 'Envoyez-nous votre demande de prêt avec les informations nécessaires par email.'
    },
    {
      icon: CheckCircle,
      title: 'Étude',
      description: 'Nous analysons votre dossier et vous répondons rapidement sous 24h maximum.'
    },
    {
      icon: Handshake,
      title: 'Accord',
      description: 'Signature du contrat de prêt avec les conditions convenues ensemble.'
    },
    {
      icon: CreditCard,
      title: 'Versement',
      description: 'Réception des fonds directement sur votre compte bancaire.'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment Ça Marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes pour obtenir votre prêt
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-50" />
                    <div className="relative w-20 h-20 bg-white/70 backdrop-blur-lg border-4 border-white rounded-2xl flex items-center justify-center shadow-xl">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Documents Nécessaires</h3>
            <ul className="space-y-3">
              {[
                'Pièce d\'identité valide',
                'Justificatif de domicile récent',
                'Relevés bancaires des 3 derniers mois',
                'Justificatifs de revenus'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Montants Disponibles</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
                <span className="font-semibold text-gray-700">Minimum</span>
                <span className="text-2xl font-bold text-blue-600">500 €</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-emerald-100">
                <span className="font-semibold text-gray-700">Maximum</span>
                <span className="text-2xl font-bold text-emerald-600">10 000 000 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
