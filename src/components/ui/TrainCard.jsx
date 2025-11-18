export const TrainCard = ({
  date = "20 novembre",
  departureTime = "06:29",
  arrivalTime = "09:56",
  duration = "3h27m",
  from = "Gare de Lyon",
  to = "Saint-Charles",
  trainType = "Car climatisé",
  trainNumber = "Départ #006",
  price = 175,
  buttonLabel = "Choisir",
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm w-full">
        {/* Left section */}
        <div className="flex flex-col gap-2">
            {/* Date */}
            <span className="text-sm text-gray-500">{date}</span>

            {/* Times */}
            <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold">{departureTime}</span>

            {/* timeline */}
            <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 rounded-full bg-gray-300 mr-1"></div>
                <span className="text-sm">{duration}</span>
                <div className="w-2 h-2 rounded-full bg-red-500 ml-1"></div>
            </div>

            <span className="text-3xl font-semibold">{arrivalTime}</span>
            </div>

            {/* Stations */}
            <div className="flex justify-between text-gray-500 text-sm">
            <span>{from}</span>
            <span>{to}</span>
            </div>
        </div>

        {/* Center section */}
        <div className="flex flex-col justify-center">
            <span className="bg-[rgba(255,175,1,0.1)] text-[rgb(89,89,89)] text-xs uppercase font-semibold px-2 py-1 rounded">
            {trainType}
            </span>

            {/* SNCF + train number */}
            <div className="flex items-center gap-2">
            <img
                src="data:image/png;base64,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"
                alt="SNCF"
                className="size-20 object-cover"
            />
            <span className="text-sm text-gray-600">{trainNumber}</span>
            </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-end gap-2">
            {/* Price */}
            <div className="text-right">
                <span className="text-gray-500 text-sm">De </span>
                <span className="text-xl font-semibold">${price}</span>
            </div>
            {/* Button */}
            <button className="cursor-pointer mt-1 bg-[rgb(255,78,0)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                {buttonLabel}
            </button>
        </div>
    </div>
  );
}
