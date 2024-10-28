'use client'
import YouTube from 'react-youtube';

const Testimonial = () => {
  const testimonials = [
    { id: '1', videoId: 'U7ufrMmvODo', name: 'Pamtech', role: 'Luxury Ride' },
    { id: '2', videoId: 'SKjZeCDXvho', name: 'Mc Mbakara', role: 'Celebrity Comedian' },
    { id: '3', videoId: 'hewMj5O8y60', name: 'Nons Mirage', role: 'Content Creator' },
  ];

  const opts = {
    height: '220',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="py-16 bg-primary-blue-100">
      <div className="max-width padding-x">
        <h2 className="text-4xl font-bold text-center mb-10 text-black-700">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <YouTube videoId={testimonial.videoId} opts={opts} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black-100">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm italic">
                  {testimonial.role}
                </p>
                <p className="text-gray-700">
                  "Pamtech Luxury Ride exceeded all my expectations. The service was impeccable and the vehicle was absolutely stunning!"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;