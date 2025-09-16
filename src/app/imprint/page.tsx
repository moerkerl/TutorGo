export const metadata = {
  title: 'Imprint - TutorGo',
  description: 'Imprint and contact details of TutorGo - Bildungsinstitut Fokus AG',
}

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Imprint</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website Operator</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>TutorGo</strong></p>
                <p className="mb-2">Bildungsinstitut Fokus AG</p>
                <p className="mb-2">Staffelstr 8</p>
                <p className="mb-2">8045 Zurich</p>
                <p className="mb-2">Switzerland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> dantico@fokus-nachhilfe.ch</p>
                <p><strong>Support Hotline:</strong> 078 314 62 65</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Management Board</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Executive Management:</strong></p>
                <p>Giuseppe D&apos;Antico</p>
                <p>Liam Mörker</p>
                <p>Ciril Bullinger</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Register</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Company Name:</strong> Bildungsinstitut Fokus AG</p>
                <p><strong>Legal Form:</strong> Stock Corporation (AG)</p>
                <p><strong>Registered Office:</strong> Zurich, Switzerland</p>
                <p><strong>Commercial Register:</strong> Commercial Register of the Canton of Zurich</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">VAT Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>VAT Number:</strong> CHE-123.456.789 MWST</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible for Content</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p>Giuseppe D&apos;Antico</p>
                <p>Bildungsinstitut Fokus AG</p>
                <p>Staffelstr 8</p>
                <p>8045 Zurich</p>
                <p>Email: dantico@fokus-nachhilfe.ch</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Content Liability</h3>
                  <p>
                    The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Liability for Links</h3>
                  <p>
                    Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Copyright</h3>
                  <p>
                    The content and works created by the site operators on these pages are subject to Swiss copyright law. The reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
              <p>
                The use of our website is generally possible without providing personal data. Insofar as personal data (e.g., name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.
              </p>
              <p className="mt-4">
                For more information about privacy, please see our <a href="/privacy" className="text-[#059669] hover:text-[#047857] underline">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Applicable Law and Jurisdiction</h2>
              <p>
                Swiss law applies exclusively. The place of jurisdiction is Zurich, Switzerland.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}