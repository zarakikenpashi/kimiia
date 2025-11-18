import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, ChevronDown, Menu } from 'lucide-react';

export default function Labo() {
  const [tripType, setTripType] = useState('aller-simple');
  const [date, setDate] = useState('24');
  const [month, setMonth] = useState('NOV');

  return (
    <div className="min-h-screen bg-white flex justify-center flex-col">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* World Map Background */}
        

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            La façon la plus simple
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            de réserver des billets de train
          </h2>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-2xl p-6">
            {/* Trip Type Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setTripType('aller-simple')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  tripType === 'aller-simple'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Aller simple
              </button>
              <button
                onClick={() => setTripType('aller-retour')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  tripType === 'aller-retour'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-white'
                }`}
              >
                Aller-retour
              </button>
            </div>

            {/* Search Inputs */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Date Selector */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center w-24">
                <div className="text-3xl font-bold text-black">{date}</div>
                <div className="text-sm text-gray-600">{month}</div>
              </div>

              {/* Location Inputs */}
              <div className="flex-1 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ville de départ"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <button className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white border-2 border-gray-300 rounded-full p-2 z-10">
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ville d'arrivée"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Passenger Button */}
              <button className="bg-white border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center w-16">
                <User className="w-6 h-6 text-gray-600" />
              </button>

              {/* Search Button */}
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher des trains
              </button>
            </div>

            {/* Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="reserve" className="w-4 h-4" />
              <label htmlFor="reserve" className="text-sm text-gray-700">
                Réservez votre hébergement pour le voyage
              </label>
            </div>
          </div>
        </div>
      </div>





      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Rail Ninja est un service de réservation de billets de train en ligne. Ce n'est pas un
            transporteur ferroviaire, il ne possède ni n'exploite de trains et ne représente pas le
            site officiel d'aucune compagnie ferroviaire. C'est une entreprise commerciale qui
            facilite la réservation de billets de train en ligne.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              Offrez-vous quelque chose
              <ArrowRight className="w-4 h-4 text-yellow-600" />
            </h3>
            <p className="text-sm text-gray-700">
              Réservez et gérez vos voyages partout
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              Sous vos fauteuils
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </h3>
            <p className="text-sm text-gray-700">
              Finalo par plus de 24/7 de voyageurs à travers le monde
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              Disponible 24/7
              <ArrowRight className="w-4 h-4 text-green-600" />
            </h3>
            <p className="text-sm text-gray-700">
              Une assistance humaine reste à tout moment
            </p>
          </div>
        </div>

        {/* App Download Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              Notre app gratuite pour faciliter chaque étape de votre voyage !
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded">
              <div className="w-16 h-16 bg-gray-200"></div>
            </div>
            <div className="flex gap-2">
              <button className="bg-black px-4 py-2 rounded flex items-center gap-2">
                <span className="text-xs">Télécharger sur l'</span>
                <span className="font-semibold">App Store</span>
              </button>
              <button className="bg-black px-4 py-2 rounded flex items-center gap-2">
                <span className="text-xs">Disponible sur</span>
                <span className="font-semibold">Google Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Sections with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800"
              alt="Train station"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Meilleur pour la planète
                </h3>
                <p className="text-gray-200 text-sm">
                  Les trains sont écologiques design. Ils génèrent beaucoup moins de pollution
                  et causent moins de dommages à notre planète que les autres moyens de transport
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800"
              alt="Modern train"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">
                Rapide et moderne
              </h3>
              <p className="text-gray-200 text-sm">
                Les TGV traversent l'Europe et l'Asie.
                Rien de mieux que ces trains ultra-rapides
                pour voyager
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Le moyen le plus pratique de réserver des billets de train en ligne
          </h2>
          <p className="text-gray-700 mb-4">
            Rail Ninja est une agence de réservation en ligne indépendante et internationale pour les billets de train
          </p>
          <p className="text-gray-600">
            Notre objectif est de vous aider à obtenir les trains les plus confortables et à voir les types de
            temps déjà que vous pouvez faire le meilleur choix pour votre voyage. Rail Ninja vous permet
            de réserver vos billets largement à l'avance pour mieux organiser vos vacances.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-gray-200">
          <div className="text-4xl font-bold text-blue-600">VISA</div>
          <div className="text-3xl text-gray-600">G Pay</div>
          <div className="text-3xl text-gray-600">Apple Pay</div>
          <div className="text-2xl font-semibold text-blue-500">AMEX</div>
          <div className="text-3xl text-teal-500">PayPal</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Notre app gratuite pour faciliter chaque étape de votre voyage !
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded">
                <div className="w-16 h-16 bg-gray-200"></div>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-800 px-4 py-2 rounded text-sm">App Store</button>
                <button className="bg-gray-800 px-4 py-2 rounded text-sm">Google Play</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Porto</h4>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Lagos</h4>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Faro</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Trains de Porto à Lisbonne</h4>
              <h4 className="font-semibold mb-3">Trains de Lagos à Lisbonne</h4>
              <h4 className="font-semibold mb-3">Trains de Faro à Lisbonne</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Alcobaca</h4>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Madrid</h4>
              <h4 className="font-semibold mb-3">Trains de Lisbonne à Coimbra</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Trains de Alcobaca à Lisbonne</h4>
              <h4 className="font-semibold mb-3">Trains de Madrid à Lisbonne</h4>
              <h4 className="font-semibold mb-3">Trains de Coimbra à Lisbonne</h4>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <button className="mb-4 flex items-center gap-2 text-sm">
              Afficher plus d'itinéraires populaires
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white mb-1">Produit OT Limited (OC 3431)</p>
                <p>61a Elia Beach Ave, Suite 1, Paralimni, area 5296, Cyprus</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Produit OT Limited (08565430)</p>
                <p>Office 169 Aldersgate, 4 Aldler Street NE, South Africa</p>
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700">
                  <option>🇫🇷 Français</option>
                </select>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p className="mb-2">Aide & Support</p>
              <p>Conditions Générales de Vente</p>
              <p>Politique de confidentialité</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}