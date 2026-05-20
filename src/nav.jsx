// ===== Header + Footer =====

function Header({ page, onNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "solutions", label: "Solutions" },
    { id: "locations", label: "Locations" },
    { id: "sustainability", label: "Sustainability" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }];

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [mobileOpen]);

  const navTo = (id) => { setMobileOpen(false); onNav(id); };

  return (
    <header className="vgo-header" data-screen-label="Site Header">
      <div className="vgo-wrap-wide vgo-header-inner">
        <div className="vgo-logo-mark" onClick={() => navTo("home")}>
          <img src={VGO_LOGO} alt="VGO" style={{ height: "56px", width: "82px" }} />
          <span className="vgo-logo-word"></span>
        </div>
        <nav className="vgo-nav">
          {links.map((l) =>
          <button
            key={l.id}
            className={"vgo-nav-link" + (page === l.id ? " is-active" : "")}
            onClick={() => onNav(l.id)}>
              {l.label}
            </button>
          )}
        </nav>
        <div className="vgo-header-cta">
          <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" onClick={() => onNav("business")}>
            Partner with VGO <ArrowRight />
          </button>
          <button
            className="vgo-mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}>
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 5h14M2 9h14M2 13h14" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="vgo-mobile-drawer" role="dialog" aria-modal="true">
          <button className="vgo-mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>×</button>
          {links.map(l => (
            <button
              key={l.id}
              className={"vgo-mobile-link" + (page === l.id ? " is-active" : "")}
              onClick={() => navTo(l.id)}>
              {l.label}
            </button>
          ))}
          <div className="vgo-mobile-cta">
            <button className="vgo-btn vgo-btn-dark vgo-btn-arrow" style={{ justifyContent: "center" }} onClick={() => navTo("business")}>
              Partner with VGO <ArrowRight />
            </button>
            <a href="mailto:hello@vgokw.com" className="vgo-btn vgo-btn-outline" style={{ justifyContent: "center" }}>
              hello@vgokw.com
            </a>
          </div>
        </div>
      )}
    </header>);

}

function Footer({ onNav }) {
  return (
    <footer className="vgo-footer" data-screen-label="Site Footer">
      <div className="vgo-wrap-wide">
        <div className="vgo-footer-grid">
          <div>
            <div className="vgo-footer-logo">
              <img src="assets/vgo-logo-dark.png" alt="VGO" />
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 340, lineHeight: 1.55 }}>
              Kuwait's vending solutions partner. {VGO_STATS.machines} machines, {VGO_STATS.governorates} governorates, one operations team that never sleeps.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
              <a href="https://www.instagram.com/vgo.kw/" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, fontSize: 13 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
                @vgo.kw
              </a>
            </div>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a onClick={() => onNav("home")} style={{ cursor: "pointer" }}>Home</a></li>
              <li><a onClick={() => onNav("about")} style={{ cursor: "pointer" }}>About</a></li>
              <li><a onClick={() => onNav("solutions")} style={{ cursor: "pointer" }}>Solutions</a></li>
              <li><a onClick={() => onNav("locations")} style={{ cursor: "pointer" }}>Locations</a></li>
              <li><a onClick={() => onNav("sustainability")} style={{ cursor: "pointer" }}>Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4>For Business</h4>
            <ul>
              <li><a onClick={() => onNav("business")} style={{ cursor: "pointer" }}>Request a machine</a></li>
              <li><a onClick={() => onNav("solutions")} style={{ cursor: "pointer" }}>Machine catalog</a></li>
              <li><a onClick={() => onNav("faq")} style={{ cursor: "pointer" }}>Service & uptime SLA</a></li>
              <li><a onClick={() => onNav("contact")} style={{ cursor: "pointer" }}>Sales contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Headquarters</h4>
            <ul style={{ color: "rgba(255,255,255,0.85)" }}>
              <li>Qibla Pearl Tower 2</li>
              <li>16th Floor</li>
              <li>Kuwait City, Kuwait</li>
              <li style={{ marginTop: 8 }}><a href="mailto:hello@vgokw.com" style={{ color: "var(--vgo-yellow)" }}>hello@vgokw.com</a></li>
            </ul>
          </div>
        </div>
        <div className="vgo-footer-bottom">
          <span>© 2026 VGO Vending Solutions, Kuwait. All rights reserved.</span>
          <span></span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Header, Footer });