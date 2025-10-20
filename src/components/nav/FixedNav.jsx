import { useState } from "react";
import "./FixedNav.css";

const NAV_ITEMS = [
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Support",
  "Where to Buy",
].map((label) => ({ label }));

export default function FixedNav({ visible = true }) {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg py-0 w-100 fixed-nav ${visible ? 'visible' : 'hidden'}`}
      aria-label="Global"
    >
      <div className="container-fluid nav-glow">
        <div className="d-flex align-items-center justify-content-between w-100" style={{ minHeight: 44 }}>
          <a
            className="navbar-brand px-2"
            href="#"
            aria-label="Apple"
          >
            <svg
              className="globalnav-logo"
              width="14"
              height="44"
              viewBox="0 0 14 44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="globalnav-logo-regular"
                fill="rgb(245, 245, 247)"
                d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
              />
              <path
                className="globalnav-logo-compact"
                fill="rgb(245, 245, 247)"
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              />
            </svg>
          </a>

          {/* Desktop links */}
          <ul className="navbar-nav d-none d-lg-flex mx-auto mb-0 gap-lg-3 flex-lg-row">
            {NAV_ITEMS.map(({ label }) => (
              <li key={label} className="nav-item">
                <a className="nav-link nav-glow" href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: search + toggler (mobile) */}
          <div className="d-flex align-items-center">
            <div className="nav-glow">
              <a
                className="nav-link px-2"
                href="#"
                aria-label="Search apple.com"
                style={{ height: 35, display: "flex" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="44"
                  viewBox="0 0 15 44"
                  aria-hidden="true"
                >
                  <path
                    fill="rgb(245, 245, 247)"
                    d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile menu toggler */}
            <button
              className="d-lg-none border-0 bg-transparent px-2"
              aria-label="Toggle navigation"
              onClick={() => setShowMobile((v) => !v)}
              style={{ height: 44, display: "flex", alignItems: "center" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <polyline
                  fill="none"
                  stroke="rgb(245, 245, 247)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={showMobile ? "3.5 15, 15 3.5" : "2 12, 16 12"}
                ></polyline>
                <polyline
                  fill="none"
                  stroke="rgb(245, 245, 247)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={showMobile ? "3.5 3.5, 15 15" : "2 5, 16 5"}
                ></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu tray */}
        {showMobile && (
          <div className="d-lg-none mobile-menu">
            <ul className="list-unstyled mb-0 py-1">
              {NAV_ITEMS.map(({ label }) => (
                <li key={`m-${label}`}>
                  <a className="d-block px-3 py-2 nav-glow" href="#">
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