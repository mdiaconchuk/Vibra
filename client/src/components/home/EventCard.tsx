import { Event } from "@/types/event";
import Image from "next/image";
import { useCountry } from "@/context/CountryContext";
import {
  CalendarDaysIcon,
  TicketIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

type Props = {
  event: Event;
  highlight?: boolean;
};

export default function EventCard({ event, highlight }: Props) {
  const image = event.images[0];
  const venue = event._embedded?.venues?.[0];
  const date = event.dates.start.localDate;
  const { country } = useCountry();

  let priceText = "No price info available";
  if (event.priceRanges?.length) {
    const values = event.priceRanges.map((p) => p.value);
    const minPrice = Math.min(...values);
    const maxPrice = Math.max(...values);
    const currency = event.priceRanges[0].currency;

    priceText =
      minPrice !== maxPrice
        ? `From ${currency} ${minPrice} to ${currency} ${maxPrice}`
        : `From ${currency} ${minPrice}`;
  }

  const venueText = venue
    ? `${venue.address?.line1 ?? "No address"}${
        venue.postalCode ? `, CP ${venue.postalCode}` : ""
      }`
    : "No venue info";

  if (!event) return <div>Sorry! no events available.</div>;

  const handleClick = () => {
    window.open(event.url, "_blank");
  };

  const bgClass = highlight
    ? "bg-green-100 border-green-800 border"
    : "bg-white";

  return (
    <div
      onClick={handleClick}
      className={`relative cursor-pointer rounded-lg shadow-md overflow-hidden ${bgClass} hover:shadow-xl transition hover:brightness-105 duration-300 hover:scale-105 w-full sm:max-w-sm md:max-w-md`}
    >
      {/* Badge SOONER */}
      {highlight && (
        <span className="absolute top-2 right-2 bg-green-400 text-black font-bold text-xs px-2 py-1 rounded z-10">
          SOONER
        </span>
      )}

      <div className="relative w-full aspect-[16/9] md:aspect-[4/3] max-h-64">
        <Image src={image.url} alt={event.name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--color-primary-d)] truncate">
          {event.name} - {country.code}
        </h2>

        <p className="text-sm sm:text-md text-gray-500 flex items-center mb-1">
          <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
          {date}
        </p>

        <p className="text-sm sm:text-md text-gray-500 flex items-center mb-1">
          <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
          {venueText}
        </p>

        <p className="mt-2 text-sm sm:text-md font-medium text-gray-600 flex items-center">
          <TicketIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
          {priceText}
        </p>

        <p className="mt-3 inline-block text-[var(--color-cuaternary)] font-semibold hover:underline text-xs sm:text-sm">
          See more details...
        </p>
      </div>
    </div>
  );
}
