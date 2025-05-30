import Link from "next/link";
import Navbar from "./(main)/Navbar";
import Footer from "@/components/Footer";


export default function LandingPage() {
  return (


<>
<main className="text-gray-900 bg-white min-h-screen px-4 sm:px-6 lg:px-20 py-16 space-y-24">

{/* Hero Section */}
<section className="text-center max-w-4xl mx-auto">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
    Build a Resume in <span className="text-blue-600">2 Steps</span> Only
  </h1>
  <p className="mt-6 text-lg text-gray-600">
    Rs. 49 only. No sign-up hassle. Just chat. Answer. Done.
  </p>
  <Link href="/resumes">
    <button className="mt-8 px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
      Start Building Now
    </button>
  </Link>
</section>

{/* Why Build With Us */}
<section>
  <h2 className="text-3xl font-bold text-center mb-10">Why Build With Us?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {[
      {
        title: "AI Does the Work",
        desc: "No templates. Just tell us about you — we'll write it perfectly.",
      },
      {
        title: "Beginner Friendly",
        desc: "Made for students and freshers with zero resume experience.",
      },
      {
        title: "Lightning Fast",
        desc: "Build and download a resume within 5 minutes.",
      },
    ].map((card, idx) => (
      <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-gray-600">{card.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Common Mistakes */}
<section>
  <h2 className="text-3xl font-bold text-center mb-10">
    10 Resume Mistakes Beginners Make <br />
    <span className="text-lg text-gray-500">And How GenieResumay Fixes Them</span>
  </h2>
  <ul className="space-y-4 max-w-3xl mx-auto text-base leading-relaxed text-gray-700 list-disc list-inside">
    {[
      "Don't know what to write: Genie chats with you and asks exactly what's needed.",
      "Add too much or too little: Genie filters what's relevant.",
      "Confused by templates: No templates. Just questions and results.",
      "Bad formatting: Clean, minimal professional design, always.",
      "Grammar issues: AI writes and checks for you.",
      "Forgetting sections: We walk you through every section — nothing missed.",
      "Including fluff: Genie highlights only achievements that matter.",
      "No summary or headline: We auto-write one that fits your goals.",
      "Unclear structure: Your resume is clean, one-page, and focused.",
      "Not knowing how to start: Just click “Start” and talk. Genie handles the rest.",
    ].map((point, idx) => (
      <li key={idx}><strong>{idx + 1}.</strong> {point}</li>
    ))}
  </ul>
</section>

{/* Featured In */}
<section className="text-center">
  <h2 className="text-xl font-semibold text-gray-600 mb-4">Featured In</h2>
  <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-semibold opacity-80">
    <span>Forbes</span>
    <span>Bloomberg</span>
    <span>NYT</span>
  </div>
</section>

{/* Call to Action */}
<section className="text-center">
  <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Resume?</h3>
  <Link href="/resumes">
    <button className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-full hover:bg-blue-700 transition duration-200">
      Start Now — Only Rs. 49
    </button>
  </Link>
</section>
</main>

<Footer />
</>

  );
}
