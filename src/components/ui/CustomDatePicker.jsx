import { useState, useRef, useEffect } from "react";

const MONTHS = ["jan.", "fév.", "mar.", "avr.", "mai", "juin", "juil.", "août", "sep.", "oct.", "nov.", "déc."];

export default function CustomDatePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const date = value ? new Date(value) : new Date();
  const selectedDay = date.getDate();
  const selectedMonth = MONTHS[date.getMonth()];
  const selectedYear = date.getFullYear();

  // Fermer si clic extérieur
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (d) => {
    const newDate = new Date(selectedYear, date.getMonth(), d);
    onChange(newDate.toISOString().split("T")[0]);
    setOpen(false);
  };

  const daysInMonth = new Date(selectedYear, date.getMonth() + 1, 0).getDate();

  return (
    <div className="relative w-full" ref={ref}>
      {/* Container */}
      <div
        className="border rounded-lg px-3 py-2 cursor-pointer w-full flex items-center gap-3 shadow-sm bg-white hover:border-blue-400 transition-all"
        onClick={() => setOpen(!open)}
      >
        {/* Bloc JOUR + MOIS */}
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold">{selectedDay}</div>
          <div className="text-gray-600">{selectedMonth}</div>
        </div>

        {/* Input invisible (comme AntD) */}
        <input
          readOnly
          className="flex-1 outline-none bg-transparent text-gray-700"
          value={value}
          placeholder="Date"
        />
      </div>

      {/* Calendrier */}
      {open && (
        <div className="absolute mt-2 bg-white rounded-lg shadow-xl p-4 z-20 w-64">
          <div className="text-center font-semibold mb-3">
            {selectedMonth} {selectedYear}
          </div>

          {/* Grille des jours */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {[...Array(daysInMonth)].map((_, i) => {
              const d = i + 1;
              const isSelected = d === selectedDay;

              return (
                <div
                  key={d}
                  onClick={() => handleSelect(d)}
                  className={`p-2 rounded-lg cursor-pointer text-sm 
                    ${isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
                  `}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
