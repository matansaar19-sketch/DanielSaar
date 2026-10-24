import { FooterLegalLinks } from "@/components/FooterLegalLinks";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

const INSTAGRAM_URL = "https://www.instagram.com/danielsaarstory/";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-6 sm:flex-row-reverse">
        <div className="flex shrink-0 items-center gap-4">
          {/* Social links: only Instagram is live; add Facebook/LinkedIn here once real URLs exist */}
          <nav aria-label="רשתות חברתיות">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="האינסטגרם של דניאל סער (נפתח בלשונית חדשה)"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative h-[34px] w-[138px] shrink-0">
            <ResponsiveFigmaPicture asset={figma.logo} alt="דניאל סער" width={138} height={34} className="[&_img]:object-contain" />
          </div>
        </div>
        <FooterLegalLinks />
      </div>
    </footer>
  );
}
