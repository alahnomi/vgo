// ===== VGO shared components =====

const VGO_LOGO = "assets/vgo-logo.png";
const VGO_MACHINE_PHOTO = "assets/vgo-machine-photo.png";

// Brand stats (reusable)
const VGO_STATS = {
  machines: "130+",
  governorates: "6",
  years: "8",
  uptime: "99.6%",
  partners: "80+",
  restocks: "24/7",
};

// Machine types catalog
const VGO_MACHINES = [
  { id: "snacks", name: "Snack Machines", tag: "AMBIENT", photo: "assets/machines/snacks.jpeg", desc: "Crisps, chocolates, bakery & wellness bars. 32–48 SKUs per unit.", capacity: "32–48 SKUs", footprint: "0.9 × 0.8 m" },
  { id: "drinks", name: "Cold Beverage", tag: "REFRIGERATED", photo: "assets/machines/drinks.jpeg", desc: "Bottled water, soft drinks, juices, dairy & energy. Glass-front merchandiser.", capacity: "Up to 540 bottles", footprint: "1.0 × 0.85 m" },
  { id: "coffee", name: "Hot Coffee & Specialty", tag: "BARISTA", photo: "assets/machines/coffee.jpeg", desc: "Bean-to-cup espresso, lattes, karak, hot chocolate. Fresh milk module optional.", capacity: "8 recipes", footprint: "0.7 × 0.75 m" },
  { id: "fresh", name: "Fresh Food", tag: "CHILLED 4°C", photo: "assets/machines/fresh.jpeg", desc: "Sandwiches, salads, fruit cups, ready meals. HACCP-monitored cooling.", capacity: "60–90 trays", footprint: "1.0 × 0.85 m" },
  { id: "combo", name: "Combo Machines", tag: "DUAL ZONE", photo: "assets/machines/combo.jpeg", desc: "One footprint, two temperatures — snacks above, cold drinks below.", capacity: "48 + 240", footprint: "1.0 × 0.85 m" },
  { id: "smart", name: "Smart Touch-Screen", tag: "CASHLESS", photo: "assets/machines/smart.jpeg", desc: "21\" touch UI, cashless payments, age-gated SKUs, advertising loop.", capacity: "Configurable", footprint: "0.9 × 0.85 m" },
  { id: "custom", name: "Specialty & Custom", tag: "BESPOKE", photo: "assets/machines/custom.jpeg", desc: "PPE, electronics, locker pickup, branded merchandise. Built to brief.", capacity: "Project-based", footprint: "Variable" },
];

// Kuwait governorates with mock machine counts & locations
const VGO_LOCATIONS = [
  { id: "capital", name: "Al Asimah", arabic: "العاصمة", count: 38, color: "#ffcf01", x: 36, y: 38, w: 18, h: 14, key: "Capital — CBD, ministries, hotels" },
  { id: "hawalli", name: "Hawalli", arabic: "حولي", count: 32, color: "#ffd83a", x: 40, y: 50, w: 14, h: 12, key: "Salmiya, Hawalli, Jabriya" },
  { id: "farwaniya", name: "Farwaniya", arabic: "الفروانية", count: 28, color: "#ffe066", x: 26, y: 52, w: 14, h: 18, key: "Airport, Khaitan, Ardiya" },
  { id: "mubarak", name: "Mubarak Al-Kabeer", arabic: "مبارك الكبير", count: 12, color: "#f7c200", x: 34, y: 64, w: 12, h: 10, key: "Adan, Qurain, Sabah Al-Salem" },
  { id: "ahmadi", name: "Ahmadi", arabic: "الأحمدي", count: 16, color: "#e6b000", x: 22, y: 72, w: 22, h: 22, key: "KOC, Mahboula, Mangaf" },
  { id: "jahra", name: "Jahra", arabic: "الجهراء", count: 6, color: "#cc9c00", x: 8, y: 18, w: 28, h: 32, key: "Jahra, Sulaibiya, Saad Al Abdullah" },
];

