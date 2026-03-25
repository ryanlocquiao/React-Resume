/**
 * components/Cursor.jsx
 * --------------------------------------------------------------------------
 * Renders a custom mouse cursor that replaces the OS default.
 * 
 * Props:
 *   x   - horizontal position in pixels
 *   y   - vertical position in pixels
 *   big - when true, expands to a larger ring
 */

import React from 'react';

const baseStyle = {
    position:       "fixed",
    pointerEvents:  "none",
    zIndex:         9000,
    borderRadius:   "50%",
    transform:      "translate(-50%, -50%)",
    mixBlendMode:   "difference",
    transition:     "width 0.18s, height 0.18s, background 0.18s",
};

export default function Cursor({ x, y, big }) {
    return (
        <div
            style={{
                ...baseStyle,
                left: x,
                top: y,
                width: big ? 32 : 8,
                height: big ? 32 : 8,
                background: big ? "#ffffff" : "var(--red)",
            }}
        />
    );
}