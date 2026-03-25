import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-[#0b1220] text-white py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-green-500/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <div className="relative">
          <Image
            src="/images/movers.jpg"
            alt="Pet relocation service"
            width={550}
            height={420}
            className="rounded-2xl shadow-2xl"
          />

          {/* Image glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-500/10 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          We Take Your Pet’s Comfort{" "}
          <span className="text-green-400">Seriously</span>
        </h2>


          <p className="mt-6 text-gray-400 leading-relaxed">
            Welcome to MovingBay, your trusted partner in pet relocation. Whether
            you’re moving across India or to a new country, we understand that
            your pets are family.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            That’s why we offer safe, stress-free, and professional pet moving
            solutions tailored to your needs. With years of experience in
            domestic and international relocation, we ensure your furry friends
            travel in comfort and security.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://wa.me/918618173141"
              target="_blank"
              className="inline-block border border-green-500 text-green-500 font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:shadow-lg"
            >
              Talk to an Expert
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-green-500">500+</h3>
              <p className="text-sm text-gray-500">Pets Relocated</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-500">20+</h3>
              <p className="text-sm text-gray-500">Cities Covered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-500">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}