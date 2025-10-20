import { useState } from "react";

export default function StickyNav({ visible = false }) {
  const [showMobile] = useState(false);

  const items = [
    { key: "overview", label: "Overview", href: "#", active: true },
    { key: "tech", label: "Tech Specs", href: "#" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg py-0 w-100"
      aria-label="Local"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1025,
        backgroundColor: " hsla(240, 3.30%, 11.80%, 70%)",
        borderBottom: "1px solid #655c5c",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 450ms ease",
      }}
    >
      {/* Hover glow + transitions (scoped to this nav) */}
      {/* Customize: change --glow-color, --glow-blur, and --transition-speed to your preference */}
      <style>
        {`
          .nav-glow a, .nav-glow .nav-link, .nav-glow .btn {
            transition: color var(--transition-speed, 200ms) ease, text-shadow var(--transition-speed, 200ms) ease;
          }
          .nav-glow a:hover, .nav-glow .nav-link:hover, .nav-glow .btn:hover {
            color: var(--hover-color, #ffffff) !important;
            text-shadow: 0 0 var(--glow-blur, 2px) var(--glow-color, #ffffff);
          }
        `}
      </style>

      <div className="container-fluid nav-glow" style={{ maxWidth: 1020, padding: "2px 5px 0 15px", "--glow-color": "#ffffffff", "--hover-color": "#ffffffff", "--transition-speed": "500ms", "--link-button-gap": "50px" }}>
        <div className="d-flex" style={{ minHeight: 44, gap: 15, justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
          <div className="navbar-brand px-2" style={{ color: "#ffffffff" }}>
            <a href="#" style={{ color: "#edededff", textDecoration: "none", fontWeight: "bold", fontSize: "20px" }}>
              iPhone 16 Pro
            </a>
          </div>

          {/* Right group: links + button aligned to the right */}
          <div className="d-none d-lg-flex" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--link-button-gap)" }}>
            <ul className="mb-0 list-unstyled" style={{ gap: 20, display: "flex" }}>
              {items.map(({ key, label, href = "#", active = false }) => (
                <li key={key} className="nav-item">
                  <a
                    className="nav-link nav-glow d-inline-flex"
                    href={href}
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      height: 44,
                      boxSizing: "border-box",
                      padding: "0 5px 0 10px",
                      borderBottom: active ? `1.5px solid #ffffff` : "none",
                      cursor: active ? "auto" : "pointer",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a className="btn btn-sm" href="#" style={{ backgroundColor: "#0071e3", color: "#ccffff", borderRadius: "900px", alignSelf: "center" }}>
              Buy
            </a>
          </div>
        </div>

        {/* Mobile menu tray */}
        {showMobile && (
          <div className="d-lg-none" style={{ borderTop: "1px solid #2f2f31" }}>
            <ul className="list-unstyled mb-0 py-1">
              {items.map(({ key, label, href = "#" }) => (
                <li key={`m-${key}`}>
                  <a className="d-block px-3 py-2 nav-glow" href={href} style={{ color: "#ffffff", textDecoration: "none" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


