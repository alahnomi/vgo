// VGO 3D-styled vending machine — pure SVG render for hero use
function MachineRender3D({ height = 600, style = {} }) {
  return (
    <div style={{ position: "relative", height, display: "flex", justifyContent: "center", alignItems: "flex-end", ...style }}>
      <svg viewBox="0 0 400 600" style={{ height: "100%", width: "auto", maxWidth: "100%", display: "block", filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.25))" }}>
        <defs>
          {/* Yellow body gradient (left to right, perspective shading) */}
          <linearGradient id="vgoBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff3a8" />
            <stop offset="0.18" stopColor="#ffcf01" />
            <stop offset="0.55" stopColor="#ffcf01" />
            <stop offset="0.85" stopColor="#e8b900" />
            <stop offset="1" stopColor="#c79e00" />
          </linearGradient>
          {/* Side panel darker gradient */}
          <linearGradient id="vgoSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b88e00" />
            <stop offset="1" stopColor="#7d5f00" />
          </linearGradient>
          {/* Glass reflection gradient */}
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="0.4" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.3" />
          </linearGradient>
          {/* Interior dark gradient (depth) */}
          <linearGradient id="interior" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a2f2c" />
            <stop offset="0.5" stopColor="#1a1f1d" />
            <stop offset="1" stopColor="#0d100f" />
          </linearGradient>
          {/* Screen gradient */}
          <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a0a0a" />
            <stop offset="1" stopColor="#1a1a1a" />
          </linearGradient>
          {/* Black accent stripe */}
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1a1f1d" />
            <stop offset="1" stopColor="#0a0a0a" />
          </linearGradient>
          {/* Ground shadow */}
          <radialGradient id="ground" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(0,0,0,0.35)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="200" cy="582" rx="160" ry="12" fill="url(#ground)" />

        {/* Side panel (perspective depth) */}
        <polygon points="312,70 350,90 350,560 312,575" fill="url(#vgoSide)" />
        <polygon points="312,70 350,90 348,92 314,74" fill="#665000" opacity="0.7" />

        {/* Top cap */}
        <polygon points="50,70 312,70 350,90 88,90" fill="#ffd83a" />
        <polygon points="50,70 88,90 88,92 50,72" fill="#0a0a0a" opacity="0.4" />

        {/* Main body */}
        <rect x="50" y="70" width="262" height="510" fill="url(#vgoBody)" />

        {/* Black side wave accent (mimicking the real VGO machine) */}
        <path d="M 245 70 Q 270 250 248 380 Q 222 510 312 580 L 312 70 Z" fill="url(#accent)" opacity="0.92" />

        {/* Glass display frame */}
        <rect x="68" y="92" width="180" height="290" rx="3" fill="#1a1f1d" />
        {/* Interior */}
        <rect x="74" y="98" width="168" height="278" rx="2" fill="url(#interior)" />

        {/* Shelf dividers + product silhouettes */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <g key={i}>
            <line x1="74" y1={140 + i * 40} x2="242" y2={140 + i * 40} stroke="#3a3f3c" strokeWidth="1" />
            {/* products on each shelf */}
            {[0,1,2,3,4,5].map(j => {
              const colors = ["#d97757", "#5b8def", "#2f7d32", "#ffcf01", "#e84a4a", "#9b59b6"];
              const c = colors[(i*6 + j) % colors.length];
              return (
                <rect key={j}
                  x={78 + j * 27}
                  y={105 + i * 40}
                  width="22"
                  height="32"
                  rx="2"
                  fill={c}
                  opacity="0.78"
                />
              );
            })}
          </g>
        ))}

        {/* Glass shine overlay */}
        <rect x="74" y="98" width="168" height="278" rx="2" fill="url(#glass)" />
        <rect x="74" y="98" width="60" height="278" rx="2" fill="#ffffff" opacity="0.12" />

        {/* Touch screen (right side, behind accent wave) */}
        <rect x="262" y="110" width="44" height="78" rx="3" fill="url(#screen)" />
        <rect x="266" y="114" width="36" height="70" rx="2" fill="#0d1f3a" />
        {/* screen grid */}
        {[0,1,2,3].map(r => (
          [0,1,2].map(c => (
            <rect key={`${r}-${c}`} x={268 + c * 11} y={116 + r * 16} width="8" height="12" rx="1" fill="#ffcf01" opacity="0.6" />
          ))
        ))}

        {/* Card reader + buttons */}
        <rect x="262" y="200" width="44" height="22" rx="3" fill="#1a1f1d" />
        <rect x="268" y="206" width="14" height="10" rx="1" fill="#3b8ed8" />
        <circle cx="294" cy="211" r="3" fill="#2f7d32" />
        <circle cx="286" cy="211" r="2" fill="#888" />

        {/* VG logo plate (top right) */}
        <g transform="translate(268, 80)">
          <text x="0" y="8" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1a1f1d" letterSpacing="-0.5">V</text>
          <circle cx="14" cy="4" r="6" fill="none" stroke="#1a1f1d" strokeWidth="1.8" />
        </g>

        {/* Dispenser tray */}
        <rect x="68" y="400" width="180" height="80" rx="4" fill="#1a1f1d" />
        <rect x="74" y="406" width="168" height="56" rx="3" fill="#2a2f2c" />
        <text x="158" y="441" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#ffcf01" letterSpacing="2">PUSH</text>
        {/* arrows */}
        <path d="M 120 432 l 6 6 6 -6" stroke="#ffcf01" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 185 432 l 6 6 6 -6" stroke="#ffcf01" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom branding strip */}
        <text x="158" y="502" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="#1a1f1d" letterSpacing="1.4">IT'S WAITING FOR YOU HERE</text>

        {/* Lower black accent curve continuation */}
        <path d="M 50 510 Q 130 530 248 510 L 248 520 Q 130 540 50 520 Z" fill="#1a1f1d" opacity="0.18" />

        {/* Wheels */}
        <ellipse cx="80" cy="585" rx="10" ry="6" fill="#1a1f1d" />
        <ellipse cx="218" cy="585" rx="10" ry="6" fill="#1a1f1d" />
        <ellipse cx="320" cy="585" rx="10" ry="6" fill="#1a1f1d" />

        {/* Highlight rim on left edge */}
        <rect x="50" y="70" width="2" height="510" fill="#ffffff" opacity="0.45" />
      </svg>
    </div>
  );
}

Object.assign(window, { MachineRender3D });
