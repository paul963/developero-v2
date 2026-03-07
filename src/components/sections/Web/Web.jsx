import { useState, useEffect } from "react";
import "./Web.css";
import TabWebsite from "./TabWebsite";
import TabEcommerce from "./TabEcommerce";
import TabOther from "./TabOther";

const tabs = ["Site de Prezentare", "Magazin Online", "Alte Servicii"];

const Web = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Sliding indicator
  useEffect(() => {
    const header = document.querySelector(".tab-header");
    if (!header) return;
    const activeItem = header.querySelectorAll(".tab-list-item")[activeTab];
    if (!activeItem) return;

    header.style.setProperty("--indicator-width", `${activeItem.offsetWidth}px`);
    header.style.setProperty("--indicator-offset", `${activeItem.offsetLeft}px`);
  }, [activeTab]);

  // Shiny mouse effect
  useEffect(() => {
    const cards = document.querySelectorAll(".tab-content");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => card.addEventListener("mousemove", handleMouseMove));
    return () => cards.forEach((card) => card.removeEventListener("mousemove", handleMouseMove));
  }, [activeTab]);

  // Viewport entrance animation for first tab panel
  useEffect(() => {
    const panel = document.querySelector(".tab-panel-item.active");
    if (!panel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            panel.querySelectorAll(".grid-item").forEach((item) => {
              item.classList.add("animate");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section className="web-services section-py" id="web">
      <div className="container web">
        <div className="supra-title">Servicii</div>
        <h2 className="text-center">Website</h2>
        <div className="tab-wrapper">
          <div className="tab-header bg-dark">
            {tabs.map((tab, index) => (
              <div key={index} className={`tab-list-item ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
                {tab}
              </div>
            ))}
          </div>
          <div className="tab-panel">
            <div className={`tab-panel-item ${activeTab === 0 ? "active" : ""}`}>
              <TabWebsite />
            </div>
            <div className={`tab-panel-item ${activeTab === 1 ? "active" : ""}`}>
              <TabEcommerce />
            </div>
            <div className={`tab-panel-item ${activeTab === 2 ? "active" : ""}`}>
              <TabOther />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;
