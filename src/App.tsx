import { useEffect, useState, type ReactNode } from "react";
import {
  images,
  lessons,
  pillars,
  questions,
  stats,
  unexpected,
  work,
} from "./data";
import { site } from "./site";
import { useReveal } from "./useReveal";

function Reveal({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Photo({
  src,
  alt,
  className,
  eager = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      draggable={false}
      aria-hidden={alt ? undefined : true}
    />
  );
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#learning", label: "Learning" },
  { href: "#numbers", label: "Numbers" },
] as const;

export default function App() {
  const [pillar, setPillar] = useState<(typeof pillars)[number]>(pillars[0]);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroMotion, setHeroMotion] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const progress = Math.min(y / (window.innerHeight * 0.7), 1);
      setHeroMotion({
        y: progress * 96,
        opacity: 1 - progress * 0.88,
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMenuOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const selectPillar = (direction: 1 | -1) => {
    const index = pillars.findIndex((item) => item.id === pillar.id);
    const next = (index + direction + pillars.length) % pillars.length;
    setPillar(pillars[next]);
  };

  return (
    <div className="bg-paper text-ink">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-b border-black/5 bg-white/90 py-3 shadow-[0_8px_30px_rgba(58,47,42,0.06)] backdrop-blur-xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="site-header">
            <a
              href="#top"
              className="site-brand min-w-0 leading-none text-ink"
              aria-label="Nikhil Shaw, Client Solutions Manager — back to top"
            >
              <span
                className={`site-brand-name block font-bold tracking-tight transition-all duration-300 ${
                  scrolled ? "is-compact" : ""
                }`}
              >
                Nikhil Shaw
              </span>
              <span className="site-brand-role mt-1 block font-medium tracking-wide text-ink-soft">
                Client Solutions Manager
              </span>
            </a>

            <nav className="nav-cluster site-nav" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="site-header-end">
              <button
                type="button"
                className="site-menu-toggle"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
              </button>
              <a href="#connect" className="pill site-cta" onClick={() => setMenuOpen(false)}>
                Let’s connect
              </a>
            </div>
          </div>

          <nav
            id="mobile-nav"
            className={`site-mobile-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Mobile"
            hidden={!menuOpen}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#connect" className="site-mobile-connect" onClick={() => setMenuOpen(false)}>
              Let’s connect
            </a>
          </nav>
        </div>
      </header>

      <main id="content">
        <section id="top" className="relative min-h-[100svh] overflow-hidden">
          <Photo
            src={images.clouds}
            alt=""
            eager
            width={2400}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky/20 via-transparent to-white" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] items-end px-5 pb-20 pt-40 sm:items-center sm:px-8 sm:pt-36 lg:px-10">
            <div
              className="hero-stage max-w-[820px]"
              style={{
                transform: `translateY(${heroMotion.y}px)`,
                opacity: heroMotion.opacity,
              }}
            >
              <article className="hero-card">
                <h1 className="hero-title">
                  Curious about customers.
                  <br />
                  Serious about marketing.
                </h1>
                <p className="eyebrow mt-6 text-ink-soft">Apr 2026 — Present</p>
                <p className="hero-company">{site.company}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-8 rounded-t-[40px] bg-white px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-[680px] text-[1.35rem] leading-snug text-ink-soft md:text-[1.7rem]">
              Almost six months into my journey at Aisles &amp; Shelves — and I
              realised I’ve learned far more outside a job description than inside one.
            </p>
            <a href="#work" className="pill pill-solid shrink-0">
              Scroll to see what changed →
            </a>
          </div>
        </section>

        <section className="px-3 pb-6 sm:px-4">
          <Reveal className="photo-frame relative min-h-[78vh]">
            <Photo
              src={images.skyPortrait}
              alt="Open ground at first light — where field marketing actually happens"
              className="absolute inset-0 h-full w-full object-cover"
              width={2000}
              height={1400}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
            <div className="relative flex min-h-[78vh] max-w-[620px] flex-col justify-start px-6 py-10 text-white sm:px-10 sm:py-14">
              <p className="eyebrow text-white/85">Six months on the ground</p>
              <p className="display mt-4 text-[clamp(2.3rem,5vw,4.4rem)]">
                6 Months.
                <br />
                A lot more than
                <br />
                I expected.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="about" className="section-anchor px-5 py-16 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-[900px]">
            <p className="eyebrow">About</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              I’m Nikhil Shaw, working as a Client Solutions Manager at Aisles
              &amp; Shelves.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft">
              I’ve done a PGDM in Retail Management from WeSchool, Mumbai. I work
              across retail merchandising, consumer sampling, rural activation,
              field operations, and client servicing.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">
              Almost six months into my journey at Aisles &amp; Shelves — and I
              realised I’ve learned far more outside a job description than inside one.
            </p>
            <h3 className="display mt-12 text-[clamp(1.8rem,3.4vw,2.8rem)]">
              I thought I was joining a marketing role.
              <br />
              Six months later, I realised the job was much bigger.
            </h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Marketing",
                "Operations",
                "People management",
                "Client servicing",
                "Problem solving",
                "Creative Thinking",
              ].map((tag) => (
                <span key={tag} className="pill pill-solid">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-[620px] text-xl leading-relaxed text-ink-soft">
              It was part marketing. Part operations. Part problem-solving. Part
              people management. Part client servicing. The work sat between desk
              plans and on-ground retail execution — and a lot of learning on the go.
            </p>
            <div className="mt-10">
              <a href="#connect" className="pill pill-solid">
                Know more about me →
              </a>
            </div>
          </Reveal>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex justify-center">
              <div
                className="nav-cluster max-w-full overflow-x-auto"
                role="tablist"
                aria-label="On-ground marketing work"
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    selectPillar(1);
                  }
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    selectPillar(-1);
                  }
                }}
              >
                {pillars.map((item) => (
                  <button
                    key={item.id}
                    id={`tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={pillar.id === item.id}
                    aria-controls="work-panel"
                    data-active={pillar.id === item.id}
                    tabIndex={pillar.id === item.id ? 0 : -1}
                    onClick={() => setPillar(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              id="work-panel"
              role="tabpanel"
              aria-labelledby={`tab-${pillar.id}`}
              className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="photo-frame aspect-[16/11]">
                <Photo
                  src={pillar.image}
                  alt={pillar.alt}
                  className="h-full w-full object-cover"
                  width={1800}
                  height={1200}
                />
              </div>
              <div>
                <p className="eyebrow">{pillar.title}</p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">
                  {pillar.body}
                </h2>
                <blockquote className="glass mt-8 max-w-[460px] p-5 text-lg leading-snug text-ink-soft">
                  “{pillar.quote}”
                </blockquote>
                {"extraQuote" in pillar && pillar.extraQuote ? (
                  <blockquote className="glass mt-3 max-w-[460px] p-5 text-lg leading-snug text-ink-soft">
                    “{pillar.extraQuote}”
                  </blockquote>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 py-6 sm:px-4" aria-hidden="true">
          <div className="photo-frame relative flex min-h-[52vh] items-center justify-center overflow-hidden">
            <Photo
              src={images.cloudsSoft}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              width={2400}
              height={1600}
            />
            <p className="relative display text-[clamp(2.4rem,6vw,5rem)] text-ink">
              The work
            </p>
          </div>
        </section>

        <section id="work" className="section-anchor px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)] text-ink-soft">
              What six months of marketing execution actually looked like
            </h2>
            <p className="mt-4 max-w-[680px] text-lg text-ink-soft">
              Retail merchandising, consumer sampling, rural activation, field
              operations, client management, and process reporting — week after week,
              from store aisles to smaller towns.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {work.map((item) => (
                <Reveal key={item.n} className="soft-card p-6 sm:p-8">
                  <p className="text-sm text-ink-muted">{item.n}</p>
                  <h3 className="display mt-4 text-[1.85rem] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{item.body}</p>
                  <p className="mt-6 text-[1.05rem] leading-snug text-ink">
                    “{item.quote}”
                  </p>
                  {"extraQuote" in item && item.extraQuote ? (
                    <p className="mt-3 text-[1.05rem] leading-snug text-ink">
                      “{item.extraQuote}”
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-6 sm:px-4" aria-hidden="true">
          <div className="photo-frame relative flex min-h-[52vh] items-center justify-center overflow-hidden">
            <Photo
              src={images.clouds}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              width={2400}
              height={1600}
            />
            <p className="relative display text-[clamp(2.4rem,6vw,5rem)] text-ink">
              The learning
            </p>
          </div>
        </section>

        <section id="learning" className="section-anchor px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="display text-[clamp(1.8rem,3vw,2.6rem)] text-ink-soft">
              The learning curves behind on-ground execution
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {lessons.map((item) => (
                <Reveal key={item.n} className="soft-card min-h-[240px] p-6 sm:p-8">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm text-ink-muted">
                    {item.n}
                  </div>
                  <h3 className="display text-[1.55rem] leading-tight">{item.title}</h3>
                  <p className="mt-3 text-ink-soft">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-6 sm:px-4">
          <Reveal className="photo-frame relative min-h-[78vh]">
            <Photo
              src={images.morning}
              alt="On the ground with the field team during rural and retail execution"
              className="absolute inset-0 h-full w-full object-cover"
              width={2000}
              height={1400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="relative flex min-h-[78vh] flex-col justify-end px-6 py-10 text-white sm:px-10 sm:py-14">
              <p className="eyebrow text-white/85">From desk to ground</p>
              <h2 className="display mt-4 max-w-[720px] text-[clamp(2.1rem,4.4vw,3.8rem)]">
                Marketing doesn’t end when the presentation ends. That’s often
                where the real work begins.
              </h2>
            </div>
          </Reveal>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Off the job description</p>
                <h2 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)]">
                  Learning from the Journey so far
                </h2>
              </div>
              <p className="hidden text-ink-muted sm:block">Swipe →</p>
            </div>
            <div className="h-scroll mt-8" aria-label="Unexpected lessons from field work" tabIndex={0}>
              {unexpected.map((line, index) => (
                <article
                  key={line}
                  className="soft-card w-[min(86vw,360px)] shrink-0 p-7"
                >
                  <p className="text-sm text-ink-muted">0{index + 1}</p>
                  <p className="display mt-6 text-[1.45rem] leading-snug">{line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="numbers" className="section-anchor px-5 py-10 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">
              The numbers tell one story.
              <br />
              The experience tells another.
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-[1400px] gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={stat.value} className="soft-card px-6 py-10 text-center">
                <p className="display text-[clamp(3rem,6vw,4.6rem)]">{stat.value}</p>
                <p className="mx-auto mt-3 max-w-[220px] text-ink-soft">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[560px] text-center text-lg text-ink-soft">
            The numbers show scale across outlets, cities, field teams and retail
            environments. The real takeaway was learning how to operate at that scale.
          </p>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
            <Reveal className="photo-frame aspect-[4/5]">
              <Photo
                src={images.stock}
                alt="Field reporting and stock notes — turning on-ground observations into structured information"
                className="h-full w-full object-cover"
                width={1600}
                height={2000}
              />
            </Reveal>
            <Reveal>
              <p className="eyebrow">Still figuring things out</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4vw,3.6rem)]">
                Six months isn’t long enough to have all the answers.
              </h2>
              <p className="mt-5 text-xl text-ink-soft">
                But it is long enough to know what questions are worth asking about
                consumer experience, execution, and client confidence.
              </p>
              <ul className="mt-8 space-y-4 text-lg text-ink">
                {questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="px-3 pb-6 sm:px-4">
          <Reveal className="photo-frame relative min-h-[82vh]">
            <Photo
              src={images.dusk}
              alt="Field team on a market street during Aisles & Shelves on-ground execution"
              className="absolute inset-0 h-full w-full object-cover"
              width={2000}
              height={1400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
            <div className="relative flex min-h-[82vh] flex-col justify-end px-6 py-10 text-white sm:px-10 sm:py-14">
              <h2 className="display max-w-[760px] text-[clamp(2.4rem,5.4vw,4.6rem)]">
                6 months down.
                <br />
                Just getting started.
              </h2>
              <p className="mt-6 max-w-[560px] text-lg text-white/85">
                Grateful for the people, the chaos, the learning curves, the
                uncomfortable problems and the opportunities to figure things out
                along the way.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer id="connect" className="section-anchor px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-[clamp(2.4rem,5vw,4.2rem)]">Here’s to the next chapter.</p>
            <h2 className="mt-4 text-xl font-semibold">Nikhil Shaw</h2>
            <p className="text-ink-soft">
              Client Solutions Manager · Aisles &amp; Shelves
            </p>
          </div>
          <a
            className="pill pill-solid"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find Nikhil Shaw, Client Solutions Manager at Aisles & Shelves, on LinkedIn"
          >
            Let’s connect →
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-[1400px]">
          <div className="photo-frame aspect-[21/9] max-h-[360px]">
            <Photo
              src={images.team}
              alt="The Aisles & Shelves team in the office — the people behind the execution"
              className="h-full w-full object-cover"
              width={1600}
              height={700}
            />
          </div>
          <p className="mt-4 text-ink-muted">The people who made most of it happen.</p>
          <p className="mt-8 text-sm text-ink-muted">
            © {new Date().getFullYear()} Nikhil Shaw. Client Solutions Manager at
            Aisles &amp; Shelves.
          </p>
        </div>
      </footer>
    </div>
  );
}
