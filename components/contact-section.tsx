"use client";

import { useEffect, useState } from "react";

const STAGES = [
  {
    id: 0,
    label: "⬜ Wireframe",
    pill: "Wireframe",
    accent: "#818cf8",
    bg: "#6366f120",
    border: "#6366f140",
    progress: 15,
    status: "Wireframing structure...",
    cursor: "#6366f1",
  },
  {
    id: 1,
    label: "🎨 Coloring",
    pill: "Colors & Brand",
    accent: "#ec4899",
    bg: "#ec489920",
    border: "#ec489940",
    progress: 45,
    status: "Applying brand colors...",
    cursor: "#ec4899",
  },
  {
    id: 2,
    label: "✍ Typography",
    pill: "Typography",
    accent: "#10b981",
    bg: "#10b98120",
    border: "#10b98140",
    progress: 72,
    status: "Setting content & type...",
    cursor: "#10b981",
  },
  {
    id: 3,
    label: "✨ Final Polish",
    pill: "Live Ready",
    accent: "#f59e0b",
    bg: "#f59e0b20",
    border: "#f59e0b40",
    progress: 100,
    status: "Complete — Ready to deploy!",
    cursor: "#f59e0b",
  },
];

const CURSOR_MOVES = [
  { x: 180, y: 60, label: "Selecting", sel: { l: 10, t: 38, w: 360, h: 38 } },
  { x: 50, y: 90, label: "Placing", sel: { l: 10, t: 78, w: 100, h: 14 } },
  { x: 200, y: 155, label: "Drawing", sel: { l: 10, t: 138, w: 310, h: 80 } },
  { x: 100, y: 265, label: "Card", sel: { l: 10, t: 252, w: 108, h: 78 } },
  { x: 280, y: 385, label: "Stats", sel: { l: 10, t: 360, w: 358, h: 54 } },
  { x: 190, y: 446, label: "Footer", sel: { l: 0, t: 418, w: 380, h: 36 } },
];

const LAYERS = [
  { name: "Navbar", type: "Frame", color: "#6366f1" },
  { name: "Hero Tag", type: "Text", color: "#818cf8" },
  { name: "Heading", type: "Text", color: "#818cf8" },
  { name: "Subtext", type: "Text", color: "#475569" },
  { name: "CTA Buttons", type: "Group", color: "#ec4899" },
  { name: "Hero Image", type: "Image", color: "#10b981" },
  { name: "Cards Row", type: "Frame", color: "#f59e0b" },
  { name: "Stats", type: "Frame", color: "#3b82f6" },
  { name: "Footer", type: "Frame", color: "#6366f1" },
];

interface CanvasState {
  navBg: string;
  navLogoBg: string;
  navCtaBg: string;
  heroTagBg: string;
  heroTagText?: string;
  h1aBg: string;
  h1aText?: string;
  h1bBg: string;
  h1bText?: string;
  subBg: string;
  subText?: string;
  btn1Bg: string;
  btn1Text?: string;
  btn2Border: string;
  btn2Text?: string;
  heroImgBg: string;
  cardBg: string;
  cardIcoColors: string[];
  cardText: string;
  cardSub: string;
  statBg: string;
  statValues?: string[];
  statLabels?: string[];
  statNBg: string;
  statLBg: string;
  footerBg: string;
  fillColor: string;
  fillLabel: string;
}

