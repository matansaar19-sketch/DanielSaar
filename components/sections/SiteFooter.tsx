import { FooterLegalLinks } from "@/components/FooterLegalLinks";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

const INSTAGRAM_URL = "https://www.instagram.com/danielsaarstory/";
const INSTAGRAM_HANDLE = "danielsaarstory";

/** Monochrome Instagram glyph (inherits currentColor). */
function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      />
    </svg>
  );
}

/** Instagram brand-gradient glyph, revealed on hover/focus. */
function InstagramGlyphColor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <radialGradient id="footer-ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.05" stopColor="#fdf497" />
          <stop offset="0.45" stopColor="#fd5949" />
          <stop offset="0.6" stopColor="#d6249f" />
          <stop offset="0.9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#footer-ig-gradient)" />
      <rect x="6" y="6" width="12" height="12" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.8" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="15.6" cy="8.4" r="0.85" fill="#fff" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 sm:px-10 lg:px-20">
      {/* Mobile: stacked (logo, Instagram, legal). sm+: 3 columns in RTL — legal (right), Instagram (center), logo (left). */}
      <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <div className="relative h-[34px] w-[138px] shrink-0 sm:col-start-3 sm:row-start-1 sm:justify-self-end">
          <ResponsiveFigmaPicture asset={figma.logo} alt="דניאל סער" width={138} height={34} className="[&_img]:object-contain" />
        </div>

        {/* Social links: add Facebook/LinkedIn here once real URLs exist */}
        <nav aria-label="רשתות חברתיות" className="sm:col-start-2 sm:row-start-1">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="האינסטגרם של דניאל סער (נפתח בלשונית חדשה)"
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-md px-1 text-sm font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="relative inline-block h-5 w-5 shrink-0">
              <InstagramGlyph className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 motion-reduce:transition-none" />
              <InstagramGlyphColor className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
            </span>
            <span dir="ltr" className="underline-offset-[3px] group-hover:underline">
              {INSTAGRAM_HANDLE}
            </span>
          </a>
        </nav>

        <div className="sm:col-start-1 sm:row-start-1">
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}
