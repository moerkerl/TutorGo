export const metadata = {
  title: 'Imprint - TutorGo',
  description: 'TutorGo Imprint - Legal information and contact details',
}

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Imprint</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Bildungsinstitut Fokus AG</strong></p>
                <p className="mb-2">Musterstrasse 123</p>
                <p className="mb-2">8000 Zurich</p>
                <p className="mb-2">Switzerland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>Phone:</strong> 078 314 62 65
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:info@tutorgo.ch" className="text-[#059669] hover:text-[#047857] underline">info@tutorgo.ch</a>
                </p>
                <p className="mb-2">
                  <strong>Website:</strong> <a href="https://www.tutorgo.ch" className="text-[#059669] hover:text-[#047857] underline">www.tutorgo.ch</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Register</h2>
              <div className="space-y-2">
                <p><strong>Company Name:</strong> Bildungsinstitut Fokus AG</p>
                <p><strong>Legal Form:</strong> Stock Corporation (AG)</p>
                <p><strong>Registered Office:</strong> Zurich, Switzerland</p>
                <p><strong>Commercial Register Number:</strong> CHE-123.456.789</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Board of Directors</h2>
              <div className="space-y-2">
                <p>Board of Directors of Bildungsinstitut Fokus AG</p>
                <p>Musterstrasse 123</p>
                <p>8000 Zurich</p>
                <p>Switzerland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">VAT Number</h2>
              <p>CHE-123.456.789 MWST</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible for Content</h2>
              <div className="space-y-2">
                <p>According to § 55 para. 2 RStV:</p>
                <p><strong>Bildungsinstitut Fokus AG</strong></p>
                <p>Musterstrasse 123</p>
                <p>8000 Zurich</p>
                <p>Switzerland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Liability for Content</h3>
                  <p>
                    The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, as a service provider, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Liability for Links</h3>
                  <p>
                    Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" className="text-[#059669] hover:text-[#047857] underline">https://ec.europa.eu/consumers/odr</a>
              </p>
              <p className="mt-2">
                We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.
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