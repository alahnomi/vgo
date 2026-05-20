

/* ============ src/about.jsx ============ */
// ===== About / Our Story =====

function About({ onNav }) {
  const timeline = [
    { year: "2018", title: "Founded in Kuwait City", body: "Two machines in an office tower in Sharq. The thesis: vending in Kuwait deserves an operator, not a vendor." },
    { year: "2020", title: "First enterprise contract", body: "Multi-site rollout across an energy-sector campus. Telemetry-first ops becomes the standard playbook." },
    { year: "2022", title: "100th machine live", body: "Network crosses 100 active machines, covering all six governorates of Kuwait." },
    { year: "2024", title: "Fresh food + barista launch", body: "HACCP-grade chilled fresh-food machines and bean-to-cup specialty coffee added to the catalog." },
    { year: "2026", title: "130+ machines, growing", body: "Largest independent vending operator in Kuwait. Eyes on the GCC corridor." },
  ];

  return (
    <div className="vgo-page" data-screen-label="About">
      {/* Hero */}
      <section className="vgo-section is-yellow" style={{ padding: "96px 0 120px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>About VGO</span>
          <h1 className="vgo-h1" style={{ maxWidth: 1100 }}>
            We're a Kuwaiti operator, not a machine reseller.<br/>
            <span style={{ fontFamily: "var(--vgo-font-serif)", fontStyle: "italic", fontWeight: 400 }}>That changes the maths.</span>
          </h1>
          <p className="vgo-lead" style={{ maxWidth: 720, marginTop: 32, color: "var(--vgo-ink)" }}>
            Most vending companies sell you the box and disappear. VGO owns the machine, the route, the data, and the SLA — so every empty slot is our problem to solve, not yours.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
            <div>
              <span className="vgo-eyebrow vgo-eyebrow-dot">Our thesis</span>
            </div>
            <div>
              <p style={{ fontSize: 28, lineHeight: 1.35, letterSpacing: "-0.015em", marginTop: 0 }}>
                A vending machine isn't an appliance. It's a 24/7 retail surface in your building — and it deserves the same product thinking as a shop floor.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--vgo-mute)", marginTop: 32 }}>
                We measure footfall against conversion. We tune planograms by daypart. We replace SKUs that don't earn their shelf. We treat the operations team as a product team, because in Kuwait, our customers — your staff, your students, your patients — deserve a vending experience that actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="vgo-divider" />

      {/* Principles */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="Operating principles"
            title="Four rules that run every machine."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--vgo-ink)" }}>
            {[
              { title: "Telemetry first, intuition second.", body: "Every machine reports live. If the data says swap the bottled water for sparkling, we swap it — regardless of the head office's snack-bar nostalgia." },
              { title: "Empty is a failure mode.", body: "An empty slot is an outage. We restock against forecast, not against route convenience. Our average restock-to-empty gap is 11 hours." },
              { title: "Cashless by default.", body: "100% of VGO machines accept K-Net, Apple Pay, Google Pay and corporate badge tap. Cash is supported, but it isn't the path." },
              { title: "We answer the phone.", body: "Service tickets are owned by a named engineer, not a queue. Median resolution time is under 4 hours, anywhere in Kuwait." },
            ].map((p, i) => (
              <div key={i} style={{
                padding: 40,
                borderRight: i % 2 === 0 ? "1px solid var(--vgo-ink)" : "none",
                borderBottom: i < 2 ? "1px solid var(--vgo-ink)" : "none",
              }}>
                <div className="vgo-mono" style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--vgo-mute)", marginBottom: 16 }}>
                  PRINCIPLE 0{i+1}
                </div>
                <h3 className="vgo-h3" style={{ marginBottom: 14 }}>{p.title}</h3>
                <p className="vgo-body" style={{ color: "var(--vgo-mute)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="vgo-section is-cream">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="Our story"
            title="From two machines in Sharq to all of Kuwait."
          />
          <div style={{ display: "grid", gap: 0 }}>
            {timeline.map((t, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr 1fr",
                gap: 48,
                padding: "32px 0",
                borderTop: "1px solid var(--vgo-line-strong)",
                borderBottom: i === timeline.length - 1 ? "1px solid var(--vgo-line-strong)" : "none",
              }}>
                <div className="vgo-mono" style={{ fontSize: 14, letterSpacing: "0.06em", color: "var(--vgo-ink)", fontWeight: 500 }}>
                  {t.year}
                </div>
                <h3 className="vgo-h3">{t.title}</h3>
                <p className="vgo-body" style={{ color: "var(--vgo-mute)", maxWidth: 480 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ height: 460, borderRadius: "var(--vgo-radius)", overflow: "hidden", border: "1px solid var(--vgo-line)" }}>
                <img src="assets/qibla-pearl-tower.jpg" alt="Qibla Pearl Tower 2, Kuwait City" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            <div>
              <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>Headquarters</span>
              <h2 className="vgo-h2" style={{ marginBottom: 24 }}>
                Run from Kuwait City. <span style={{ fontFamily: "var(--vgo-font-serif)", fontStyle: "italic", fontWeight: 400 }}>For Kuwait.</span>
              </h2>
              <p className="vgo-lead" style={{ marginBottom: 28 }}>
                Our HQ sits on the 16th floor of Qibla Pearl Tower 2 in the CBD — five minutes from the warehouse, ten minutes from most of our flagship sites. We're a small, dense team. Every email lands on a real desk.
              </p>
              <div className="vgo-mono" style={{ fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--vgo-ink)" }}>
                Qibla Pearl Tower 2 · 16F<br/>
                Kuwait City, Kuwait<br/>
                hello@vgokw.com
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip onNav={onNav} />
    </div>
  );
}

Object.assign(window, { About });


/* ============ src/solutions.jsx ============ */
// ===== Solutions / Machine Types =====

function Solutions({ onNav }) {
  const [selected, setSelected] = React.useState(VGO_MACHINES[0].id);
  const machine = VGO_MACHINES.find(m => m.id === selected);

  return (
    <div className="vgo-page" data-screen-label="Solutions">
      {/* Hero */}
      <section className="vgo-section is-yellow" style={{ padding: "96px 0 80px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>Machine catalog</span>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 className="vgo-h1">
              Seven categories. One operations team.
            </h1>
            <p className="vgo-lead" style={{ color: "var(--vgo-ink)" }}>
              Pick by use case — staff break room, hospital ward, public transit, oilfield, school cafeteria. Every machine ships with cashless payment, 4G telemetry and a same-day service SLA.
            </p>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section style={{ background: "var(--vgo-cream)", borderTop: "1px solid var(--vgo-line-strong)", borderBottom: "1px solid var(--vgo-line-strong)" }}>
        <div className="vgo-wrap-wide" style={{ padding: "24px 32px", display: "flex", gap: 8, overflowX: "auto", flexWrap: "wrap" }}>
          {VGO_MACHINES.map(m => (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={"vgo-nav-link" + (selected === m.id ? " is-active" : "")}
              style={{ whiteSpace: "nowrap", fontSize: 14 }}>
              {m.name}
            </button>
          ))}
        </div>
      </section>

      {/* Detail view */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <MachineRealPhoto src={machine.photo} height={520} badge={machine.tag} style={{ borderRadius: 8 }} />
            </div>
            <div>
              <span className="vgo-tag is-dark" style={{ marginBottom: 20 }}>{machine.tag}</span>
              <h2 className="vgo-h2" style={{ marginTop: 18, marginBottom: 18 }}>{machine.name}</h2>
              <p className="vgo-lead" style={{ marginBottom: 32 }}>{machine.desc}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
                <div style={{ paddingTop: 20, borderTop: "1px solid var(--vgo-line-strong)" }}>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)", marginBottom: 6, textTransform: "uppercase" }}>Capacity</div>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>{machine.capacity}</div>
                </div>
                <div style={{ paddingTop: 20, borderTop: "1px solid var(--vgo-line-strong)" }}>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)", marginBottom: 6, textTransform: "uppercase" }}>Footprint</div>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>{machine.footprint}</div>
                </div>
                <div style={{ paddingTop: 20, borderTop: "1px solid var(--vgo-line-strong)" }}>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)", marginBottom: 6, textTransform: "uppercase" }}>Power</div>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>220V · single phase</div>
                </div>
                <div style={{ paddingTop: 20, borderTop: "1px solid var(--vgo-line-strong)" }}>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)", marginBottom: 6, textTransform: "uppercase" }}>Payments</div>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>K-Net · Tap · Cash</div>
                </div>
              </div>

              <h4 className="vgo-mono" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-ink)", marginBottom: 14 }}>
                ↳ Best for
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {bestForList(machine.id).map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ width: 18, height: 18, borderRadius: 999, background: "var(--vgo-yellow)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="var(--vgo-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span style={{ fontSize: 16 }}>{b}</span>
                  </li>
                ))}
              </ul>

              <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
                Request this machine <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs comparison */}
      <section className="vgo-section is-cream">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="Compare"
            title="The full catalog, side-by-side."
          />
          <div style={{ background: "var(--vgo-white)", border: "1px solid var(--vgo-line-strong)", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", padding: "18px 24px", background: "var(--vgo-ink)", color: "var(--vgo-yellow)", fontFamily: "var(--vgo-font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <span>Machine</span>
              <span>Category</span>
              <span>Capacity</span>
              <span>Footprint</span>
              <span>Best for</span>
            </div>
            {VGO_MACHINES.map((m, i) => (
              <div key={m.id} onClick={() => setSelected(m.id)} style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
                padding: "20px 24px",
                borderTop: "1px solid var(--vgo-line)",
                cursor: "pointer",
                background: selected === m.id ? "var(--vgo-yellow-soft)" : "transparent",
                transition: "background 0.15s ease",
              }}>
                <span style={{ fontWeight: 600 }}>{m.name}</span>
                <span style={{ fontFamily: "var(--vgo-font-mono)", fontSize: 12, letterSpacing: "0.06em" }}>{m.tag}</span>
                <span style={{ fontSize: 14 }}>{m.capacity}</span>
                <span style={{ fontSize: 14 }}>{m.footprint}</span>
                <span style={{ fontSize: 14, color: "var(--vgo-mute)" }}>{shortBestFor(m.id)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service tier */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="Service tiers"
            title="One SLA, three deployment models."
            intro="All VGO machines are owned, operated and serviced by us — what changes is how you pay and how data flows back to your team."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { name: "Standard", priceLabel: "Free placement", body: "VGO supplies, installs, restocks and services. No CapEx, no fees — we earn on retail margin.", best: "Offices, lobbies, lounges, retail", emphasis: false },
              { name: "Enterprise", priceLabel: "Custom contract", body: "Multi-site rollouts. Branded panel wraps. Daily sales dashboard delivered to your facilities lead.", best: "Energy, banking, healthcare", emphasis: true },
              { name: "Subsidised", priceLabel: "Per-employee model", body: "You sponsor a portion of pricing for staff. Cashless badge tap; monthly invoicing.", best: "Schools, hospitals, NGOs", emphasis: false },
            ].map(tier => (
              <div key={tier.name} style={{
                padding: 36,
                borderRadius: 12,
                background: tier.emphasis ? "var(--vgo-ink)" : "var(--vgo-white)",
                color: tier.emphasis ? "var(--vgo-white)" : "var(--vgo-ink)",
                border: tier.emphasis ? "1px solid var(--vgo-ink)" : "1px solid var(--vgo-line)",
                display: "flex", flexDirection: "column", gap: 18,
              }}>
                <div className="vgo-mono" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: tier.emphasis ? "var(--vgo-yellow)" : "var(--vgo-mute)" }}>
                  {tier.name}
                </div>
                <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em" }}>{tier.priceLabel}</div>
                <p style={{ fontSize: 16, lineHeight: 1.5, color: tier.emphasis ? "rgba(255,255,255,0.78)" : "var(--vgo-mute)", margin: 0 }}>{tier.body}</p>
                <div style={{ paddingTop: 18, borderTop: tier.emphasis ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--vgo-line)" }}>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: tier.emphasis ? "rgba(255,255,255,0.5)" : "var(--vgo-mute)", marginBottom: 6 }}>
                    Best for
                  </div>
                  <div style={{ fontSize: 14 }}>{tier.best}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip onNav={onNav} />
    </div>
  );
}

function bestForList(id) {
  const map = {
    snacks: ["Office break rooms (10–500 staff)", "School & university common areas", "Hospital waiting areas", "Hotel & co-working lobbies"],
    drinks: ["Gyms, sports clubs, padel courts", "Industrial canteens & oilfields", "Outdoor events & summer venues", "Petrol stations & retail forecourts"],
    coffee: ["Premium offices & boutique hotels", "Government waiting halls", "Co-working spaces", "Hospital staff lounges"],
    fresh: ["Hospitals (24/7 meal access)", "Airport crew zones", "University campuses", "Industrial sites with shift work"],
    combo: ["Small offices (<50 staff)", "Single-machine deployments", "Petrol station shops", "Compact retail floors"],
    smart: ["Premium retail & flagships", "Branded sponsor activations", "Loyalty-driven offices", "Public-facing CBD lobbies"],
    custom: ["PPE dispensing on oilfields", "Locker pickup for e-commerce", "Branded merch (hotels, sports clubs)", "Pharmacy after-hours dispensing"],
  };
  return map[id] || [];
}
function shortBestFor(id) {
  const map = {
    snacks: "Offices, schools, lobbies",
    drinks: "Gyms, industrial, transit",
    coffee: "Premium offices, hotels",
    fresh: "Hospitals, airports, shifts",
    combo: "Small sites, single-unit",
    smart: "Flagship, branded activations",
    custom: "PPE, lockers, merch",
  };
  return map[id] || "";
}

Object.assign(window, { Solutions });


/* ============ src/locations.jsx ============ */
// ===== Locations / Find a Machine — interactive Kuwait map =====

// Sample machine pins distributed by governorate
const VGO_PINS = [
  // Capital (Al Asimah)
  { id: "p1", gov: "capital", name: "Qibla Pearl Tower 2", category: "Office", type: "Combo", x: 42, y: 39 },
  { id: "p2", gov: "capital", name: "Sharq Mall", category: "Mall", type: "Snacks + Drinks", x: 46, y: 36 },
  { id: "p3", gov: "capital", name: "Crowne Plaza Lobby", category: "Hotel", type: "Coffee", x: 38, y: 42 },
  { id: "p4", gov: "capital", name: "Ministry of Health HQ", category: "Government", type: "Snacks", x: 41, y: 45 },
  { id: "p5", gov: "capital", name: "KIB Tower", category: "Office", type: "Coffee", x: 45, y: 41 },
  // Hawalli
  { id: "p6", gov: "hawalli", name: "The Avenues Mall · Grand", category: "Mall", type: "Combo", x: 44, y: 56 },
  { id: "p7", gov: "hawalli", name: "Marina Mall Salmiya", category: "Mall", type: "Snacks + Drinks", x: 49, y: 53 },
  { id: "p8", gov: "hawalli", name: "Jabriya Indoor Padel", category: "Sports", type: "Drinks", x: 47, y: 58 },
  { id: "p9", gov: "hawalli", name: "Hawalli Co-op Plaza", category: "Retail", type: "Snacks", x: 45, y: 54 },
  // Farwaniya
  { id: "p10", gov: "farwaniya", name: "Kuwait International Airport · T4", category: "Transit", type: "Fresh Food", x: 33, y: 60 },
  { id: "p11", gov: "farwaniya", name: "Khaitan Industrial Strip", category: "Industrial", type: "Drinks", x: 35, y: 58 },
  { id: "p12", gov: "farwaniya", name: "Ardiya Warehouse Complex", category: "Logistics", type: "Snacks", x: 30, y: 62 },
  { id: "p13", gov: "farwaniya", name: "Farwaniya General Hospital", category: "Healthcare", type: "Fresh Food", x: 33, y: 56 },
  // Mubarak Al-Kabeer
  { id: "p14", gov: "mubarak", name: "Sabah Al-Salem Co-op", category: "Retail", type: "Snacks + Drinks", x: 39, y: 68 },
  { id: "p15", gov: "mubarak", name: "Adan Specialty Hospital", category: "Healthcare", type: "Fresh Food", x: 42, y: 70 },
  // Ahmadi
  { id: "p16", gov: "ahmadi", name: "KOC HQ Ahmadi", category: "Energy", type: "Smart", x: 30, y: 78 },
  { id: "p17", gov: "ahmadi", name: "EQUATE Petrochemicals", category: "Industrial", type: "PPE Dispenser", x: 27, y: 82 },
  { id: "p18", gov: "ahmadi", name: "Mangaf Marina Crescent", category: "Retail", type: "Combo", x: 35, y: 80 },
  { id: "p19", gov: "ahmadi", name: "Mahboula Plaza", category: "Retail", type: "Drinks", x: 38, y: 84 },
  { id: "p20", gov: "ahmadi", name: "Mina Al-Ahmadi Refinery", category: "Energy", type: "PPE Dispenser", x: 32, y: 88 },
  // Jahra
  { id: "p21", gov: "jahra", name: "Jahra Co-op Hypermarket", category: "Retail", type: "Snacks + Drinks", x: 22, y: 32 },
  { id: "p22", gov: "jahra", name: "Sulaibiya Industrial Zone", category: "Industrial", type: "Drinks", x: 28, y: 40 },
  { id: "p23", gov: "jahra", name: "AUM University Campus", category: "Education", type: "Combo", x: 20, y: 36 },
];

function Locations({ onNav }) {
  const [filter, setFilter] = React.useState("all");
  const [category, setCategory] = React.useState("all");
  const [selectedPin, setSelectedPin] = React.useState(null);
  const [query, setQuery] = React.useState("");

  const categories = ["all", ...Array.from(new Set(VGO_PINS.map(p => p.category)))];

  const filteredPins = VGO_PINS.filter(p => {
    if (filter !== "all" && p.gov !== filter) return false;
    if (category !== "all" && p.category !== category) return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const govCounts = {};
  VGO_LOCATIONS.forEach(l => { govCounts[l.id] = VGO_PINS.filter(p => p.gov === l.id).length; });

  return (
    <div className="vgo-page" data-screen-label="Locations">
      {/* Hero */}
      <section className="vgo-section is-yellow" style={{ padding: "80px 0 56px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 18 }}>Find a machine</span>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 className="vgo-h1">The VGO network — {VGO_STATS.machines} machines, live across Kuwait.</h1>
            <p className="vgo-lead" style={{ color: "var(--vgo-ink)" }}>
              Filter by governorate or location type. Click any pin to see what that machine carries and when it was last restocked.
            </p>
          </div>
        </div>
      </section>

      {/* Map + sidebar */}
      <section style={{ background: "var(--vgo-cream)", padding: "32px 0 96px" }}>
        <div className="vgo-wrap-wide" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 24 }}>
          {/* Sidebar */}
          <aside style={{ background: "var(--vgo-white)", border: "1px solid var(--vgo-line)", borderRadius: 12, padding: 24, height: "fit-content", position: "sticky", top: 96 }}>
            <h4 className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", margin: "0 0 14px" }}>Search</h4>
            <input
              className="vgo-input"
              placeholder="e.g. Avenues, Airport…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ marginBottom: 28 }}
            />

            <h4 className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", margin: "0 0 14px" }}>Governorate</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 28 }}>
              <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All Kuwait" count={VGO_PINS.length} />
              {VGO_LOCATIONS.map(l => (
                <FilterButton key={l.id} active={filter === l.id} onClick={() => setFilter(l.id)} label={l.name} count={govCounts[l.id]} />
              ))}
            </div>

            <h4 className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", margin: "0 0 14px" }}>Category</h4>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)} className="vgo-nav-link"
                  style={{
                    fontSize: 12, padding: "5px 12px",
                    background: category === c ? "var(--vgo-yellow)" : "var(--vgo-cream)",
                    border: "1px solid " + (category === c ? "var(--vgo-ink)" : "var(--vgo-line)"),
                    borderRadius: 999,
                  }}>
                  {c === "all" ? "All" : c}
                </button>
              ))}
            </div>
          </aside>

          {/* Map */}
          <div style={{ background: "var(--vgo-white)", border: "1px solid var(--vgo-line)", borderRadius: 12, overflow: "hidden", position: "relative" }}>
            <div style={{ padding: 24, borderBottom: "1px solid var(--vgo-line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Showing <span style={{ background: "var(--vgo-yellow)", padding: "2px 8px", color: "var(--vgo-ink)" }}>{filteredPins.length}</span> machines · State of Kuwait
              </div>
              <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--vgo-mute)" }}>
                LIVE · 4G TELEMETRY
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 0, minHeight: 600 }}>
              {/* Map */}
              <div style={{ position: "relative", background: "var(--vgo-cream)", borderRight: "1px solid var(--vgo-line)" }}>
                <KuwaitMap
                  pins={filteredPins}
                  highlight={filter}
                  selectedPin={selectedPin}
                  onSelectPin={setSelectedPin}
                  onSelectGov={(id) => setFilter(id)}
                />
              </div>

              {/* List / detail */}
              <div style={{ padding: 0, overflowY: "auto", maxHeight: 720 }}>
                {selectedPin ? (
                  <PinDetail pin={selectedPin} onClose={() => setSelectedPin(null)} onNav={onNav} />
                ) : (
                  <PinList pins={filteredPins} onSelect={setSelectedPin} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip onNav={onNav} />
    </div>
  );
}

function FilterButton({ active, onClick, label, count }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 14px",
        background: active ? "var(--vgo-ink)" : "transparent",
        color: active ? "var(--vgo-yellow)" : "var(--vgo-ink)",
        border: "1px solid " + (active ? "var(--vgo-ink)" : "var(--vgo-line)"),
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 500,
        transition: "background 0.12s ease",
        fontFamily: "inherit",
      }}>
      <span>{label}</span>
      <span className="vgo-mono" style={{ fontSize: 12, opacity: 0.7 }}>{count}</span>
    </button>
  );
}

function KuwaitMap({ pins, highlight, selectedPin, onSelectPin, onSelectGov }) {
  const govQueries = {
    all: { q: "Kuwait", zoom: 9 },
    capital: { q: "Kuwait City, Kuwait", zoom: 12 },
    hawalli: { q: "Hawalli, Kuwait", zoom: 12 },
    farwaniya: { q: "Farwaniya, Kuwait", zoom: 12 },
    mubarak: { q: "Mubarak Al-Kabeer, Kuwait", zoom: 12 },
    ahmadi: { q: "Ahmadi, Kuwait", zoom: 11 },
    jahra: { q: "Jahra, Kuwait", zoom: 11 },
  };
  const target = selectedPin
    ? { q: `${selectedPin.name}, Kuwait`, zoom: 16 }
    : (govQueries[highlight] || govQueries.all);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(target.q)}&z=${target.zoom}&output=embed`;

  const activeLabel = selectedPin
    ? selectedPin.name
    : (highlight === "all" ? "All Kuwait" : VGO_LOCATIONS.find(l => l.id === highlight)?.name);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 600 }}>
      <iframe
        title="VGO machine locations · Kuwait"
        src={src}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Active-area badge */}
      <div style={{
        position: "absolute", top: 16, left: 16, zIndex: 2,
        background: "var(--vgo-yellow)", border: "1px solid var(--vgo-ink)",
        padding: "10px 14px", borderRadius: 4,
        fontFamily: "var(--vgo-font-mono)", fontSize: 11, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "var(--vgo-ink)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        pointerEvents: "none",
        maxWidth: "calc(100% - 32px)",
      }}>
        <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999, background: "var(--vgo-ink)", marginRight: 8, verticalAlign: "middle" }}></span>
        {activeLabel}
      </div>

      {/* Governorate quick-jump chips */}
      <div style={{
        position: "absolute", bottom: 16, left: 16, right: 16, zIndex: 2,
        display: "flex", gap: 6, flexWrap: "wrap",
      }}>
        <GovChip active={highlight === "all"} onClick={() => onSelectGov("all")}>All Kuwait</GovChip>
        {VGO_LOCATIONS.map(loc => (
          <GovChip key={loc.id} active={highlight === loc.id} onClick={() => onSelectGov(loc.id)}>
            {loc.name} <span style={{ opacity: 0.55, marginLeft: 4 }}>{loc.count}</span>
          </GovChip>
        ))}
      </div>
    </div>
  );
}

function GovChip({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: active ? "var(--vgo-ink)" : "var(--vgo-white)",
      color: active ? "var(--vgo-yellow)" : "var(--vgo-ink)",
      border: "1px solid " + (active ? "var(--vgo-ink)" : "var(--vgo-line-strong)"),
      padding: "7px 12px",
      borderRadius: 999,
      fontFamily: "var(--vgo-font-mono)",
      fontSize: 11,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    }}>
      {children}
    </button>
  );
}

function PinList({ pins, onSelect }) {
  return (
    <div>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--vgo-line)", background: "var(--vgo-cream)", fontFamily: "var(--vgo-font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-ink)" }}>
        {pins.length} machines · click for details
      </div>
      {pins.map(p => {
        const loc = VGO_LOCATIONS.find(l => l.id === p.gov);
        return (
          <div key={p.id} onClick={() => onSelect(p)} style={{
            padding: "18px 24px",
            borderBottom: "1px solid var(--vgo-line)",
            cursor: "pointer",
            transition: "background 0.12s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--vgo-cream)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{p.name}</div>
              <ArrowRight />
            </div>
            <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--vgo-mute)", textTransform: "uppercase" }}>
              {loc?.name} · {p.category}
            </div>
            <div style={{ fontSize: 13, color: "var(--vgo-ink)", marginTop: 6 }}>
              {p.type}
            </div>
          </div>
        );
      })}
      {pins.length === 0 && (
        <div style={{ padding: 32, textAlign: "center", color: "var(--vgo-mute)" }}>
          No machines match these filters.
        </div>
      )}
    </div>
  );
}

function PinDetail({ pin, onClose, onNav }) {
  const loc = VGO_LOCATIONS.find(l => l.id === pin.gov);
  const lastRestockHours = Math.floor(Math.random() * 18) + 2;
  const products = ["Bottled Water 500ml", "Coca-Cola 330ml", "Lay's Salt & Vinegar", "Snickers", "Mai Dubai Sparkling", "KitKat 4-finger", "Almond Wellness Bar", "Cold-brew Latte", "Karak Tea", "Bottled Juice"];
  const featured = products.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div style={{ padding: 0 }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--vgo-line)", background: "var(--vgo-yellow)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>Machine detail</div>
        <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 18, fontFamily: "var(--vgo-font-mono)" }}>×</button>
      </div>
      <div style={{ padding: 24 }}>
        <span className="vgo-tag is-dark" style={{ marginBottom: 14 }}>{pin.type}</span>
        <h3 className="vgo-h3" style={{ marginTop: 14, marginBottom: 10 }}>{pin.name}</h3>
        <div className="vgo-mono" style={{ fontSize: 12, letterSpacing: "0.06em", color: "var(--vgo-mute)", textTransform: "uppercase", marginBottom: 24 }}>
          {loc?.name} · {pin.category}
        </div>

        <div style={{ background: "var(--vgo-cream)", padding: 16, borderRadius: 6, marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <div className="vgo-mono" style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)" }}>Status</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, fontSize: 14, marginTop: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--vgo-success)" }}></span>
                Online
              </div>
            </div>
            <div>
              <div className="vgo-mono" style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)" }}>Last restock</div>
              <div style={{ fontWeight: 500, fontSize: 14, marginTop: 4 }}>{lastRestockHours}h ago</div>
            </div>
          </div>
        </div>

        <h4 className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-ink)", marginBottom: 12 }}>
          ↳ Sample stock
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          {featured.map((p, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "var(--vgo-white)", border: "1px solid var(--vgo-line)", borderRadius: 4, fontSize: 14 }}>
              <span>{p}</span>
              <span className="vgo-mono" style={{ fontSize: 11, color: "var(--vgo-mute)" }}>{Math.floor(Math.random() * 12) + 3} in stock</span>
            </div>
          ))}
        </div>

        <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" style={{ width: "100%", justifyContent: "center" }} onClick={() => onNav("business")}>
          Request a similar machine <ArrowRight />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Locations });


/* ============ src/business.jsx ============ */
// ===== Business / Partner with us — multi-step form =====

function Business({ onNav }) {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    siteType: "",
    machineTypes: [],
    headcount: "",
    operatingHours: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    notes: "",
    tier: "Standard",
  });
  const update = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleMachine = (id) => {
    setData(d => ({
      ...d,
      machineTypes: d.machineTypes.includes(id)
        ? d.machineTypes.filter(x => x !== id)
        : [...d.machineTypes, id],
    }));
  };

  const total = 4;

  return (
    <div className="vgo-page" data-screen-label="For Business">
      <section className="vgo-section is-yellow" style={{ padding: "72px 0 56px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 18 }}>For Business · Partner with VGO</span>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 className="vgo-h1">Tell us about your site. We'll come back with a placement plan.</h1>
            <p className="vgo-lead" style={{ color: "var(--vgo-ink)" }}>
              90% of placements pay <em>us</em> — there's no machine cost to your business. We earn on retail. Survey to live: typically 5–10 business days.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--vgo-cream)", padding: "48px 0 96px" }}>
        <div className="vgo-wrap" style={{ maxWidth: 980 }}>
          {/* Progress */}
          <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
            {[1,2,3,4].map(n => (
              <div key={n} style={{
                flex: 1, height: 4,
                background: step >= n ? "var(--vgo-ink)" : "var(--vgo-line-strong)",
                transition: "background 0.18s ease",
              }} />
            ))}
          </div>
          <div className="vgo-mono" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", marginBottom: 28 }}>
            Step {step} of {total} {step === total + 1 ? "· Submitted" : ""}
          </div>

          {step === 1 && (
            <FormCard title="Where will the machine live?" subtitle="Pick the closest match — we'll fine-tune in the site survey.">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {["Office building", "Mall / retail", "School / university", "Hospital / clinic", "Hotel / lounge", "Industrial / energy", "Government / public", "Transit hub", "Sports / leisure", "Other"].map(t => (
                  <OptionCard key={t} label={t} selected={data.siteType === t} onClick={() => update("siteType", t)} />
                ))}
              </div>
              <FormFooter onNext={() => setStep(2)} canNext={!!data.siteType} />
            </FormCard>
          )}

          {step === 2 && (
            <FormCard title="What should it carry?" subtitle="Pick all that apply. You can mix categories — we'll recommend the right combo.">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {VGO_MACHINES.map(m => (
                  <OptionCard
                    key={m.id}
                    label={m.name}
                    sub={m.tag}
                    selected={data.machineTypes.includes(m.id)}
                    onClick={() => toggleMachine(m.id)}
                    multi
                  />
                ))}
              </div>

              <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <label className="vgo-label">Daily footfall (approx.)</label>
                  <select className="vgo-select" value={data.headcount} onChange={(e) => update("headcount", e.target.value)}>
                    <option value="">Select…</option>
                    <option>Under 100</option>
                    <option>100–500</option>
                    <option>500–2,000</option>
                    <option>2,000–10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="vgo-label">Operating hours</label>
                  <select className="vgo-select" value={data.operatingHours} onChange={(e) => update("operatingHours", e.target.value)}>
                    <option value="">Select…</option>
                    <option>Business hours (8–6)</option>
                    <option>Extended (6–11)</option>
                    <option>24/7</option>
                    <option>Shift-based / industrial</option>
                  </select>
                </div>
              </div>

              <FormFooter onBack={() => setStep(1)} onNext={() => setStep(3)} canNext={data.machineTypes.length > 0 && data.headcount && data.operatingHours} />
            </FormCard>
          )}

          {step === 3 && (
            <FormCard title="Which service tier fits?" subtitle="All tiers include 24/7 telemetry & 4-hour service response. Choose later if unsure.">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {[
                  { id: "Standard", price: "Free placement", desc: "VGO supplies, restocks, services. We earn on retail margin." },
                  { id: "Enterprise", price: "Custom contract", desc: "Multi-site, branded wraps, sales dashboard." },
                  { id: "Subsidised", price: "Per-employee", desc: "You sponsor pricing. Cashless badge tap." },
                ].map(t => (
                  <div key={t.id}
                    onClick={() => update("tier", t.id)}
                    style={{
                      padding: 24, cursor: "pointer",
                      background: data.tier === t.id ? "var(--vgo-ink)" : "var(--vgo-white)",
                      color: data.tier === t.id ? "var(--vgo-white)" : "var(--vgo-ink)",
                      border: "1px solid " + (data.tier === t.id ? "var(--vgo-ink)" : "var(--vgo-line)"),
                      borderRadius: 8, display: "flex", flexDirection: "column", gap: 10,
                    }}>
                    <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: data.tier === t.id ? "var(--vgo-yellow)" : "var(--vgo-mute)" }}>
                      {t.id}
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 600 }}>{t.price}</div>
                    <p style={{ fontSize: 13, lineHeight: 1.45, color: data.tier === t.id ? "rgba(255,255,255,0.7)" : "var(--vgo-mute)", margin: 0 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
              <FormFooter onBack={() => setStep(2)} onNext={() => setStep(4)} canNext />
            </FormCard>
          )}

          {step === 4 && (
            <FormCard title="How do we reach you?" subtitle="One of our placement leads will call within one business day.">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <label className="vgo-label">Company / organization</label>
                  <input className="vgo-input" value={data.companyName} onChange={e => update("companyName", e.target.value)} placeholder="e.g. Kuwait Oil Company" />
                </div>
                <div>
                  <label className="vgo-label">Your name</label>
                  <input className="vgo-input" value={data.contactName} onChange={e => update("contactName", e.target.value)} placeholder="Full name" />
                </div>
                <div>
                  <label className="vgo-label">Email</label>
                  <input className="vgo-input" type="email" value={data.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="vgo-label">Phone</label>
                  <input className="vgo-input" value={data.phone} onChange={e => update("phone", e.target.value)} placeholder="+965 ..." />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="vgo-label">Site address</label>
                  <input className="vgo-input" value={data.location} onChange={e => update("location", e.target.value)} placeholder="Building, floor, neighbourhood, governorate" />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="vgo-label">Anything else?</label>
                  <textarea className="vgo-textarea" value={data.notes} onChange={e => update("notes", e.target.value)} placeholder="Special SKUs, branding requirements, security access, timeline..." />
                </div>
              </div>
              <FormFooter
                onBack={() => setStep(3)}
                onNext={() => setStep(5)}
                nextLabel="Submit request"
                canNext={data.companyName && data.contactName && data.email && data.location}
              />
            </FormCard>
          )}

          {step === 5 && (
            <FormCard center>
              <div style={{ background: "var(--vgo-yellow)", width: 80, height: 80, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="var(--vgo-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="vgo-h2" style={{ marginBottom: 18 }}>Request received.</h2>
              <p className="vgo-lead" style={{ maxWidth: 520, margin: "0 auto 32px" }}>
                Thanks, {data.contactName || "team"}. A VGO placement lead will be in touch on <strong>{data.email}</strong> within one business day to schedule the site survey.
              </p>

              <div style={{ background: "var(--vgo-cream)", padding: 24, borderRadius: 8, textAlign: "left", maxWidth: 560, margin: "0 auto 32px" }}>
                <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", marginBottom: 14 }}>
                  Request summary
                </div>
                <SummaryRow label="Site" value={data.siteType} />
                <SummaryRow label="Tier" value={data.tier} />
                <SummaryRow label="Machines" value={data.machineTypes.map(id => VGO_MACHINES.find(m => m.id === id).name).join(", ")} />
                <SummaryRow label="Hours" value={data.operatingHours} />
                <SummaryRow label="Footfall" value={data.headcount} />
              </div>

              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("home")}>
                  Back to home <ArrowRight />
                </button>
                <button className="vgo-btn vgo-btn-outline" onClick={() => { setStep(1); setData({siteType:"",machineTypes:[],headcount:"",operatingHours:"",companyName:"",contactName:"",email:"",phone:"",location:"",notes:"",tier:"Standard"}); }}>
                  Submit another
                </button>
              </div>
            </FormCard>
          )}
        </div>
      </section>
    </div>
  );
}

function FormCard({ title, subtitle, children, center }) {
  return (
    <div style={{
      background: "var(--vgo-white)",
      border: "1px solid var(--vgo-line)",
      borderRadius: 12,
      padding: center ? 64 : 48,
      textAlign: center ? "center" : "left",
    }}>
      {title && <h2 className="vgo-h2" style={{ marginBottom: 12 }}>{title}</h2>}
      {subtitle && <p className="vgo-lead" style={{ marginBottom: 32, color: "var(--vgo-mute)" }}>{subtitle}</p>}
      {children}
    </div>
  );
}

function OptionCard({ label, sub, selected, onClick, multi }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "18px 20px",
        cursor: "pointer",
        background: selected ? "var(--vgo-yellow)" : "var(--vgo-white)",
        border: "1px solid " + (selected ? "var(--vgo-ink)" : "var(--vgo-line-strong)"),
        borderRadius: 6,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background 0.12s ease, border 0.12s ease",
      }}>
      <div>
        <div style={{ fontWeight: 500, fontSize: 15 }}>{label}</div>
        {sub && <div className="vgo-mono" style={{ fontSize: 10, letterSpacing: "0.06em", color: "var(--vgo-mute)", textTransform: "uppercase", marginTop: 4 }}>{sub}</div>}
      </div>
      <div style={{
        width: 18, height: 18,
        borderRadius: multi ? 3 : 999,
        border: "1.5px solid " + (selected ? "var(--vgo-ink)" : "var(--vgo-line-strong)"),
        background: selected ? "var(--vgo-ink)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {selected && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="var(--vgo-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

function FormFooter({ onBack, onNext, canNext = true, nextLabel = "Continue" }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--vgo-line)" }}>
      {onBack ? (
        <button className="vgo-btn vgo-btn-ghost" onClick={onBack}>← Back</button>
      ) : <span />}
      <button
        className="vgo-btn vgo-btn-dark vgo-btn-arrow"
        onClick={canNext ? onNext : undefined}
        style={{ opacity: canNext ? 1 : 0.4, pointerEvents: canNext ? "auto" : "none" }}>
        {nextLabel} <ArrowRight />
      </button>
    </div>
  );
}

function SummaryRow({ label, value }) {
  if (!value) return null;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--vgo-line)", gap: 24 }}>
      <span className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--vgo-mute)", textTransform: "uppercase" }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 500, textAlign: "right" }}>{value}</span>
    </div>
  );
}

Object.assign(window, { Business });


/* ============ src/sustainability.jsx ============ */
// ===== Sustainability page =====

function Sustainability({ onNav }) {
  const metrics = [
    { num: "62%", label: "Less plastic", sub: "Vs. 2022 baseline. Aluminum & glass SKUs prioritized." },
    { num: "180k", label: "kg waste diverted", sub: "From landfill in 2025 via on-site sorting & take-back." },
    { num: "100%", label: "Recyclable cups", sub: "Coffee program uses PEFC paper or compostable PLA." },
    { num: "EV-ready", label: "Fleet roadmap", sub: "30% of restock routes target electric by end of 2027." },
  ];

  return (
    <div className="vgo-page" data-screen-label="Sustainability">
      {/* Hero */}
      <section className="vgo-section is-yellow" style={{ padding: "96px 0 80px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>Sustainability</span>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 className="vgo-h1">
              Convenience without the throwaway.
            </h1>
            <p className="vgo-lead" style={{ color: "var(--vgo-ink)" }}>
              Vending has a packaging problem. We're not pretending otherwise — we're publishing the numbers, year over year, and reducing them on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics row */}
      <section className="vgo-section is-ink">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="The 2025 report"
            title="Where we are right now."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                <div className="vgo-stat-num" style={{ color: "var(--vgo-yellow)" }}>{m.num}</div>
                <div className="vgo-stat-label" style={{ color: "rgba(255,255,255,0.6)" }}>{m.label}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", marginTop: 8, lineHeight: 1.5 }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="vgo-section">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="Four pillars"
            title="How we get to a lower-impact vending network."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {[
              { tag: "PACKAGING", title: "SKUs ranked by recyclability.", body: "Every product on a VGO planogram is scored on packaging type, mono-material status, and local recycling availability. We bias the slot mix toward the higher scores — and we publish the ranking quarterly to suppliers." },
              { tag: "WASTE", title: "Smart bins next to every flagship machine.", body: "Co-located three-stream bins (PET · aluminum · paper) at our top 40 sites. Daily pickup, weighed, and reported in our annual disclosure. We are working with Kuwait's Re:Cycle initiative to expand coverage." },
              { tag: "ENERGY", title: "LED, low-power compressors, smart-sleep.", body: "Refrigerated machines use inverter compressors and night-mode dimming. Average machine pulls ~140 kWh/yr — about 35% below 2022 retrofits." },
              { tag: "PROCUREMENT", title: "Local-first SKU sourcing.", body: "We prioritize SKUs produced or bottled in Kuwait and the GCC over imports — better freshness, lower shipping emissions, and stronger local supply resilience." },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "48px 56px 48px 0",
                paddingLeft: i % 2 === 1 ? 56 : 0,
                borderTop: "1px solid var(--vgo-ink)",
                borderRight: i % 2 === 0 ? "1px solid var(--vgo-ink)" : "none",
                borderBottom: i >= 2 ? "1px solid var(--vgo-ink)" : "none",
              }}>
                <span className="vgo-tag is-yellow" style={{ marginBottom: 24 }}>{p.tag}</span>
                <h3 className="vgo-h2" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", marginTop: 18, marginBottom: 18 }}>{p.title}</h3>
                <p className="vgo-body" style={{ color: "var(--vgo-mute)", maxWidth: 540 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="vgo-section is-cream">
        <div className="vgo-wrap-wide">
          <SectionHead
            eyebrow="2027 roadmap"
            title="What we've committed to publicly."
            intro="Targets we'll be measured against in our annual disclosure, with progress tracked quarterly with our enterprise partners."
          />
          <div style={{ background: "var(--vgo-white)", border: "1px solid var(--vgo-line-strong)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { goal: "80% of SKUs in mono-material packaging", progress: 64, deadline: "Q4 2027" },
              { goal: "30% of restock fleet electric", progress: 12, deadline: "Q2 2027" },
              { goal: "Three-stream bins at 100% of flagship sites", progress: 78, deadline: "Q1 2026" },
              { goal: "Carbon-disclosed annual report (GRI standard)", progress: 50, deadline: "Q1 2026" },
              { goal: "Net-zero scope 1 emissions", progress: 8, deadline: "2030" },
            ].map((r, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.5fr 1.5fr 100px",
                gap: 24, padding: "24px 32px",
                borderTop: i === 0 ? "none" : "1px solid var(--vgo-line)",
                alignItems: "center",
              }}>
                <div style={{ fontSize: 16, fontWeight: 500 }}>{r.goal}</div>
                <div>
                  <div style={{ height: 8, background: "var(--vgo-cream-2)", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ width: `${r.progress}%`, height: "100%", background: "var(--vgo-yellow)" }}></div>
                  </div>
                  <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--vgo-mute)", marginTop: 6, textTransform: "uppercase" }}>
                    {r.progress}% complete
                  </div>
                </div>
                <div className="vgo-mono" style={{ fontSize: 12, color: "var(--vgo-ink)", textAlign: "right" }}>
                  {r.deadline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="vgo-section">
        <div className="vgo-wrap" style={{ maxWidth: 1100 }}>
          <blockquote className="vgo-serif-quote" style={{ margin: 0 }}>
            "If a vending operator can't tell you what's in the bin behind the machine, they're not running a vending operation. We can — and we publish it."
          </blockquote>
          <div style={{ marginTop: 36, display: "flex", gap: 16, alignItems: "center" }}>
            <Placeholder label="exec" height={56} style={{ width: 56, borderRadius: 999 }} />
            <div>
              <div style={{ fontWeight: 600 }}>Head of Operations</div>
              <div style={{ fontSize: 14, color: "var(--vgo-mute)" }}>VGO Kuwait</div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip onNav={onNav} />
    </div>
  );
}

Object.assign(window, { Sustainability });


/* ============ src/faq.jsx ============ */
// ===== FAQ =====

function FAQ({ onNav }) {
  const groups = [
    {
      label: "Getting a machine",
      items: [
        { q: "How much does a VGO machine cost?", a: "On our Standard tier, placement is free — there's no CapEx, no monthly fee. We supply, install, restock and service the machine, and earn on retail margin. Enterprise and Subsidised tiers are custom-priced." },
        { q: "How long from contract to live machine?", a: "Typical timeline is 5–10 business days. Site survey within 48 hours of contract, then installation, telemetry pairing, first restock and a live walk-through with your facilities lead." },
        { q: "What if my site is too small?", a: "We have compact combo machines with a 0.85 × 0.9 m footprint that handle both ambient snacks and chilled drinks in one unit. Minimum viable foot traffic is around 50 people/day." },
        { q: "Can we brand the machine?", a: "Yes. On the Enterprise tier we wrap the side and front panels in your visual identity, and we can also surface your branding on smart touch-screen units' idle loops." },
      ],
    },
    {
      label: "Operations & SLA",
      items: [
        { q: "What's your service SLA?", a: "Telemetry-flagged outages get a same-day response and 4-hour median resolution anywhere in Kuwait. Restocking runs against forecasted demand, not fixed schedules — our average gap between 'last unit sold' and 'restock' is 11 hours." },
        { q: "Who handles cash collection?", a: "VGO. We collect, count and reconcile cash weekly. Cashless transactions (K-Net, Apple Pay, Google Pay, badge tap) settle daily to our merchant account." },
        { q: "Can my facilities team see the data?", a: "On Enterprise contracts, yes — we deliver a daily sales dashboard scoped to your sites, with top-sellers, stock-out frequency, and footfall conversion. CSV export available." },
        { q: "What payment methods do machines accept?", a: "K-Net debit, NFC contactless (Apple Pay, Google Pay, Visa/Mastercard), corporate badge tap on Enterprise tier, and cash. Cashless is the default path." },
      ],
    },
    {
      label: "Products & SKUs",
      items: [
        { q: "Can we customize the SKU mix?", a: "Yes — we'll propose a planogram based on your site type and demographic, but the final mix is yours to approve. We tune it monthly based on actual sales velocity." },
        { q: "Do you offer healthy options?", a: "Yes. We can configure machines to be 60%+ healthier-options (wellness bars, fresh fruit cups, low-sugar drinks, plant milks). Hospitals and schools typically request this configuration." },
        { q: "Can you carry alcohol or restricted SKUs?", a: "No. VGO operates within Kuwait's regulatory framework. We do support age-gated SKUs (energy drinks, etc.) via badge tap on smart machines." },
        { q: "What about fresh food shelf life?", a: "Fresh-food machines run at 4°C and we monitor temperature continuously. Items have 24–72 hour shelf lives depending on category. Anything within 6 hours of expiry is auto-flagged and pulled." },
      ],
    },
    {
      label: "Sustainability",
      items: [
        { q: "Are the machines energy-efficient?", a: "Yes. Refrigerated units use inverter compressors and LED lighting with smart-sleep that dims overnight and during low-traffic windows. Average pull is around 140 kWh/yr per machine." },
        { q: "What happens to packaging waste?", a: "At our 40 flagship sites we co-locate three-stream bins (PET / aluminum / paper) next to the machine, with daily pickup. We're expanding coverage with Kuwait's Re:Cycle initiative." },
        { q: "Do you publish an environmental report?", a: "Yes — annually, aligned to GRI standards. The 2025 report covers our packaging score, energy use, waste diversion and fleet emissions. Available on request to enterprise partners." },
      ],
    },
  ];

  return (
    <div className="vgo-page" data-screen-label="FAQ">
      <section className="vgo-section is-yellow" style={{ padding: "96px 0 80px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>FAQ</span>
          <h1 className="vgo-h1" style={{ maxWidth: 1100 }}>
            Questions, answered without the corporate filler.
          </h1>
        </div>
      </section>

      <section className="vgo-section">
        <div className="vgo-wrap" style={{ maxWidth: 1080 }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{ marginBottom: 64 }}>
              <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, alignItems: "start" }}>
                <div style={{ position: "sticky", top: 96 }}>
                  <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 12 }}>0{gi+1}</span>
                  <h2 className="vgo-h3">{g.label}</h2>
                </div>
                <div>
                  {g.items.map((it, i) => (
                    <FAQItem key={i} q={it.q} a={it.a} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "var(--vgo-cream)", padding: 48, borderRadius: 12, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "center", marginTop: 32 }}>
            <div>
              <h3 className="vgo-h3" style={{ marginBottom: 10 }}>Question not answered?</h3>
              <p className="vgo-body" style={{ color: "var(--vgo-mute)", margin: 0 }}>
                Email us at <a href="mailto:hello@vgokw.com" style={{ borderBottom: "1px solid currentColor" }}>hello@vgokw.com</a> — we respond within one business day.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("contact")}>
                Contact us <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--vgo-line)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "24px 0",
          background: "transparent",
          border: "none",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          cursor: "pointer",
          color: "inherit",
          fontFamily: "inherit",
        }}>
        <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 999, background: open ? "var(--vgo-ink)" : "var(--vgo-yellow)",
          color: open ? "var(--vgo-yellow)" : "var(--vgo-ink)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 500, transition: "background 0.18s ease",
          flexShrink: 0,
        }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24, color: "var(--vgo-mute)", fontSize: 16, lineHeight: 1.6, maxWidth: 720 }}>
          {a}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { FAQ });


/* ============ src/contact.jsx ============ */
// ===== Contact =====

function Contact({ onNav }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", company: "", email: "", topic: "General enquiry", message: "" });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const canSubmit = form.name && form.email && form.message;

  return (
    <div className="vgo-page" data-screen-label="Contact">
      <section className="vgo-section is-yellow" style={{ padding: "96px 0 80px" }}>
        <div className="vgo-wrap-wide">
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 20 }}>Contact</span>
          <h1 className="vgo-h1" style={{ maxWidth: 1100 }}>
            Talk to a human. We'll answer the same day.
          </h1>
        </div>
      </section>

      <section className="vgo-section">
        <div className="vgo-wrap-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {/* Contact details */}
          <div>
            <h2 className="vgo-h3" style={{ marginBottom: 28 }}>The fast lane</h2>
            <ContactBlock
              label="General enquiries"
              value="hello@vgokw.com"
              href="mailto:hello@vgokw.com"
            />
            <ContactBlock
              label="Instagram"
              value="@vgo.kw"
              href="https://www.instagram.com/vgo.kw/"
            />
            <ContactBlock
              label="Headquarters"
              value={<>
                Qibla Pearl Tower 2, 16th Floor<br/>
                Kuwait City, Kuwait
              </>}
            />
            <ContactBlock
              label="Hours"
              value={<>
                Sun – Thu · 8:00 – 18:00<br/>
                Operations on-call · 24/7
              </>}
            />

            <div style={{ marginTop: 48, height: 280, borderRadius: "var(--vgo-radius)", overflow: "hidden", border: "1px solid var(--vgo-line)" }}>
              <img src="assets/qibla-pearl-tower.jpg" alt="Qibla Pearl Tower 2, Kuwait City" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--vgo-cream)", padding: 40, borderRadius: 12 }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ background: "var(--vgo-yellow)", width: 64, height: 64, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="var(--vgo-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="vgo-h3" style={{ marginBottom: 12 }}>Got it.</h3>
                <p style={{ color: "var(--vgo-mute)", maxWidth: 380, margin: "0 auto 24px" }}>
                  Your message is in our inbox. We'll be back on <strong>{form.email}</strong> within one business day.
                </p>
                <button className="vgo-btn vgo-btn-outline" onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", topic: "General enquiry", message: "" }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <h2 className="vgo-h3" style={{ marginBottom: 28 }}>Or send a message</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label className="vgo-label">Name</label>
                    <input className="vgo-input" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="vgo-label">Company</label>
                    <input className="vgo-input" value={form.company} onChange={e => update("company", e.target.value)} placeholder="Optional" />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="vgo-label">Email</label>
                    <input className="vgo-input" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" />
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="vgo-label">Topic</label>
                    <select className="vgo-select" value={form.topic} onChange={e => update("topic", e.target.value)}>
                      <option>General enquiry</option>
                      <option>Request a machine</option>
                      <option>Existing machine — service</option>
                      <option>Press / media</option>
                      <option>Careers</option>
                      <option>Partnership / supplier</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label className="vgo-label">Message</label>
                    <textarea className="vgo-textarea" value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us what you need..." />
                  </div>
                </div>
                <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="vgo-btn vgo-btn-dark vgo-btn-arrow"
                    onClick={canSubmit ? () => setSubmitted(true) : undefined}
                    style={{ opacity: canSubmit ? 1 : 0.4, pointerEvents: canSubmit ? "auto" : "none" }}>
                    Send message <ArrowRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactBlock({ label, value, href }) {
  const content = href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ borderBottom: "1px solid currentColor" }}>{value}</a>
    : value;
  return (
    <div style={{ paddingTop: 24, paddingBottom: 24, borderTop: "1px solid var(--vgo-line)" }}>
      <div className="vgo-mono" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--vgo-mute)", marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.4 }}>
        {content}
      </div>
    </div>
  );
}

Object.assign(window, { Contact });
