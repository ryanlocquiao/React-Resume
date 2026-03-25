import React from 'react';
import { OWNER } from "../data/portfolioData";

const ABOUT_BG = "https://images.unsplash.com/photo-1632823470190-d6e7bb8b8e2e?w=1800&q=80";

export default function AboutPanel({ revealed }) {
    const rv = (delay = "") => ["rv", delay, revealed ? "show" : ""].filter(Boolean).join(" ");

    return (
        <div className="panel">
            <div
                style={{
                    position:           "absolute",
                    inset:              0,
                    backgroundImage:    `url('${ABOUT_BG}')`,
                    backgroundSize:     "cover",
                    backgroundPosition: "left center",
                }} 
            />
            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        linear-gradient(
                            to right,
                            rgba(6, 6, 8, 0.04) 0%,
                            rgba(6, 6, 8, 0.35) 38%,
                            rgba(6, 6, 8, 0.82) 56%,
                            rgba(6, 6, 8, 0.97) 70%,
                            #060608             100%
                        ),
                        linear-gradient(
                            to top,
                            #060608             0%,
                            rgba(6, 6, 6, 0.65) 22%,
                            transparent           55%
                        )
                    `,
                }} 
            />
            <div
                style={{
                    position: "absolute",
                    right: "3.5rem",
                    bottom: "4.5rem",
                    zIndex: 2,
                    maxWidth: "480px",
                    textAlign: "right",
                }}
            >
                <p
                    className={`${rv()} hero-eyebrow`}
                    style={{ textAlign: "right" }}
                >
                    About Me
                </p>
                <h2 className={`${rv("d1")} about-headline`}>
                    {OWNER.firstName.toUpperCase()}
                    <br />
                    <span style={{ color : "var(--red" }}>
                        {OWNER.lastName.toLocaleUpperCase()}
                    </span>
                </h2>
                <p className={`${rv("d2")} about-bio`}>
                    {OWNER.bio}
                </p>
                <div className={`${rv("d3")} about-grid`}>
                    {OWNER.details.map(({ label, value }) => (
                        <div key={label}>
                            <div className="ag-label">{label}</div>
                            <div className="ag-val">{value}</div>
                        </div>
                    ))}
                </div>
                <div className={`${rv("d4")} about-links`}>
                    <a href={`mailto:${OWNER.email}`} className="alink">
                        Email
                    </a>
                    <a href={OWNER.github} className="alink" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href={OWNER.linkedin} className="alink" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href={`mailto:${OWNER.email}`} className="alink" download>
                        Resume ↓
                    </a>
                </div>
            </div>
        </div>
    );
}