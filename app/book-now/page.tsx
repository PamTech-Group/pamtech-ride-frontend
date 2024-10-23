"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// You'll need to define this type based on your car data structure
interface Car {
  id: string;
  name: string;
  image: string;
  // Add other relevant car details
}
interface State {
  name: string;
  lgas: string[];
}
const states: State[] = [
  {
    name: "Abia",
    lgas: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala Ngwa North",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu Nneochi",
    ],
  },
  {
    name: "Akwa Ibom",
    lgas: [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanafun",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo",
    ],
  },
  {
    name: "Anambra",
    lgas: [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi",
    ],
  },
  {
    name: "Bayelsa",
    lgas: [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Ijaw",
      "Yenagoa",
    ],
  },
  {
    name: "Cross River",
    lgas: [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar Municipal",
      "Calabar South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakuur",
      "Yala",
    ],
  },
  {
    name: "Delta",
    lgas: [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope East",
      "Ethiope West",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Okpe",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ughelli South",
      "Ukwuani",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West",
    ],
  },
  {
    name: "Ebonyi",
    lgas: [
      "Abakaliki",
      "Afikpo North",
      "Afikpo South",
      "Ebonyi",
      "Ezza North",
      "Ezza South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Ohaozara",
      "Ohaukwu",
      "Onicha",
    ],
  },
  {
    name: "Edo",
    lgas: [
      "Akoko-Edo",
      "Egor",
      "Esan Central",
      "Esan North-East",
      "Esan South-East",
      "Esan West",
      "Etsako Central",
      "Etsako East",
      "Etsako West",
      "Igueben",
      "Ikpoba Okha",
      "Orhionmwon",
      "Oredo",
      "Ovia North-East",
      "Ovia South-West",
      "Owan East",
      "Owan West",
      "Uhunmwonde",
    ],
  },
  {
    name: "Enugu",
    lgas: [
      "Aninri",
      "Awgu",
      "Enugu East",
      "Enugu North",
      "Enugu South",
      "Ezeagu",
      "Igbo Etiti",
      "Igbo Eze North",
      "Igbo Eze South",
      "Isi Uzo",
      "Nkanu East",
      "Nkanu West",
      "Nsukka",
      "Oji River",
      "Udenu",
      "Udi",
      "Uzo Uwani",
    ],
  },
  {
    name: "Imo",
    lgas: [
      "Aboh Mbaise",
      "Ahiazu Mbaise",
      "Ehime Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri Municipal",
      "Owerri North",
      "Owerri West",
      "Unuimo",
    ],
  },
  {
    name: "Rivers",
    lgas: [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Akuku-Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Eleme",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obio/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port Harcourt",
      "Tai",
    ],
  },
];
const BASE_PRICE = 100000;
const DECEMBER_SURCHARGE = 15000;
const IMO_SURCHARGE = 20000;
const OTHER_STATE_SURCHARGE = 40000;
const BookNowPage = () => {
  // This should be passed from the previous page or fetched based on URL params
  const selectedCar: Car = {
    id: "1",
    name: "Luxury SUV",
    image: "/hero.png",
    // Add other car details
  };

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pickupState, setPickupState] = useState<string>("");
  const [pickupLGA, setPickupLGA] = useState<string>("");
  const [destinationState, setDestinationState] = useState<string>("");
  const [destinationLGA, setDestinationLGA] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(BASE_PRICE);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [areaOfUse, setAreaOfUse] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePrice = () => {
    let price = BASE_PRICE;

    // Check for December dates
    if (startDate && startDate.getMonth() === 11) {
      price += DECEMBER_SURCHARGE;
    }

    // Check for Imo State
    if (pickupState === "Imo" && destinationState === "Imo") {
      price += IMO_SURCHARGE;
    }

    // Check for states other than Abia, Rivers, and Anambra
    const exemptStates = ["Abia", "Rivers", "Anambra"];
    if (
      !exemptStates.includes(pickupState) ||
      !exemptStates.includes(destinationState)
    ) {
      price += OTHER_STATE_SURCHARGE;
    }

    setTotalPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [startDate, pickupState, destinationState]);

  const handleStateChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      lgaSetter: React.Dispatch<React.SetStateAction<string>>
    ) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
      lgaSetter("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div className="flex flex-col lg:flex-row gap-8 mx-auto  px-4 py-8 max-width">
      

      <section  className="w-full lg:w-1/2 mt-2 ">
        <h1 className="text-3xl font-bold mt-12">Book Your Ride</h1>

        {/* Car Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src={selectedCar.image}
                alt={selectedCar.name}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedCar.name}
              </h2>
              {/* Add more car details here */}
            </div>
          </div>
        </div>

        {/* Date Picker Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Rental Dates</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date || undefined)}
                selectsStart
                startDate={startDate || undefined}
                endDate={endDate || undefined}
                minDate={new Date()}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date || undefined)}
                selectsEnd
                startDate={startDate || undefined}
                endDate={endDate || undefined}
                minDate={startDate || undefined}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Pickup Location Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Select Pickup Location
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={pickupState}
                onChange={handleStateChange(setPickupState, setPickupLGA)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Local Government Area
              </label>
              <select
                value={pickupLGA}
                onChange={(e) => setPickupLGA(e.target.value)}
                className="w-full p-2 border rounded-md"
                disabled={!pickupState}
              >
                <option value="">Select an LGA</option>
                {pickupState &&
                  states
                    .find((state) => state.name === pickupState)
                    ?.lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
              </select>
            </div>
          </div>
        </div>

        {/* Destination Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Destination</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={destinationState}
                onChange={handleStateChange(
                  setDestinationState,
                  setDestinationLGA
                )}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Local Government Area
              </label>
              <select
                value={destinationLGA}
                onChange={(e) => setDestinationLGA(e.target.value)}
                className="w-full p-2 border rounded-md"
                disabled={!destinationState}
              >
                <option value="">Select an LGA</option>
                {destinationState &&
                  states
                    .find((state) => state.name === destinationState)
                    ?.lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
              </select>
            </div>
          </div>
        </div>

        {/* Total Price Display */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Total Price</h2>
          <p className="text-3xl font-bold text-primary-blue">
            ₦{totalPrice.toLocaleString()}
          </p>
        </div>
      </section>
    
      <section id="form" className="w-full lg:w-1/2 mt-16 ">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Complete Your Booking</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="areaOfUse"
                className="block text-sm font-medium text-gray-700"
              >
                Area of Use
              </label>
              <input
                type="text"
                id="areaOfUse"
                value={areaOfUse}
                onChange={(e) => setAreaOfUse(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="orderNote"
                className="block text-sm font-medium text-gray-700"
              >
                Order Note
              </label>
              <textarea
                id="orderNote"
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-primary-blue text-white font-semibold rounded-full shadow-md hover:bg-primary-blue-dark focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Checkout"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookNowPage;
