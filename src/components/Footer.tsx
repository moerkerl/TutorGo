import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          <p>&copy; 2025 TutorGo. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-[#059669]">Privacy</Link>
            <Link href="/imprint" className="hover:text-[#059669]">Imprint</Link>
            <span className="text-gray-400">|</span>
            <Link href="/de" className="hover:text-[#059669]">🇩🇪 Deutsch</Link>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            A brand of Bildungsinstitut Fokus AG
          </div>
        </div>
      </div>
    </footer>
  )
}