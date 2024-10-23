import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-width padding-x flex gap-4 flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-black-700">
            About Us
          </h2>
          <p className="text-black-100 mb-6">
            At Pamtech Luxury Ride, we redefine the art of travel. Our passion
            for luxury and commitment to excellence come together to offer you
            an unparalleled car rental experience.
          </p>
          <p className="text-black-100 mb-6">
            With a curated fleet of high-end vehicles and personalized service,
            we cater to discerning clients who demand the very best in
            automotive luxury and comfort.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-primary-blue mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Premium Vehicles</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-primary-blue mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <div className="rounded-[4rem] overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
            <Image
              src="https://images.unsplash.com/photo-1694059812161-a36a20c14c5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Car"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-40 mx-auto mt-10 h-40 gold-shimmer-bg rounded-full flex items-center justify-center">
        <span className="text-white text-center text-xl font-bold">
          4+ Years Experience
        </span>
      </div>
      <div className="max-width padding-x mt-20">
  <h3 className="text-3xl font-bold text-center mb-10 text-black-700">Why Choose Pamtech Luxury Ride?</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Exclusive Fleet", description: "Access to the most luxurious and high-performance vehicles.", color: "bg-amber-100", shadow: "shadow-amber-200" },
      { title: "Personalized Service", description: "Tailored experiences to meet your unique preferences and needs.", color: "bg-emerald-100", shadow: "shadow-emerald-200" },
      { title: "Seamless Booking", description: "Easy and efficient reservation process for your convenience.", color: "bg-sky-100", shadow: "shadow-sky-200" },
      { title: "Seamless Booking", description: "Easy and efficient reservation process for your convenience.", color: "bg-rose-100", shadow: "shadow-rose-200" },
      { title: "Seamless Booking", description: "Easy and efficient reservation process for your convenience.", color: "bg-violet-100", shadow: "shadow-violet-200" },
      { title: "Seamless Booking", description: "Easy and efficient reservation process for your convenience.", color: "bg-teal-100", shadow: "shadow-teal-200" }
    ].map((item, index) => (
      <div key={index} className={`${item.color} p-6 rounded-lg ${item.shadow} hover:shadow-xl transition duration-300`}>
        <h4 className="text-xl font-semibold mb-4 text-black-400">{item.title}</h4>
        <p className="text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default About;
