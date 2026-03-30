import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: { slug: string };
};

export default function BlogSlugPage({ params }: Props) {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 capitalize">
            {params.slug.replace(/-/g, " ")}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Insights, guides and expert advice on pet relocation, pet travel,
            dog transport and international pet moving from India.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Blog Content Coming Soon
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We are working on detailed blog content to help pet parents
            understand pet relocation services, documentation requirements,
            travel safety, airline policies and more.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Soon, this section will include:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Pet relocation guides from India to UAE, UK, Canada & more</li>
            <li>Domestic pet transport tips across Indian cities</li>
            <li>Air travel rules for pets</li>
            <li>Pet documentation and vaccination requirements</li>
            <li>Safe pet travel best practices</li>
          </ul>

          <p className="text-gray-600 leading-relaxed mt-6">
            For immediate assistance with pet relocation or transport services,
            feel free to request a quote from our team.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/request-quote"
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}