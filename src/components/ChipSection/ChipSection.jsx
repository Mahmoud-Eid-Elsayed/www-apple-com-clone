import "./ChipSection.css";

function ChipSection() {
  return (
    <section className="chip-section-container bg-black w-full">
      <div className="chip-section-wrapper mx-auto max-w-[980px] w-full px-4">
        <section className="section-chip-filter theme-dark text-center">
          <div className="glow-text" aria-hidden="true">
            <span className="glow-protruding">A18&nbsp;Pro chip.</span>
          </div>
        </section>
        <section className="section-chip-headline theme-dark text-center">
          <div className="chip-content" style={{ marginTop: "50px" }}>
            <h3 className="headline typography-ps-headline-super">
              A&nbsp;colossally capable&nbsp;chip.
            </h3>
          </div>
        </section>
        <section className="section-chip-description theme-dark text-center">
          <div className="chip-content">
            <p className="copy ps-swatch-secondary typography-ps-intro-semibold">
              Enter A18&nbsp;Pro: a{" "}
              <strong className="text-white font-bold">
                phenomenally powerful chip
              </strong>{" "}
              that brings exceptional speed and efficiency to
              iPhone&nbsp;16&nbsp;Pro. It also drives advanced video and photo
              features like Camera&nbsp;Control — and delivers outstanding
              graphics perform­ance for <br /> AAA&nbsp;gaming.
            </p>
          </div>
        </section>
        <section className="section-chip-callouts theme-dark">
          <div className="callouts w-full py-12 px-4">
            <div className="callouts-grid">
              <div className="callout-item">
                <hr className="border-t border-[#86868b] w-full mb-2" />
                <p className="callout-copy text-[#86868b] text-[18px] md:text-[24px] leading-[1.333] font-semibold font-['SF_Pro_Text',_'SF_Pro_Icons',_'Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif]">
                  <strong className="text-white font-bold">New 16-core</strong>
                  <br />
                  <strong className="text-white">Neural Engine</strong> makes
                  on-
                  <br />
                  device intelligence faster <br />
                  and more efficient
                </p>
              </div>
              <div className="callout-item">
                <hr className="border-t border-[#86868b] w-full mb-2" />
                <p className="callout-copy text-[#86868b] text-[18px] md:text-[24px] leading-[1.333] font-semibold font-['SF_Pro_Text',_'SF_Pro_Icons',_'Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif]">
                  <strong className="text-white font-bold">
                    New 6-core GPU
                  </strong>
                  <br />
                  gives you enhanced graphics
                  <br />
                  performance
                </p>
              </div>
              <div className="callout-item">
                <hr className="border-t border-[#ffffff] w-full mb-2" />
                <p className="callout-copy text-[#86868b] text-[18px] md:text-[24px] leading-[1.333] font-semibold font-['SF_Pro_Text',_'SF_Pro_Icons',_'Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif]">
                  <strong className="text-white font-bold">
                    New 6-core CPU
                  </strong>
                  ,<br />
                  the fastest in a smart­phone, <br />
                  runs complex workloads with <br />
                  less power
                </p>
              </div>
              <div className="callout-item">
                <hr className="border-t border-[#86868b] w-full mb-2" />
                <p className="callout-copy text-[#86868b] text-[18px] md:text-[24px] leading-[1.333] font-semibold font-['SF_Pro_Text',_'SF_Pro_Icons',_'Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif]">
                  <strong className="text-white font-bold">
                    Nearly 20% increase in total system memory bandwidth
                  </strong>
                  , the highest ever in iPhone, for <br />
                  outstanding performance
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ChipSection;
