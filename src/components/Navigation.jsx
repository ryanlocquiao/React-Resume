import React from 'react';
import { OWNER } from '../data/portfolioData';

const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 500,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.6rem 3.5rem",
    background: "linear-gradient(to bottom, rgba(6, 6, 6, 0.75) 0%, transparent 100%)",
    backdropFilter: "blur(4px)",
};

export function Navbar({ labels, activeIndex, scrollTo }) {
    return (
        <nav style={navStyle}>
            <span style={{
                fontFamily: "var(--ff-display)",
                fontSize: "1.4rem",
                fontWeight: 900,
                letterSpacing: "0.16rem",
                color: "var(--offwhite)",
            }}>
                {OWNER.initials[0]}
                <span style={{ color: "var(--red)" }}>.</span>
                {OWNER.initials.slice(1)}
            </span>

            <div style={{ display: "flex", gap: "0.5rem"}}>
                {labels.map((label, i) => (
                    <NavPill
                        key={label}
                        label={label}
                        active={activeIndex === i}
                        onClick={() => scrollTo(i)}
                    />
                ))}
            </div>
        </nav>
    );
}

function NavPill({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                fontFamily:     "var(--ff-mono)",
                fontSize:       "0.58rem",
                letterSpacing:  "0.18em",
                textTransform:  "uppercase",
                background:     active ? "var(--red-dim)" : "transparent",
                border:         `1px solid ${active ? "var(--red)" : "rgba(237, 232, 223, 0.15)"}`,
                color:          active ? "var(--offwhite)" : "var(--bone)",
                padding:        "0.28rem 0.8rem",
                borderRadius:   "100px",
                cursor:         "none",
                transition:     "border-color 0.2s, color 0.2s, background 0.2s",
            }}
        >
            {label}
        </button>
    );
}

export function ScrollDots({ count, activeIndex, scrollTo }) {
    return (
        <div style={{
            position:       "fixed",
            right:          "2.5rem",
            top:            "50%",
            transform:      "translateY(-50%)",
            zIndex:         500,
            display:        "flex",
            flexDirection:  "column",
            gap:            "0.7rem",
        }}>
            {Array.from({ length: count }, (_, i) => (
                <div key={i}
                data-hover
                style={{
                    width:          6,
                    height:         6,
                    borderRadius:   "50%",
                    cursor:         "none",
                    transition:     "background 0.3s, transform 0.3s",
                    background:     activeIndex === i ? "var(--red)" : "rgba(237, 232, 223, 0.25)",
                    transform:      activeIndex === i ? "scale(1.55)" : "scale(1)",
                }}
                />
            ))}
        </div>
    );
}