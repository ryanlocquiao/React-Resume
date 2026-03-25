import React, { useRef } from 'react';

/* -- Styles ----------------------------------------------- */
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/panels.css";

/* -- Hooks ------------------------------------------------ */
import { useCursor, useScrollSpy } from "./hooks/usePortfolio";

/* -- Data ------------------------------------------------- */
import { PROJECTS, NAV_LABELS, OWNER } from './data/portfolioData';

/* -- Components ------------------------------------------- */
import Cursor                 from './components/Cursor';
import { Navbar, ScrollDots } from './components/Navigation';
import HeroPanel              from './components/HeroPanel';
import ProjectPanel           from './components/ProjectPanel';
import AboutPanel             from './components/AboutPanel';

/* --------------------------------------------------------------------------
   Total Panel Count: 1 hero + N projects + 1 about
   -------------------------------------------------------------------------- */
const PANEL_COUNT = 1 + PROJECTS.length + 1;

export default function App() {
  const scrollRef = useRef(null);
  const cursor = useCursor();
  const { activeIndex, revealed, scrollTo, panelRefs } = useScrollSpy(PANEL_COUNT, scrollRef);

  return (
    <>
      <Cursor x={cursor.x} y={cursor.y} big={cursor.big} />

      <Navbar 
        labels={NAV_LABELS}
        activeIndex={activeIndex}
        scrollTo={scrollTo}
      />

      <ScrollDots
        count={PANEL_COUNT}
        activeIndex={activeIndex}
        scrollTo={scrollTo}
      />

      <footer className="footer">
        <span>{OWNER.firstName} {OWNER.lastName} · Portfolio</span>
        <span>{OWNER.location} · {new Date().getFullYear}</span>
      </footer>

      <div className="scroller" ref={scrollRef}>

        <div ref={panelRefs(0)}>
          <HeroPanel revealed={revealed.has(0)} />
        </div>

        {PROJECTS.map((project, i) => {
          const panelIndex = i + 1;
          return (
            <div key={project.title} ref={panelRefs(panelIndex)}>
              <ProjectPanel
                project={project}
                index={i}
                revealed={revealed.has(panelIndex)}
              />
            </div>
          );
        })}

        <div ref={panelRefs(PANEL_COUNT - 1)}>
          <AboutPanel revealed={revealed.has(PANEL_COUNT - 1)} />
        </div>

      </div>
    </>
  );
}