"use client"
import React, { useState } from 'react';

const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const listItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <nav
            className="position-absolute top-0 end-0 p-3 w-50"
            style={{
                borderLeft: "2px solid #383838",
                borderBottom: "2px solid #383838",
                borderBottomLeftRadius: "15px",
                borderTopRightRadius: "20px",
                backgroundColor: "#2b2b2cbf",
                zIndex: 1000 // Ensure the Navbar is on top
            }}
        >
            <ul className="d-flex justify-content-around p-0 m-0 list-unstyled">
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        role="button"
                        onClick={() => handleClick(index)}
                        style={{
                            color: selectedIndex === null && index === 0 ? '#ffdb70' : (selectedIndex === index ? '#ffdb70' : '#ffffff'),
                            cursor: 'pointer', // Add a pointer cursor for better UX
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
