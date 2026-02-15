import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Configuration EmailJS - Identifiants validés
const EMAILJS_SERVICE_ID = 'service_miikrwb';
const EMAILJS_TEMPLATE_ID = 'template_9v371ts';
const EMAILJS_PUBLIC_KEY = 'l1IeEJYMgLISGsRaz';

// Initialiser EmailJS une seule fois
emailjs.init(EMAILJS_PUBLIC_KEY);

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Utiliser send au lieu de sendForm pour plus de contrôle
      const formData = new FormData(formRef.current);
      const templateParams = {
        from_name: formData.get('from_name') as string,
        from_email: formData.get('from_email') as string,
        amount: formData.get('amount') as string,
        message: formData.get('message') as string,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email envoyé avec succès:', result);
      setSubmitStatus('success');
      setStatusMessage('Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais.');
      formRef.current.reset();
    } catch (error: any) {
      console.error('Erreur détaillée:', error);
      setSubmitStatus('error');
      
      // Message d'erreur plus détaillé
      let errorMsg = 'Une erreur est survenue. ';
      if (error?.text) {
        errorMsg += `Détails : ${error.text}. `;
      } else if (error?.message) {
        errorMsg += `Détails : ${error.message}. `;
      }
      errorMsg += 'Veuillez réessayer ou nous contacter directement par email.';
      
      setStatusMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
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
                  name="from_email"
                  required
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
                  name="amount"
                  required
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
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet et vos besoins..."
                />
              </div>

              {/* Message de statut */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    Envoi en cours...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Envoyer la demande
                    <Send className="w-5 h-5" />
                  </>
                )}
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
