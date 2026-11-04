import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import clsx from 'clsx';

const VIDEO_SRC =
  'https://cdn.sceneai.art/Hero Section Video/a8132a81-b526-4f91-8095-003ce931ecdd.mp4';

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Solutions', href: '#solutions', chevron: true },
  { label: 'Resources', href: '#resources', chevron: true },
];

const PHONE = '+1 (555) 123-4567';

const styles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .animate-fade-slide-up { opacity: 0; animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up, .animate-fade-in { animation-duration: 0.01s; animation-delay: 0s !important; }
  }
`;

/**
 * Word-by-word staggered reveal. `startIndex` lets several lines share one
 * continuous stagger so the delay keeps increasing across line breaks.
 */
function AnimatedWords({ text, delay = 0, step = 0.08, startIndex = 0, className = '' }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={clsx('animate-fade-slide-up', 'inline-block')}
          style={{ animationDelay: `${delay + (startIndex + i) * step}s` }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

function Logo() {
  return (
    <svg fill="currentColor" height="32" viewBox="0 0 145 48" width="96" xmlns="http://www.w3.org/2000/svg" aria-label="Logo" role="img">
      <g fill="currentColor">
        <path clipRule="evenodd" d="m15.2286 4.99951c-3.2154 0-6.18655 1.71539-7.79425 4.5l-5.7735 9.99999c-1.6076941 2.7846-1.607697 6.2154 0 9l5.7735 10c1.6077 2.7846 4.57885 4.5 7.79425 4.5h11.547c3.2154 0 6.1865-1.7154 7.7942-4.5l5.7735-10c1.6077-2.7846 1.6077-6.2154 0-9l-5.7735-9.99999c-1.6077-2.78461-4.5788-4.5-7.7942-4.5zm11.547 5.99999h-7.2169c-1.1547 0-1.8762 1.2499-1.298 2.2494 1.784 3.0838 3.5722 6.1653 5.3536 9.2506.5359.9282.5359 2.0718 0 3-1.7814 3.0854-3.5696 6.1668-5.3536 9.2506-.5782.9995.1433 2.2494 1.298 2.2494h7.2169c1.0718 0 2.0622-.5718 2.5981-1.5l5.7735-10c.5359-.9282.5359-2.0718 0-3l-5.7735-10c-.5359-.9282-1.5263-1.5-2.5981-1.5z" fillRule="evenodd" />
        <path d="m66.983 20.526h-4.536c-.513-1.809-1.809-2.781-3.645-2.781-2.781 0-4.374 2.322-4.374 6.102 0 3.807 1.566 6.048 4.374 6.048 1.728 0 3.078-.918 3.591-2.646h4.59c-.945 4.05-4.212 6.183-8.127 6.183-5.481 0-8.856-3.645-8.856-9.585s3.375-9.639 8.91-9.639c3.942 0 7.29 2.133 8.073 6.318z" />
        <path d="m75.1442 33.432c-4.401 0-7.128-2.916-7.128-7.695 0-4.941 2.808-7.722 7.128-7.722 4.401 0 7.155 2.97 7.155 7.722 0 4.914-2.835 7.695-7.155 7.695zm0-3.348c1.917 0 2.916-1.512 2.916-4.347 0-2.808-1.026-4.374-2.916-4.374s-2.889 1.539-2.889 4.374c0 2.808 1.026 4.347 2.889 4.347z" />
        <path d="m83.9439 33v-14.526h4.1309v2.025c.918-1.728 2.3221-2.484 3.8071-2.484.594 0 1.134.162 1.431.459v3.483c-.486-.108-.999-.162-1.647-.162-2.484 0-3.5911 1.404-3.5911 3.699v7.506z" />
        <path d="m107.851 28.221c-.756 3.348-3.456 5.211-7.02 5.211-4.5093 0-7.2903-2.916-7.2903-7.695 0-4.941 2.808-7.722 7.1283-7.722 4.347 0 7.074 2.889 7.074 7.641v.918h-9.9903c.216 2.322 1.296 3.564 3.0783 3.564 1.35 0 2.268-.594 2.7-1.917zm-7.182-6.912c-1.5393 0-2.5113.999-2.8353 2.889h5.6433c-.324-1.89-1.296-2.889-2.808-2.889z" />
        <path d="m118.324 33.432c-5.697 0-9.207-3.672-9.207-9.585 0-5.94 3.51-9.639 9.207-9.639 5.67 0 9.18 3.699 9.18 9.639 0 5.913-3.51 9.585-9.18 9.585zm0-3.537c2.997 0 4.752-2.268 4.752-6.048s-1.755-6.102-4.752-6.102c-3.024 0-4.779 2.295-4.779 6.102 0 3.78 1.755 6.048 4.779 6.048z" />
        <path d="m133.466 19.365c0 3.915 10.8.594 10.8 8.1 0 3.78-3.132 5.967-7.425 5.967-4.347 0-7.452-1.998-8.1-6.183h4.563c.351 1.809 1.62 2.808 3.564 2.808s2.97-.783 2.97-2.052c0-4.104-10.827-.972-10.827-8.235 0-3.078 2.565-5.562 7.074-5.562 3.807 0 7.101 1.809 7.668 6.048h-4.617c-.378-1.809-1.431-2.673-3.213-2.673-1.512 0-2.457.702-2.457 1.782z" />
      </g>
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const linkClass = 'text-[14px] font-normal text-white/70 transition-colors duration-200 hover:text-white';

  return (
    <div className={clsx('relative', 'min-h-screen', 'w-full', 'overflow-hidden', 'bg-black', 'text-white')}>
      <style>{styles}</style>

      {/* Background video */}
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={encodeURI(VIDEO_SRC)}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedData={() => setVideoReady(true)}
      />
      <div className={clsx('absolute', 'inset-0', 'bg-black/40')} aria-hidden="true" />

      {/* Content column: nav + centered hero */}
      <div className={clsx('relative', 'z-20', 'flex', 'min-h-screen', 'flex-col')}>
        <header className={clsx('flex', 'items-center', 'justify-between', 'px-6', 'py-6', 'md:px-10', 'lg:px-14')}>
          <a href="/" aria-label="Home" className="text-white">
            <Logo />
          </a>

          <nav className={clsx('hidden', 'items-center', 'gap-8', 'md:flex')} aria-label="Primary">
            {NAV_LINKS.map(({ label, href, chevron }) => (
              <a key={label} href={href} className={`${linkClass} inline-flex items-center gap-1`}>
                {label}
                {chevron && <ChevronDown className={clsx('h-3.5', 'w-3.5')} aria-hidden="true" />}
              </a>
            ))}
          </nav>

          <div className={clsx('hidden', 'items-center', 'gap-6', 'md:flex')}>
            <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className={`${linkClass} inline-flex items-center gap-2`}>
              <Phone className={clsx('h-3.5', 'w-3.5')} aria-hidden="true" />
              {PHONE}
            </a>
            <a href="#contact" className={linkClass}>
              Contact Us
            </a>
          </div>

          <button
            type="button"
            className={clsx('-mr-2', 'p-2', 'text-white', 'md:hidden')}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className={clsx('h-6', 'w-6')} />
          </button>
        </header>

        <main className={clsx('flex', 'flex-1', 'items-center', 'justify-center', 'px-6', 'pb-16', 'text-center')}>
          <div className={clsx('flex', 'flex-col', 'items-center')}>
            <h1 className={clsx('max-w-4xl', 'text-balance', 'text-[62px]', 'font-bold', 'leading-[1.05]', 'tracking-tight')}>
              <AnimatedWords text="Build Strong, Build Smart" delay={0.5} />
            </h1>

            <p className={clsx('mt-6', 'max-w-[26rem]', 'text-[15px]', 'font-light', 'leading-relaxed', 'text-white/85')}>
              <span className="block">
                <AnimatedWords text="High-quality construction materials for every" delay={1.4} step={0.06} />
              </span>
              <span className="block">
                <AnimatedWords text="project, from foundation to finish." delay={1.4} step={0.06} startIndex={6} />
              </span>
            </p>

            <a
              href="#contact"
              className={clsx('animate-fade-in', 'mt-8', 'inline-block', 'rounded-full', 'bg-white', 'px-5', 'py-2', 'text-sm', 'font-medium', 'text-black', 'transition-transform', 'duration-200', 'hover:scale-105', 'active:scale-95')}
              style={{ animationDelay: '2.5s' }}
            >
              Get a Quote
            </a>
          </div>
        </main>
      </div>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className={clsx('fixed', 'inset-0', 'z-30', 'flex', 'flex-col', 'bg-black/95', 'px-6', 'py-6', 'md:hidden')} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={clsx('flex', 'items-center', 'justify-between')}>
            <a href="/" aria-label="Home" className="text-white" onClick={() => setMenuOpen(false)}>
              <Logo />
            </a>
            <button type="button" className={clsx('-mr-2', 'p-2', 'text-white')} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X className={clsx('h-6', 'w-6')} />
            </button>
          </div>

          <nav className={clsx('mt-12', 'flex', 'flex-1', 'flex-col', 'gap-6')} aria-label="Mobile">
            {NAV_LINKS.map(({ label, href, chevron }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={clsx('inline-flex', 'items-center', 'gap-2', 'text-3xl', 'font-light', 'text-white/80', 'transition-colors', 'hover:text-white')}
              >
                {label}
                {chevron && <ChevronDown className={clsx('h-5', 'w-5')} aria-hidden="true" />}
              </a>
            ))}
          </nav>

          <div className={clsx('flex', 'flex-col', 'gap-4', 'border-t', 'border-white/15', 'pt-6')}>
            <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className={clsx('inline-flex', 'items-center', 'gap-2', 'text-[14px]', 'font-normal', 'text-white/80')}>
              <Phone className={clsx('h-4', 'w-4')} aria-hidden="true" />
              {PHONE}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={clsx('text-[14px]', 'font-normal', 'text-white/80')}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
