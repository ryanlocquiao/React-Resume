import React from 'react';

export default function ProjectPanel({ project, index, revealed }) {
    const rv = (delay = "") => ["rv", delay, revealed ? "show" : ""].filter(Boolean).join(" ");
    const displayNumber = String(index + 1).padStart(2, "0");

    return (
        <div className="panel">
            <div 
                className="proj-bar"
                style={{ "---progress": `${project.progress}%` }}
            />
            <div 
                className="bg"
                style={{ backgroundImage: `url('${project.bg}')` }} 
            />
            <div className="overlay" />
            <div className="proj-index" aria-hidden="true">
                {displayNumber}
            </div>
            <div className="content">
                <div className={`${rv()} proj-tag`}>
                    {project.tag}
                </div>
                <h2
                    className={`${rv("d1")} proj-title`}
                    style={{ whiteSpace: "pre-line" }}
                >
                    {project.title}
                </h2>
                <div className={`${rv("d2")} proj-desc`}>
                    {project.bullets.map((bullet, i) => (
                        <p key={i} style={{ marginBottom: i < project.bullets.length - 1 ? "0.6rem" : 0}}>
                            {bullet}
                        </p>
                    ))}
                </div>
                <div className={`${rv("d3")} tech-row`}>
                    {project.tech.map((techName) => (
                        <span className="chip" key={techName}>
                            {techName}
                        </span>
                    ))}
                </div>
                <a
                    href={project.link}
                    className={`${rv("d4")} proj-cta`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {project.cta} →
                </a>
            </div>
        </div>
    );
}