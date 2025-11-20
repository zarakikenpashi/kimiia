import React, { useState } from "react";

export default function Labo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
    payment: "card",
  });

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`flex-1 h-2 mx-2 rounded-full ${
                step >= n ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* STEP 1 – TRAJET */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Détails du trajet</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 bg-gray-50">
                <h3 className="font-bold">20 Novembre • 09:09 → 12:14</h3>
                <p className="text-sm text-gray-600">Paris Gare de Lyon → Marseille Saint-Charles</p>
                <p className="text-xs text-gray-500 mt-2">Train à grande vitesse • 3h05</p>
              </div>

              <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
                <h3 className="font-bold">Choix de classe</h3>
                <div className="flex justify-between p-3 border rounded-lg">
                  <span>Classe Économie</span>
                  <span className="font-bold">$133</span>
                </div>
                <div className="flex justify-between p-3 border rounded-lg bg-yellow-500 text-white">
                  <span>1ère Classe</span>
                  <span className="font-bold">$287</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={next}
                className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow"
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 – PASSAGER */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Informations du passager</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border rounded-lg p-3 w-full"
              />
              <div className="col-span-2">
                <label className="block mb-1 text-sm font-medium">Nombre de billets</label>
                <input
                  type="number"
                  min="1"
                  className="border rounded-lg p-3 w-full md:w-40"
                  value={formData.tickets}
                  onChange={(e) => setFormData({ ...formData, tickets: +e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prev}
                className="px-6 py-2 rounded-xl border"
              >
                Retour
              </button>
              <button
                onClick={next}
                className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow"
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 – PAIEMENT */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Paiement</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { id: "card", label: "Carte bancaire" },
                { id: "paypal", label: "PayPal" },
                { id: "mobile", label: "Mobile Money" },
              ].map((pay) => (
                <div
                  key={pay.id}
                  onClick={() => setFormData({ ...formData, payment: pay.id })}
                  className={`p-4 border rounded-xl cursor-pointer text-center ${
                    formData.payment === pay.id ? "bg-yellow-500 text-white" : "bg-gray-50"
                  }`}
                >
                  {pay.label}
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <button onClick={prev} className="px-6 py-2 rounded-xl border">
                Retour
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-xl shadow">
                Confirmer la réservation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