const CANVAS_STATES: CanvasState[] = [
  {
    navBg: "#1e293b40",
    navLogoBg: "#334155",
    navCtaBg: "#334155",
    heroTagBg: "#334155",
    h1aBg: "#334155",
    h1bBg: "#334155",
    subBg: "#1e293b",
    btn1Bg: "#334155",
    btn2Border: "#334155",
    heroImgBg: "#1e293b",
    cardBg: "#1e293b40",
    cardIcoColors: ["#334155", "#334155", "#334155"],
    cardText: "#334155",
    cardSub: "#1e293b",
    statBg: "#1e293b40",
    statNBg: "#334155",
    statLBg: "#1e293b",
    footerBg: "#1e293b40",
    fillColor: "#334155",
    fillLabel: "#334155",
  },
  {
    navBg: "#0f172a",
    navLogoBg: "#6366f1",
    navCtaBg: "#6366f1",
    heroTagBg: "#6366f130",
    h1aBg: "#f1f5f9",
    h1bBg: "#818cf8",
    subBg: "#64748b",
    btn1Bg: "#6366f1",
    btn2Border: "#6366f1",
    heroImgBg: "#1e1b4b",
    cardBg: "#0f172a",
    cardIcoColors: ["#6366f1", "#ec4899", "#10b981"],
    cardText: "#e2e8f0",
    cardSub: "#475569",
    statBg: "#0f172a",
    statNBg: "#6366f1",
    statLBg: "#475569",
    footerBg: "#030712",
    fillColor: "#6366f1",
    fillLabel: "#6366f1",
  },
  {
    navBg: "#0f172a",
    navLogoBg: "#6366f1",
    navCtaBg: "#6366f1",
    heroTagBg: "#6366f130",
    heroTagText: "⚡ Web Design Agency",
    h1aBg: "#f1f5f9",
    h1aText: "Grow Your Business",
    h1bBg: "#818cf8",
    h1bText: "With Better Design",
    subBg: "#64748b",
    subText: "We craft websites that convert visitors",
    btn1Bg: "#6366f1",
    btn1Text: "Get Started →",
    btn2Border: "#6366f1",
    btn2Text: "View Work",
    heroImgBg: "#1e1b4b",
    cardBg: "#0f172a",
    cardIcoColors: ["#6366f1", "#ec4899", "#10b981"],
    cardText: "#e2e8f0",
    cardSub: "#475569",
    statBg: "#0f172a",
    statNBg: "#6366f1",
    statLBg: "#475569",
    footerBg: "#030712",
    fillColor: "#10b981",
    fillLabel: "#10b981",
  },
  {
    navBg: "#0f172a",
    navLogoBg: "#6366f1",
    navCtaBg: "#6366f1",
    heroTagBg: "#6366f130",
    heroTagText: "⚡ Web Design Agency",
    h1aBg: "#f1f5f9",
    h1aText: "Grow Your Business",
    h1bBg: "#818cf8",
    h1bText: "With Better Design",
    subBg: "#64748b",
    subText: "We craft websites that convert visitors",
    btn1Bg: "#6366f1",
    btn1Text: "Get Started →",
    btn2Border: "#6366f1",
    btn2Text: "View Work",
    heroImgBg: "#1e1b4b",
    cardBg: "#0f172a",
    cardIcoColors: ["#6366f1", "#ec4899", "#10b981"],
    cardText: "#e2e8f0",
    cardSub: "#475569",
    statBg: "#0f172a",
    statValues: ["150+", "4.9★", "100%"],
    statLabels: ["Projects", "Rating", "Custom"],
    statNBg: "#6366f1",
    statLBg: "#475569",
    footerBg: "#030712",
    fillColor: "#f59e0b",
    fillLabel: "#f59e0b",
  },
];

