import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="apple-footer">
      {/* Legal Notes Section */}
      <ol className="legal-list">
        <li>
          Apple Intelligence is available in beta. Some features may not be
          available in all regions or languages. For feature and language
          availability and system requirements, see
          <a style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8);" }} href="https://support.apple.com/en-am/121115">
            {" "}
            support.apple.com/en-am/121115
          </a>
          .
        </li>
        <li>
          Display size: The display has rounded corners that follow a beautiful
          curved design, and these corners are within a standard rectangle. When
          measured as a standard rectangular shape, the screen is 6.27 inches
          (iPhone 16 Pro) or 6.86 inches (iPhone 16 Pro Max) diagonally. Actual
          viewable area is less.
        </li>
        <li>
          iPhone 16 Pro and iPhone 16 Pro Max are splash, water, and dust
          resistant and were tested under controlled laboratory conditions with
          a rating of IP68 under IEC standard 60529 (maximum depth of 6 meters
          up to 30 minutes). Splash, water, and dust resistance are not
          permanent conditions. Resistance might decrease as a result of normal
          wear. Do not attempt to charge a wet iPhone; refer to the user guide
          for cleaning and drying instructions. Liquid damage not covered under
          warranty.
        </li>
        <li>
          Clean Up is available in beta on all iPhone 16 models, iPhone 15 Pro,
          iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac with M1 and
          later, as part of an iOS 18, iPadOS 18, and macOS Sequoia update.
        </li>
        <li>
          Visual intelligence is available in iOS 18.2 or later on iPhone 16,
          iPhone 16 Plus, iPhone 16 Pro, and iPhone 16 Pro Max; iOS 18.3 or
          later on iPhone 16e; and iOS 18.4 or later on iPhone 15 Pro and iPhone
          15 Pro Max. Apple Intelligence must be on to use visual intelligence.
        </li>
        <li>
          Battery life increase based on the video playback hours of iPhone 16
          Pro Max compared to iPhone 15 Pro Max.
        </li>
        <li>Accessories sold separately.</li>
        <li>
          Testing conducted by Apple in August 2024 using preproduction iPhone
          16 Pro and iPhone 16 Pro Max units and software, USB-C Charge Cable
          with Apple USB-C Power Adapter (20W Model A2305), and Apple MagSafe
          Chargers (1-meter Model A2580 and 2-meter Model A3250) with Apple
          USB-C Power Adapter (30W Model A2164). Fast-charge testing conducted
          with drained iPhone units. Times measured from the appearance of the
          Apple logo as the unit started up. Charge time varies with settings
          and environmental factors; actual results will vary.
        </li>
        <li>
          All battery claims depend on network configuration and many other
          factors; actual results will vary. Battery has limited recharge cycles
          and may eventually need to be replaced. Battery life and charge cycles
          vary by use and settings. See
          <a href="https://apple.com/am/batteries">
            {" "}
            apple.com/am/batteries
          </a>{" "}
          and
          <a href="https://apple.com/am/iphone/battery.html">
            {" "}
            apple.com/am/iphone/battery.html
          </a>{" "}
          for more information.
        </li>
        <li>
          iPhone 16 and iPhone 16 Pro can detect a severe car crash and call for
          help. Requires a cellular connection or Wi-Fi calling.
        </li>
        <li>On a mass balance allocation.</li>
        <li>
          Breakdown of U.S. retail packaging by weight. Adhesives, inks, and
          coatings are excluded from our calculations of plastic content and
          packaging weight.
        </li>
        <li>
          This increase in boxes we can fit onto a pallet excludes pallets
          shipped to the following locations: U.S., Puerto Rico, U.S. Virgin
          Islands, Guam, and Canada.
        </li>
        <li>
          Requires an iPhone and Apple Watch with second-generation Ultra
          Wideband chip. Ultra Wideband availability varies by region.
        </li>
        <li>
          Battery life claim refers to larger models. All battery claims depend
          on network configuration and many other factors; actual results will
          vary. Battery has limited recharge cycles and may eventually need to
          be replaced. Battery life and charge cycles vary by use and settings.
          See
          <a href="https://apple.com/am/batteries">
            {" "}
            apple.com/am/batteries
          </a>{" "}
          and
          <a href="https://apple.com/am/iphone/battery.html">
            {" "}
            apple.com/am/iphone/battery.html
          </a>{" "}
          for more information.
        </li>
      </ol>

      <p>
        DEATH STRANDING DIRECTOR'S CUT © 2024 Sony Interactive Entertainment
        Inc. / KOJIMA PRODUCTIONS Co., Ltd. / HIDEO KOJIMA. Published by 505
        Games.
      </p>
      <p>
        Features are subject to change. Some features, applications, and
        services may not be available in all regions or all languages and may
        require specific hardware and software. For more information, see
        Feature Availability.
      </p>

      <hr className="footer-divider" />

      {/* Apple breadcrumb line */}
      <div className="footer-breadcrumb">
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
        <span>&gt; iPhone &gt; iPhone 16 Pro</span>
      </div>

      <hr className="footer-divider" />

      {/* Links section */}
      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
        </div>

        <div>
          <h4>Account</h4>
          <a href="#">Manage Your Apple Account</a>
          <a href="#">iCloud.com</a>
        </div>

        <div>
          <h4>Apple Values</h4>
          <a href="#">Privacy</a>
        </div>

        <div>
          <h4>About Apple</h4>
          <a href="#">Investors</a>
          <a href="#">Ethics & Compliance</a>
        </div>
      </div>

      <p className="retailer-text">
        <a style={{ fontSize: "13px" }} href="#" className="retailer-link">
          Find a retailer
        </a>{" "}
        near you.
      </p>

      <hr className="footer-divider" />

      <p className="copyright">
        Copyright © 2025 Apple Inc. All rights reserved.{" "}
        <a style={{ fontSize: "13px" }} href="https://mahmoud-eid-portfolio.netlify.app/">Mahmoud Eid ♥</a>
      </p>
    </footer>
  );
}