// Reusable arrow icon
function ArrowRight({size = 14}) {
  return (
    <svg className="vgo-arrow-icon" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown({size = 14}) {
  return (
    <svg className="vgo-arrow-icon" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Placeholder block
function Placeholder({ label, height = 320, variant = "default", style = {}, children }) {
  const cls = ["vgo-ph", variant === "dark" ? "is-dark" : variant === "yellow" ? "is-yellow" : ""].join(" ");
  return (
    <div className={cls} style={{ height, ...style }}>
      {children ? children : <span className="vgo-ph-label">{label}</span>}
    </div>
  );
}

// Photo of an actual machine (no bg removal) — for catalog cards
function MachineRealPhoto({ src, height = 280, badge, style = {} }) {
  return (
    <div style={{
      position: "relative",
      height,
      overflow: "hidden",
      background: "#0a0a0a",
      ...style,
    }}>
      <img
        src={src}
        alt="VGO vending machine"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {badge && (
        <span className="vgo-tag is-dark" style={{
          position: "absolute", top: 14, left: 14, zIndex: 2,
          background: "var(--vgo-yellow)",
          color: "var(--vgo-ink)",
          borderColor: "transparent",
        }}>
          {badge}
        </span>
      )}
    </div>
  );
}

// Real VGO machine photo on stylized backdrop (with bg-removed version)
function MachinePhoto({ height = 320, bg = "cream", contain = true, badge, style = {} }) {
  const bgMap = {
    cream: { background: "var(--vgo-cream)", border: "1px solid var(--vgo-line)" },
    yellow: { background: "var(--vgo-yellow)", border: "1px solid rgba(0,0,0,0.1)" },
    ink: { background: "var(--vgo-ink)", border: "1px solid var(--vgo-ink)" },
    white: { background: "var(--vgo-white)", border: "1px solid var(--vgo-line)" },
  };
  const styles = bgMap[bg] || bgMap.cream;
  return (
    <div style={{
      position: "relative",
      height,
      borderRadius: "var(--vgo-radius)",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      ...styles,
      ...style,
    }}>
      <img
        src={VGO_MACHINE_PHOTO}
        alt="VGO vending machine"
        style={{
          maxWidth: "100%",
          maxHeight: contain ? "100%" : "none",
          height: contain ? "100%" : "auto",
          width: "auto",
          objectFit: "contain",
          display: "block",
          filter: bg === "ink" ? "drop-shadow(0 18px 30px rgba(0,0,0,0.35))" : "none",
        }}
      />
      {badge && (
        <span className="vgo-tag" style={{
          position: "absolute", top: 16, left: 16, zIndex: 2,
          background: bg === "ink" ? "var(--vgo-yellow)" : "var(--vgo-ink)",
          color: bg === "ink" ? "var(--vgo-ink)" : "var(--vgo-yellow)",
          borderColor: "transparent",
        }}>
          {badge}
        </span>
      )}
    </div>
  );
}

// Stat block
function Stat({ num, label, sub }) {
  return (
    <div>
      <div className="vgo-stat-num">{num}</div>
      <div className="vgo-stat-label">{label}</div>
      {sub && <div style={{ fontSize: 14, color: "var(--vgo-mute)", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

// Section header (eyebrow + heading + intro)
function SectionHead({ eyebrow, title, intro, align = "split" }) {
  if (align === "center") {
    return (
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto", paddingBottom: 72 }}>
        <div className="vgo-eyebrow vgo-eyebrow-dot" style={{ marginBottom: 18 }}>{eyebrow}</div>
        <h2 className="vgo-h2" style={{ marginBottom: 16 }}>{title}</h2>
        {intro && <p className="vgo-lead">{intro}</p>}
      </div>
    );
  }
  return (
    <div className="vgo-section-head">
      <div className="label-col">
        <span className="vgo-eyebrow vgo-eyebrow-dot">{eyebrow}</span>
        <h2 className="vgo-h2">{title}</h2>
      </div>
      <div>
        {intro && <p className="vgo-lead">{intro}</p>}
      </div>
    </div>
  );
}

// CTA strip — re-usable
function CTAStrip({ onNav }) {
  return (
    <section className="vgo-section is-yellow" style={{ padding: "100px 0" }}>
      <div className="vgo-wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <span className="vgo-eyebrow vgo-eyebrow-dot" style={{ display: "block", marginBottom: 18 }}>Talk to VGO</span>
          <h2 className="vgo-h1" style={{ maxWidth: 780 }}>
            Ready to put a machine where your people are?
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <p className="vgo-lead" style={{ color: "var(--vgo-ink)" }}>
            Tell us your site footprint, foot-traffic & target SKUs. We come back within one business day with a placement plan.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
              Request a machine <ArrowRight />
            </button>
            <button className="vgo-btn vgo-btn-outline" onClick={() => onNav("contact")}>
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee strip
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="vgo-marquee">
      <div className="vgo-marquee-track">
        {doubled.map((it, i) => (
          <span className="vgo-marquee-item" key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  VGO_LOGO, VGO_MACHINE_PHOTO, VGO_STATS, VGO_MACHINES, VGO_LOCATIONS,
  ArrowRight, ArrowDown, Placeholder, MachinePhoto, MachineRealPhoto, Stat, SectionHead, CTAStrip, Marquee,
});
