import { useEffect, useRef, useState, useCallback } from 'react';

export function useCursor() {
    const [cursor, setCursor] = useState({ x: -100, y: -100, big: false });

    useEffect(() => {
        const handleMove = (e) => setCursor((prev) => ({...prev, x: e.clientX, y: e.clientY}));

        const handleOver = (e) => {
            if (e.target.closest("button, a, [data-hover]")) {
                setCursor((prev) => ({...prev, big: true }));
            }
        };

        const handleOut = () => setCursor({...prev, big: false });

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseover", handleOver);
        window.addEventListener("mouseout", handleOut);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseout", handleOut);
        };
    }, []);

    return cursor;
}

export function useScrollSpy(panelCount, scrollRoot) {
    const panelElements = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [revealed, setRevealed] = useState(new Set([0]));

    const panelRefs = useCallback((index) => (el) => { panelElements.current[index] = el; }, []);
    const scrollTo = useCallback((index) => { panelElements.current[index]?.scrollIntoView({ behavior: "smooth" });}, []);

    useEffect(() => {
        const root = scrollRoot.current;
        if (!root) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = panelElements.current.indexOf(entry.target);
                    if (index === -1) return;

                    setActiveIndex(index);

                    setRevealed((prev) => {
                        if (prev.has(index)) return prev;
                        const next = new Set(prev);
                        next.add(index);
                        return next;
                    });
                });
            },
            {
                root,
                threshold: 0.55,
            }
        );

        panelElements.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [scrollRoot, panelCount]);

    return { activeIndex, revealed, scrollTo, panelRefs };
}