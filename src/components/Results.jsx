import { TrainCard } from "./ui/TrainCard"

export const Results = () => {
    return(
        <div className="">
            <TrainCard
                date="20 novembre"
                departureTime="06:29"
                arrivalTime="09:56"
                duration="3h27m"
                from="Abidjan"
                to="Bouaké"
                trainNumber="Train #6101"
                price={5000}
            />
        </div>
    )
}