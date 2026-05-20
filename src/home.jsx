// ===== Home page with 3 hero variations =====

function HeroEditorial({ onNav }) {
  return (
    <section className="vgo-section is-yellow" style={{ padding: "80px 0 96px", position: "relative", overflow: "hidden" }} data-screen-label="Hero Editorial">
      <div className="vgo-wrap-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div className="vgo-hero-tagrow">
              <span className="vgo-tag is-dark">Kuwait · est. 2018</span>
              <span className="vgo-tag">{VGO_STATS.machines} active machines</span>
              <span className="vgo-tag">{VGO_STATS.uptime} uptime</span>
            </div>
            <h1 className="vgo-display" style={{ color: "var(--vgo-ink)" }}>
              Vending,<br/>
              done <em style={{ fontFamily: "var(--vgo-font-serif)", fontStyle: "italic", fontWeight: 400 }}>properly.</em>
            </h1>
            <p className="vgo-lead" style={{ maxWidth: 540, marginTop: 32, color: "var(--vgo-ink)" }}>
              VGO designs, deploys and operates smart vending machines across Kuwait — for offices, hospitals, schools, malls, and industrial sites.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
                Request a machine <ArrowRight />
              </button>
              <button className="vgo-btn vgo-btn-outline" onClick={() => onNav("solutions")}>
                See the catalog
              </button>
            </div>
          </div>

          <div>
            <MachineRender3D height={560} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFullBleed({ onNav }) {
  return (
    <section style={{ background: "var(--vgo-yellow)", padding: "0", position: "relative", overflow: "hidden" }} data-screen-label="Hero Full-bleed">
      <div className="vgo-wrap-wide" style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="vgo-hero-tagrow">
          <span className="vgo-tag is-dark">Kuwait's vending operator</span>
        </div>
        <h1 className="vgo-display" style={{ color: "var(--vgo-ink)", maxWidth: 1100 }}>
          {VGO_STATS.machines} machines.<br/>
          {VGO_STATS.governorates} governorates.<br/>
          <span style={{ fontFamily: "var(--vgo-font-serif)", fontStyle: "italic", fontWeight: 400 }}>One operator.</span>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "end", margin: "40px 0 0" }}>
          <p className="vgo-lead" style={{ maxWidth: 560, color: "var(--vgo-ink)" }}>
            From the airport to the oilfield, from a hospital ward to a school cafeteria — we run the unattended retail layer for Kuwait's busiest spaces.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
              Partner with VGO <ArrowRight />
            </button>
            <button className="vgo-btn vgo-btn-outline" onClick={() => onNav("locations")}>
              Find a machine
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56, position: "relative", background: "var(--vgo-ink)", padding: "40px 0 0" }}>
        <MachineRender3D height={500} />
      </div>
    </section>
  );
}

