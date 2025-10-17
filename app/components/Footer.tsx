import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">VTU Service</h3>
            <p className="text-sm">
              Your trusted partner for fast and reliable virtual top-up services in Nigeria.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard/airtime" className="hover:text-primary-400">Airtime</Link></li>
              <li><Link href="/dashboard/data" className="hover:text-primary-400">Data Bundles</Link></li>
              <li><Link href="/dashboard/tv" className="hover:text-primary-400">Cable TV</Link></li>
              <li><Link href="/dashboard/electricity" className="hover:text-primary-400">Electricity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400">FAQ</Link></li>
              <li><Link href="/api-docs" className="hover:text-primary-400">API Docs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@vtuservice.com</li>
              <li>Phone: +234 800 000 0000</li>
              <li>
                <Link href="/support" className="hover:text-primary-400">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} VTU Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

