import { Link } from 'react-router-dom';

function ResumeSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 text-[#798dc6] hover:underline font-medium"
      >
        ← Back to Portfolio
      </Link>

      <div className="max-w-[8.5in] mx-auto p-[1in]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mariah Holder</h1>
          <p className="text-lg text-gray-600 mb-4">Graphic Designer</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>mariahohs@gmail.com · 778 723 1604 · Vancouver, BC</p>
            <p>Portfolio: holdermariah.github.io/portfolio/ · Password: mywork</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 leading-relaxed text-justify">
            Graphic Designer with 5+ years of experience, passionate about using thoughtful design to simplify complex topics, reduce stigma, and improve access to everyday services.
          </p>
        </div>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Work Experience</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-semibold text-gray-900">Graphic Designer</h3>
              <span className="text-sm text-gray-600">Nov. 2021 - Nov. 2025</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">Multivista (Part of Hexagon)</p>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
              <li>Collaborated with marketing and growth stakeholders to translate campaign briefs and performance insights into effective, high-performing creative.</li>
              <li>Designed omni-channel campaign assets across web, email, social, presentations, and digital advertising.</li>
              <li>Contributed to brand refresh initiatives, evolving typography systems, colour palettes, and visual guidelines to create a more cohesive brand experience.</li>
              <li>Created scalable design templates and marketing toolkits to improve production efficiency across teams.</li>
              <li>Designed event, tradeshow, and print materials including signage, banners, and collateral.</li>
              <li>Produced AI-generated imagery and campaign assets using Adobe Firefly to support rapid creative testing and production efficiency.</li>
              <li>Maintained organized file systems, version control, and production-ready exports for digital platforms.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-semibold text-gray-900">Graphic Designer and Marketing Manager</h3>
              <span className="text-sm text-gray-600">Jan. 2017 - Aug. 2019</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">Gosto de Pao Bakery</p>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
              <li>Designed marketing and promotional materials across print and digital brand touchpoints.</li>
              <li>Created branded social media content and promotional campaign visuals.</li>
              <li>Maintained visual consistency across in-store and digital marketing initiatives.</li>
              <li>Built marketing templates for internal and customer-facing communications.</li>
              <li>Delivered photography and visual assets for product marketing campaigns.</li>
              <li>Prepared vendor-ready production files and coordinated print workflows.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Education</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Bachelor in Advertising and Marketing</strong> · 2011-2016 · UFRN, Natal, Brazil</p>
            <p><strong>Graphic Design Certificate</strong> · 2012-2013 · SENAC RN, Natal, Brazil</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Awards</h2>
          <p className="text-sm text-gray-700">
            <strong>Winner team of BID URBANLAB Brazil, 2017</strong> · First prize winner in an international urban design competition by the Inter-American Development Bank. Contributed to visual communication for the Eyes of Ribeira project, creating diagrams, render edits, and presentation layouts to support a sustainable, community-driven regeneration proposal for a historic district in Natal, Brazil.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Core Skills</h2>
          <p className="text-sm text-gray-700">
            Brand Systems & Visual Identity · Static Social Ad Design · Packaging & Print Design · Typography, Colour & Layout Systems · Digital Marketing Design · Visual Communication · Cross-Functional Collaboration · Figma · Photoshop · Illustrator · InDesign · After Effects (Basic) · Canva · AI Asset Creation (Adobe Firefly)
          </p>
        </section>
      </div>
    </div>
  );
}

export default ResumeSupportPage;
