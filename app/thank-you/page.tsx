export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Your relocation request has been submitted successfully.
        </p>

        <p className="text-gray-400 mb-8">
          Our MovingBay team will contact you shortly with the best relocation options.
        </p>

        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}