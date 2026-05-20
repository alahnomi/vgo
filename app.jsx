// ===== App router =====

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "accentMode": "yellow",
  "showMarquee": true
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = React.useState("home");
  const { values: tweaks, setTweak } = useTweaks(TWEAK_DEFAULTS);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  let Page;
  switch (page) {
    case "about":          Page = <About onNav={navigate} />; break;
    case "solutions":      Page = <Solutions onNav={navigate} />; break;
    case "locations":      Page = <Locations onNav={navigate} />; break;
    case "business":       Page = <Business onNav={navigate} />; break;
    case "sustainability": Page = <Sustainability onNav={navigate} />; break;
    case "faq":            Page = <FAQ onNav={navigate} />; break;
    case "contact":        Page = <Contact onNav={navigate} />; break;
    default:               Page = <Home onNav={navigate} heroVariant={tweaks.heroVariant} />;
  }

  return (
    <div>
      <Header page={page} onNav={navigate} />
      {Page}
      <Footer onNav={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Homepage hero">
          <TweakRadio
            label="Hero variant"
            value={tweaks.heroVariant}
            options={[
              { value: "editorial", label: "Editorial" },
              { value: "fullbleed", label: "Full-bleed" },
              { value: "typestack", label: "Type-stack" },
            ]}
            onChange={(v) => { setTweak("heroVariant", v); navigate("home"); }}
          />
          <div style={{ padding: "10px 16px 14px", fontSize: 12, color: "#888", lineHeight: 1.45 }}>
            Three directions for the homepage hero. Editorial leads with copy + machine grid; Full-bleed is a single giant statement; Type-stack is a brutalist typographic poster.
          </div>
        </TweakSection>

        <TweakSection label="Jump to page">
          <TweakSelect
            label="Page"
            value={page}
            options={[
              { value: "home", label: "Home" },
              { value: "about", label: "About" },
              { value: "solutions", label: "Solutions" },
              { value: "locations", label: "Locations" },
              { value: "business", label: "Partner with VGO" },
              { value: "sustainability", label: "Sustainability" },
              { value: "faq", label: "FAQ" },
              { value: "contact", label: "Contact" },
            ]}
            onChange={(v) => navigate(v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