function HeroTypeStack({ onNav }) {
  return (
    <section style={{ background: "var(--vgo-yellow)", padding: "72px 0 0", position: "relative", overflow: "hidden" }} data-screen-label="Hero Type-stack">
      <div className="vgo-wrap-wide">
        <div style={{ display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
          <span className="vgo-tag is-dark">A — Network</span>
          <span className="vgo-tag">B — Operations</span>
          <span className="vgo-tag">C — Service</span>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)", paddingTop: 24 }}>
          <h1 style={{ fontSize: "clamp(54px, 11vw, 168px)", lineHeight: 0.88, letterSpacing: "-0.045em", fontWeight: 600, color: "var(--vgo-ink)", margin: 0 }}>
            Hungry?
          </h1>
          <h1 style={{ fontSize: "clamp(54px, 11vw, 168px)", lineHeight: 0.88, letterSpacing: "-0.045em", fontWeight: 300, color: "var(--vgo-ink)", margin: "12px 0 0", fontStyle: "italic", fontFamily: "var(--vgo-font-serif)" }}>
            Thirsty?
          </h1>
          <h1 style={{ fontSize: "clamp(54px, 11vw, 168px)", lineHeight: 0.88, letterSpacing: "-0.045em", fontWeight: 600, color: "var(--vgo-ink)", margin: "12px 0 0" }}>
            We're 60 sec away.
          </h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 64, paddingBottom: 80, alignItems: "end" }}>
          <p className="vgo-lead" style={{ color: "var(--vgo-ink)", maxWidth: 380 }}>
            VGO is Kuwait's largest independent vending operator. Snacks, drinks, coffee, fresh food — operated end-to-end.
          </p>
          <div className="vgo-mono" style={{ fontSize: 13, color: "var(--vgo-ink)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            ↳ {VGO_STATS.machines} machines<br/>
            ↳ {VGO_STATS.years}+ years operating<br/>
            ↳ {VGO_STATS.uptime} uptime SLA
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
              Get a machine <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Logos row, what-we-do, stats, machines preview, locations preview, testimonial =====

function LogosRow() {
  const partners = ["KOC", "EQUATE", "KIB BANK", "MoH HOSPITAL", "AUM UNIVERSITY", "AVENUES MALL", "KFH", "ZAIN HQ", "Q8 PETROL", "MoE SCHOOLS"];
  return <Marquee items={partners} />;
}

function WhatWeDo({ onNav }) {
  const items = [
    { num: "01", title: "We design the placement", body: "Foot-traffic survey, planogram fit, footprint + electrical spec. We don't ship until the spot works." },
    { num: "02", title: "We deploy & connect", body: "Installation crew, cashless terminal, 4G telemetry. Live within 5 business days of contract." },
    { num: "03", title: "We operate it for you", body: "Restocking, cleaning, cash collection, planogram tuning. You see uptime; we handle the work." },
    { num: "04", title: "We share the data", body: "Top-sellers by hour, waste reports, footfall conversion. Decisions, not just dashboards." },
  ];
  return (
    <section className="vgo-section">
      <div className="vgo-wrap-wide">
        <SectionHead
          eyebrow="What we do"
          title="A full-service vending layer for Kuwait's busiest spaces."
          intro="VGO isn't a machine vendor — we run the unattended-retail surface end to end so your team never sees a vacant slot or an out-of-service screen."
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24 }}>
          {items.map(it => (
            <div key={it.num} style={{ paddingTop: 32, borderTop: "1px solid var(--vgo-ink)" }}>
              <div className="vgo-mono" style={{ fontSize: 13, letterSpacing: "0.08em", marginBottom: 28 }}>{it.num}</div>
              <h3 className="vgo-h3" style={{ marginBottom: 14 }}>{it.title}</h3>
              <p className="vgo-body" style={{ color: "var(--vgo-mute)" }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBlock() {
  const stats = [
    { num: VGO_STATS.machines, label: "Machines deployed", sub: "Live across Kuwait, 24/7" },
    { num: VGO_STATS.governorates, label: "Governorates served", sub: "All of Kuwait, edge to edge" },
    { num: VGO_STATS.uptime, label: "Average uptime", sub: "Telemetry-monitored SLA" },
    { num: VGO_STATS.partners, label: "Enterprise partners", sub: "Energy · Banking · Healthcare" },
  ];
  return (
    <section className="vgo-section is-ink">
      <div className="vgo-wrap-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", paddingBottom: 80 }}>
          <span className="vgo-eyebrow vgo-eyebrow-dot">By the numbers</span>
          <h2 className="vgo-h2">
            We measure what we ship. <span style={{ color: "var(--vgo-yellow)" }}>Then we ship it again, better.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
              <div className="vgo-stat-num" style={{ color: "var(--vgo-yellow)" }}>{s.num}</div>
              <div className="vgo-stat-label" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MachinesPreview({ onNav }) {
  return (
    <section className="vgo-section is-cream">
      <div className="vgo-wrap-wide">
        <SectionHead
          eyebrow="Solutions"
          title="Every machine type, on one operator."
          intro="From bean-to-cup espresso to chilled fresh food and bespoke locker pickups — VGO operates the full vending stack under one SLA."
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {VGO_MACHINES.slice(0, 6).map((m, i) => (
            <div className="vgo-card" key={m.id}>
              <MachineRealPhoto
                src={m.photo}
                height={280}
                badge={m.tag}
                style={{ borderRadius: 0, borderBottom: "1px solid var(--vgo-line)" }}
              />
              <div style={{ padding: 24 }}>
                <span className="vgo-tag" style={{ marginBottom: 12 }}>{m.tag}</span>
                <h3 className="vgo-h3" style={{ marginTop: 14, marginBottom: 10 }}>{m.name}</h3>
                <p className="vgo-body" style={{ color: "var(--vgo-mute)", marginBottom: 18 }}>{m.desc}</p>
                <div style={{ display: "flex", gap: 16, fontFamily: "var(--vgo-font-mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--vgo-mute)" }}>
                  <span>{m.capacity}</span>
                  <span>·</span>
                  <span>{m.footprint}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("solutions")}>
            See the full catalog <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function LocationsPreview({ onNav }) {
  return (
    <section className="vgo-section">
      <div className="vgo-wrap-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
          <div>
            <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 18 }}>The VGO network</span>
            <h2 className="vgo-h2" style={{ marginBottom: 24 }}>
              {VGO_STATS.machines} machines, all six governorates of Kuwait.
            </h2>
            <p className="vgo-lead" style={{ marginBottom: 28 }}>
              Our densest cluster runs through Kuwait City, Salmiya and Hawalli. The Ahmadi corridor covers the oilfield and refineries. Jahra and Farwaniya catch the airport, the industrial strip and the schools.
            </p>
            <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("locations")}>
              Open the map <ArrowRight />
            </button>
          </div>
          <div>
            <KuwaitMapPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function KuwaitMapPreview() {
  return (
    <div style={{ background: "var(--vgo-white)", border: "1px solid var(--vgo-line-strong)", borderRadius: 12, overflow: "hidden", position: "relative" }}>
      {/* Header strip */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid var(--vgo-line)", background: "var(--vgo-cream)" }}>
        <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-ink)", textTransform: "uppercase" }}>
          State of Kuwait · machine network
        </div>
        <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)", textTransform: "uppercase" }}>
          {VGO_STATS.machines} live
        </div>
      </div>

      {/* Embed */}
      <div style={{ position: "relative", aspectRatio: "1.15 / 1" }}>
        <iframe
          title="VGO machine network · Kuwait"
          src="https://maps.google.com/maps?q=Kuwait&z=9&output=embed"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Yellow badge overlay */}
        <div style={{
          position: "absolute", top: 16, left: 16, zIndex: 2,
          background: "var(--vgo-yellow)", border: "1px solid var(--vgo-ink)",
          padding: "8px 12px", borderRadius: 4,
          fontFamily: "var(--vgo-font-mono)", fontSize: 11, letterSpacing: "0.08em",
          textTransform: "uppercase", color: "var(--vgo-ink)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          pointerEvents: "none",
        }}>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999, background: "var(--vgo-ink)", marginRight: 8, verticalAlign: "middle" }}></span>
          All Kuwait
        </div>
      </div>

      {/* Governorate counts strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", borderTop: "1px solid var(--vgo-line)" }}>
        {VGO_LOCATIONS.map((loc, i) => (
          <div key={loc.id} style={{
            padding: "14px 12px",
            borderLeft: i === 0 ? "none" : "1px solid var(--vgo-line)",
            background: "var(--vgo-white)",
          }}>
            <div className="vgo-mono" style={{ fontSize: 9, letterSpacing: "0.06em", color: "var(--vgo-mute)", textTransform: "uppercase", marginBottom: 4 }}>
              {loc.name}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>{loc.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <section className="vgo-section" style={{ background: "var(--vgo-cream)" }}>
      <div className="vgo-wrap" style={{ maxWidth: 1080, textAlign: "center" }}>
        <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 24 }}>Why VGO</span>
        <blockquote className="vgo-serif-quote" style={{ margin: 0 }}>
          "We replaced four separate vending vendors with one VGO contract. Uptime went from <span style={{ background: "var(--vgo-yellow)", padding: "0 8px" }}>72%</span> to <span style={{ background: "var(--vgo-yellow)", padding: "0 8px" }}>99.4%</span> in a quarter — and our staff actually use the machines now."
        </blockquote>
        <div style={{ marginTop: 36, display: "inline-flex", gap: 20, alignItems: "center" }}>
          <Placeholder label="logo" height={48} style={{ width: 48, borderRadius: 999 }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 600 }}>Facilities Director</div>
            <div style={{ fontSize: 14, color: "var(--vgo-mute)" }}>Enterprise client · Kuwait City (anon.)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home({ onNav, heroVariant }) {
  const Hero = heroVariant === "fullbleed" ? HeroFullBleed
             : heroVariant === "typestack" ? HeroTypeStack
             : HeroEditorial;
  return (
    <div className="vgo-page" data-screen-label="Home">
      <Hero onNav={onNav} />
      <LogosRow />
      <WhatWeDo onNav={onNav} />
      <StatsBlock />
      <MachinesPreview onNav={onNav} />
      <LocationsPreview onNav={onNav} />
      <Testimonial />
      <CTAStrip onNav={onNav} />
    </div>
  );
}

Object.assign(window, { Home });
