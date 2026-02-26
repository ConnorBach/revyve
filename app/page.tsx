const examples = [
  { label: "Missed-call text + booking link" },
  { label: "Daily schedule summary to Slack / email" },
  { label: "Lead follow-up until booked" },
  { label: "Invoice reminders + failed payment nudge" },
  { label: "Review request after job completion" },
  { label: "Weekly ops dashboard (sales, jobs, cancellations)" },
];

const integrations = [
  "Booking Koala",
  "Slack",
  "Google",
  "Stripe",
  "QuickBooks",
  "Shopify",
  "Notion",
  "Airtable",
  "Gmail",
  "Calendar",
];

export default function Home() {
  return (
    <div className="min-h-svh flex flex-col justify-between px-6 py-8 max-w-5xl mx-auto lg:py-10">
      {/* ── Hero ──────────────────────────────────────── */}
      <header className="text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Revyve
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          AI automations that save you
          <br className="hidden sm:block" /> hours every week
        </h1>
        <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We build and hand off custom automations for your business&mdash;no
          Zapier spaghetti, no ongoing dependency. Fixed scope, secure by
          default, you own everything.
        </p>
      </header>

      {/* ── Middle content ────────────────────────────── */}
      <main className="flex flex-col gap-8 mt-8 lg:mt-10">
        {/* Benefits */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm sm:text-base text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            <span>
              <strong className="text-zinc-100">Fast setup.</strong> Most
              automations live in 1&ndash;2 weeks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            <span>
              <strong className="text-zinc-100">Secure by default.</strong>{" "}
              Least-privilege access, audit-friendly.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            <span>
              <strong className="text-zinc-100">You keep it.</strong> Full
              ownership + docs at handoff.
            </span>
          </li>
        </ul>

        {/* Example automations */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 text-center mb-3">
            Example automations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {examples.map((ex) => (
              <div
                key={ex.label}
                className="rounded-lg bg-zinc-850 border border-zinc-800 px-4 py-3 text-sm text-zinc-300 leading-snug"
              >
                {ex.label}
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="text-center">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
            Works with
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-full border border-zinc-700 bg-zinc-850 px-3 py-1 text-xs text-zinc-400"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* Process + Pricing (compact) */}
        <p className="text-center text-sm text-zinc-400">
          <span className="text-zinc-300 font-medium">Process:</span>{" "}
          Discovery &rarr; Build &rarr; Handoff (docs + walkthrough)
        </p>

        {/* Trust microcopy */}
        <p className="text-center text-xs text-zinc-500 leading-relaxed max-w-xl mx-auto">
          Least-privilege access only. Every integration is audit-friendly and
          documented. You retain full ownership of all automations, credentials,
          and data.
        </p>
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="mt-8 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
        <span>&copy; {new Date().getFullYear()} Revyve</span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </div>
  );
}