export default function WebDesignSection() {
  const [stage, setStage] = useState(0);
  const [cursorIdx, setCursorIdx] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const st = STAGES[stage];
  const cs = CANVAS_STATES[stage];
  const cursor = CURSOR_MOVES[cursorIdx];

  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCursorIdx((i) => (i + 1) % CURSOR_MOVES.length);
      setActiveLayer((i) => (i + 1) % LAYERS.length);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  return (
    <section className="py-24 px-4" style={{ background: "#060612" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: "#6366f115", color: "#818cf8", border: "1px solid #6366f130" }}
          >
            Our Design Process
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#f8fafc", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Watch Us Design{" "}
            <span style={{ color: st.accent, transition: "color 0.8s ease" }}>
              In Real Time
            </span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>
            From bare wireframe to pixel-perfect live website — see every step.
          </p>
        </div>

        {/* Studio Window */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{ background: "#1a1a2e", border: "1px solid #1e293b", maxWidth: 960 }}
        >
          {/* Title Bar */}
          <div
            style={{
              background: "#16213e",
              height: 38,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "0 14px",
              borderBottom: "1px solid #0f3460",
            }}
          >
            {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <span style={{ fontSize: 11, color: "#64748b", marginLeft: 8, flex: 1 }}>
              CodedSEO — Design Studio
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 10,
                background: st.bg,
                color: st.accent,
                border: `1px solid ${st.border}`,
                transition: "all 0.5s",
              }}
            >
              {st.pill}
            </span>
          </div>

          {/* Studio Body */}
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 130px", height: 480 }}>
            {/* Left: Layers Panel */}
            <div
              style={{
                background: "#0f172a",
                borderRight: "1px solid #1e293b",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", color: "#475569", padding: "10px 10px 6px", textTransform: "uppercase" }}>
                Layers
              </div>
              {LAYERS.map((l, i) => (
                <div
                  key={l.name}
                  onClick={() => setActiveLayer(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "5px 10px",
                    cursor: "pointer",
                    background: i === activeLayer ? "#1e293b" : "transparent",
                    transition: "background .2s",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: `${l.color}50`,
                      border: `1px solid ${l.color}`,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 10, color: "#94a3b8" }}>{l.name}</span>
                  <span style={{ fontSize: 8, color: "#475569", marginLeft: "auto" }}>{l.type}</span>
                </div>
              ))}

              {/* Tools */}
              <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 4, borderTop: "1px solid #1e293b", marginTop: "auto" }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", color: "#475569", textTransform: "uppercase", marginBottom: 6 }}>Tools</div>
                {["Select", "Frame", "Text", "Shape"].map((t, i) => (
                  <div
                    key={t}
                    style={{
                      background: i === 0 ? "#6366f120" : "#1e293b",
                      border: `1px solid ${i === 0 ? "#6366f140" : "#334155"}`,
                      borderRadius: 6,
                      padding: "4px 8px",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ width: 14, height: 14, borderRadius: 3, background: i === 0 ? "#6366f130" : "#334155", flexShrink: 0 }} />
                    <span style={{ fontSize: 9, color: i === 0 ? "#818cf8" : "#64748b" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Canvas */}
            <div
              style={{
                background: "#111827",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  background: "#060b18",
                  borderRadius: 4,
                  width: "100%",
                  maxWidth: 380,
                  height: 430,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #1e293b",
                }}
              >
                {/* Stage Label */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 8,
                    zIndex: 10,
                    background: st.bg,
                    color: st.accent,
                    border: `1px solid ${st.border}`,
                    transition: "all 0.5s",
                  }}
                >
                  {st.label}
                </div>

                {/* Navbar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 38,
                    background: cs.navBg,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    gap: 10,
                    transition: "all 0.5s",
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: 4, background: cs.navLogoBg, flexShrink: 0, transition: "all 0.5s" }} />
                  <div style={{ display: "flex", gap: 8 }}>
                    {[22, 22, 22].map((w, i) => (
                      <div key={i} style={{ width: w, height: 5, borderRadius: 3, background: "#334155", transition: "all 0.5s" }} />
                    ))}
                  </div>
                  <div style={{ marginLeft: "auto", height: 20, width: 55, borderRadius: 10, background: cs.navCtaBg, transition: "all 0.5s" }} />
                </div>

                {/* Hero */}
                <div style={{ position: "absolute", top: 44, left: 0, right: 0, padding: "14px 14px 0" }}>
                  <div
                    style={{ height: 12, borderRadius: 6, width: 90, marginBottom: 8, background: cs.heroTagBg, display: "flex", alignItems: "center", paddingLeft: 8, transition: "all 0.5s" }}
                  >
                    {cs.heroTagText && <span style={{ fontSize: 7, color: "#818cf8", fontWeight: 700, whiteSpace: "nowrap" }}>{cs.heroTagText}</span>}
                  </div>
                  <div style={{ height: 14, borderRadius: 4, width: "90%", marginBottom: 5, background: cs.h1aBg, display: "flex", alignItems: "center", paddingLeft: 4, transition: "all 0.5s" }}>
                    {cs.h1aText && <span style={{ fontSize: 11, fontWeight: 800, color: "#f8fafc" }}>{cs.h1aText}</span>}
                  </div>
                  <div style={{ height: 14, borderRadius: 4, width: "70%", marginBottom: 10, background: cs.h1bBg, display: "flex", alignItems: "center", paddingLeft: 4, transition: "all 0.5s" }}>
                    {cs.h1bText && <span style={{ fontSize: 11, fontWeight: 800, color: "#f8fafc" }}>{cs.h1bText}</span>}
                  </div>
                  <div style={{ height: 6, borderRadius: 3, width: "85%", marginBottom: 4, background: cs.subBg, display: "flex", alignItems: "center", paddingLeft: 4, transition: "all 0.5s" }}>
                    {cs.subText && <span style={{ fontSize: 6, color: "#94a3b8", whiteSpace: "nowrap" }}>{cs.subText}</span>}
                  </div>
                  <div style={{ height: 6, borderRadius: 3, width: "55%", marginBottom: 12, background: cs.subBg, transition: "all 0.5s" }} />
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <div style={{ height: 22, borderRadius: 11, width: 85, background: cs.btn1Bg, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.5s" }}>
                      {cs.btn1Text && <span style={{ fontSize: 7, color: "#fff", fontWeight: 700 }}>{cs.btn1Text}</span>}
                    </div>
                    <div style={{ height: 22, borderRadius: 11, width: 72, background: "transparent", border: `1px solid ${cs.btn2Border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.5s" }}>
                      {cs.btn2Text && <span style={{ fontSize: 7, color: "#818cf8" }}>{cs.btn2Text}</span>}
                    </div>
                  </div>
                  <div style={{ height: 75, borderRadius: 8, width: "100%", background: cs.heroImgBg, transition: "all 0.5s" }} />
                </div>

                {/* Cards */}
                <div style={{ position: "absolute", top: 252, left: 0, right: 0, display: "flex", gap: 8, padding: "0 14px" }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{ flex: 1, borderRadius: 8, padding: 8, background: cs.cardBg, border: `1px solid ${cs.cardBg === "#0f172a" ? "#1e293b" : "transparent"}`, transition: "all 0.5s" }}
                    >
                      <div style={{ width: 20, height: 20, borderRadius: 5, background: cs.cardIcoColors[i], marginBottom: 6, transition: "all 0.5s" }} />
                      <div style={{ height: 7, borderRadius: 3, width: "80%", background: cs.cardText, marginBottom: 4, transition: "all 0.5s" }} />
                      <div style={{ height: 5, borderRadius: 3, width: "60%", background: cs.cardSub, transition: "all 0.5s" }} />
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ position: "absolute", top: 360, left: 0, right: 0, display: "flex", gap: 6, padding: "0 14px" }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ flex: 1, borderRadius: 6, padding: 7, background: cs.statBg, textAlign: "center", transition: "all 0.5s" }}>
                      <div style={{ height: 10, borderRadius: 4, width: "60%", margin: "0 auto 4px", background: cs.statValues ? "transparent" : cs.statNBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.5s" }}>
                        {cs.statValues && <span style={{ fontSize: 8, fontWeight: 800, color: "#fff" }}>{cs.statValues[i]}</span>}
                      </div>
                      <div style={{ height: 5, borderRadius: 3, width: "80%", margin: "0 auto", background: cs.statLabels ? "transparent" : cs.statLBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.5s" }}>
                        {cs.statLabels && <span style={{ fontSize: 6, color: "#94a3b8" }}>{cs.statLabels[i]}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 36, background: cs.footerBg, display: "flex", alignItems: "center", padding: "0 14px", gap: 12, transition: "all 0.5s" }}>
                  <div style={{ height: 8, width: 40, borderRadius: 4, background: "#334155" }} />
                  <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
                    {[24, 24, 24].map((w, i) => (
                      <div key={i} style={{ height: 5, width: w, borderRadius: 3, background: "#334155" }} />
                    ))}
                  </div>
                </div>

                {/* Cursor */}
                <div
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
                    zIndex: 20,
                    transform: `translate(${cursor.x}px, ${cursor.y}px)`,
                    transition: "transform 1.4s cubic-bezier(.25,.46,.45,.94)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <polygon points="1,1 1,14 5,10 8,17 10,16 7,9 13,9" fill={st.cursor} stroke="#fff" strokeWidth=".8" />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: 16,
                      top: -2,
                      background: st.cursor,
                      color: "#fff",
                      fontSize: 8,
                      padding: "2px 6px",
                      borderRadius: 8,
                      whiteSpace: "nowrap",
                      fontWeight: 700,
                      transition: "background 0.5s",
                    }}
                  >
                    {cursor.label}
                  </span>
                </div>

                {/* Selection Box */}
                <div
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
                    zIndex: 15,
                    left: cursor.sel.l,
                    top: cursor.sel.t,
                    width: cursor.sel.w,
                    height: cursor.sel.h,
                    border: "1.5px dashed #6366f1",
                    borderRadius: 3,
                    boxShadow: "0 0 0 1px #6366f120",
                    opacity: 0.8,
                    transition: "all 0.6s",
                  }}
                />
              </div>
            </div>

            {/* Right: Properties Panel */}
            <div style={{ background: "#0f172a", borderLeft: "1px solid #1e293b", padding: 10, overflowY: "auto" }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", color: "#475569", marginBottom: 8, textTransform: "uppercase" }}>Properties</div>
              {[["X", cursor.sel.l], ["Y", cursor.sel.t], ["W", cursor.sel.w], ["H", cursor.sel.h]].map(([label, val]) => (
                <div key={label as string} style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                  <span style={{ fontSize: 9, color: "#64748b" }}>{label}</span>
                  <span style={{ fontSize: 9, color: "#818cf8", background: "#1e293b", padding: "2px 6px", borderRadius: 4, fontWeight: 600 }}>{val}</span>
                </div>
              ))}

              <div style={{ borderTop: "1px solid #1e293b", paddingTop: 8, marginTop: 8 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", color: "#475569", marginBottom: 8, textTransform: "uppercase" }}>Fill</div>
                <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 8 }}>
                  {["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#3b82f6", "#8b5cf6"].map((c) => (
                    <div key={c} style={{ width: 14, height: 14, borderRadius: 3, background: c, cursor: "pointer" }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: cs.fillColor, border: "1px solid #334155", transition: "background 0.5s" }} />
                  <span style={{ fontSize: 9, color: "#818cf8", background: "#1e293b", padding: "2px 6px", borderRadius: 4, fontWeight: 600, transition: "all 0.5s" }}>{cs.fillLabel}</span>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #1e293b", paddingTop: 8, marginTop: 8 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", color: "#475569", marginBottom: 8, textTransform: "uppercase" }}>Progress</div>
                <div style={{ fontSize: 9, color: "#64748b", marginBottom: 4 }}>{st.status}</div>
                <div style={{ background: "#1e293b", borderRadius: 10, height: 4, overflow: "hidden", marginBottom: 4 }}>
                  <div style={{ height: "100%", borderRadius: 10, background: st.accent, width: `${st.progress}%`, transition: "width 0.8s ease" }} />
                </div>
                <div style={{ fontSize: 9, color: "#475569", textAlign: "right" }}>{st.progress}%</div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div
            style={{
              background: "#0a0f1e",
              borderTop: "1px solid #1e293b",
              height: 24,
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 16,
            }}
          >
            {[
              { dot: "#22c55e", label: "Auto-saving" },
              { dot: st.accent, label: `Stage ${stage + 1}/4` },
            ].map(({ dot, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#475569" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot }} />
                {label}
              </div>
            ))}
            <div style={{ marginLeft: "auto", fontSize: 9, color: "#475569" }}>100%</div>
            <div style={{ fontSize: 9, color: "#475569" }}>
              {mins}:{secs < 10 ? "0" : ""}{secs}
            </div>
          </div>
        </div>

        {/* Stage Pills below */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStage(i)}
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: 20,
                border: `1px solid ${i === stage ? s.border : "#1e293b"}`,
                background: i === stage ? s.bg : "transparent",
                color: i === stage ? s.accent : "#475569",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}