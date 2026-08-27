import Link from "next/link";

const serviceLinks = [
  { href: "/services#pcb", label: "PCB Design" },
  { href: "/services#hardware", label: "Hardware Engineering" },
  { href: "/services#dfm", label: "DFM & Design Review" },
  { href: "/services#prototyping", label: "Prototyping" },
  { href: "/services#sourcing", label: "Component Sourcing" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="text-accent-blue">Trace</span>
              <span className="text-white">Technology</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-400">
              Engineering the hardware behind what&apos;s next. PCB design,
              hardware engineering, prototyping and manufacturing support.
            </p>
            <p className="mt-4 text-xs text-navy-500">
              Bangladesh — Serving Clients Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-navy-500">
          &copy; {new Date().getFullYear()} Trace Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
