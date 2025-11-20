import { useState } from "react";
import StepTrajet from "../components/steps/StepTrajet";
import StepPassenger from "../components/steps/StepPassenger";
import StepPayment from "../components/steps/StepPayment";
import { motion, AnimatePresence } from "framer-motion";
import StepRecap from "../components/steps/StepRecap";

export default function Labo_2() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", tickets: 1, payment: "card" });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
        {/* <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={`flex-1 h-2 mx-2 rounded-full ${step >= n ? "bg-yellow-500" : "bg-gray-300"}`}></div>
          ))}
        </div> */}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit">
              <StepTrajet next={next} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit">
              <StepPassenger formData={formData} setFormData={setFormData} next={next} prev={prev} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit">
              <StepPayment formData={formData} setFormData={setFormData} next={next} prev={prev} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit">
              <StepRecap formData={formData} next={next} prev={prev} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
