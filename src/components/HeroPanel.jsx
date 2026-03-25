import React from 'react';
import { OWNER } from '../data/portfolioData';

const HERO_BG = "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=1800&q=80"; /** Placeholder IMG */

export default function HeroPanel({ revealed }) {
    const rv = (delay = "") => ["rv", delay, revealed ? "show" : ""].filter(Boolean).join(" ");

    return (
        <div className="panel">
            <div className="bg" style={{ backgroundImage: `url('${HERO_BG}')` }} />
            <div className="overlay" />
            <div className="content" style={{ paddingBottom: "5rem" }}>
                <p className={`${rv()} hero-eyebrow`}>
                    Software Engineer · Builder · Student
                </p>
                <h1 className={`${rv("d1")} hero-name`}>
                    {OWNER.firstName.toUpperCase()}
                    <br />
                    {OWNER.middleName.toUpperCase()}
                    <br />
                    <span className="last">{OWNER.lastName.toUpperCase()}</span>
                </h1>
                <p className={`${rv("d2")} hero-tagline`}>
                    {OWNER.tagline}
                </p>
                <div className={`${rv("d3")} hero-scroll-hint`}>
                    Scroll to explore
                </div>
            </div>
        </div>
    );
}