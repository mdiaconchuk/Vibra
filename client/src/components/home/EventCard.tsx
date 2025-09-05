import { Event } from "@/types/event";
import Image from "next/image";
import { useCountry } from "@/context/CountryContext";
import { CalendarDaysIcon, TicketIcon } from "@heroicons/react/24/outline";

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  const image = event.images[0];
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

  if (!event) return <div>Sorry! no events available.</div>;

  const handleClick = () => {
    window.open(event.url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl 
      transition hover:brightness-105 duration-300 hover:scale-105"
    >
      <div className="relative w-full aspect-[16/9] max-h-60">
        <Image src={image.url} alt={event.name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary-d)]">{event.name} - {country.code}</h2>
        <p className="text-md text-gray-500 flex items-center"><CalendarDaysIcon className="size-5 mr-1"/>{date}</p>

        <p className="mt-2 text-md font-medium text-gray-500 flex"><TicketIcon className="size-5 mr-1"/>{priceText}</p>

        <p className="mt-3 inline-block text-[var(--color-tertiary-d)] font-semibold hover:underline text-sm">
          See more details...
        </p>
      </div>
    </div>
  );
}
