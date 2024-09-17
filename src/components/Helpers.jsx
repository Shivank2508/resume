"use client";
import { useState } from "react";

export const CharacterDisplay = ({ character, count }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="character-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>{isHovered ? character : character?.substring(0, count) + '...'}</div>
        </div>
    );
};
