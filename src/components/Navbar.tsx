"use client";
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const listItems = ['About', 'Resume', 'Portfolio', 'Other', 'Contact'];
    const router = useRouter();
    const pathname = usePathname(); // Get the current path, only available on the client side

    // Set initial selectedIndex based on pathname during client-side rendering
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        // Update selectedIndex once the pathname is available (client-side)
        if (pathname) {
            if (pathname === '/') {
                setSelectedIndex(0);
                router.push('/');
            }
            if (pathname === '/resume') {
                setSelectedIndex(1);
                router.push('/resume');
            }
            if (pathname === '/projects') {
                setSelectedIndex(2);
                router.push('/projects');
            }
            if (pathname === '/other') {
                setSelectedIndex(3);
                router.push('/other');
            }
            if (pathname === '/contact') {
                setSelectedIndex(4);
                router.push('/contact');
            }
        }
    }, [pathname]);

    const handleClick = (index: number) => {
        if (index === 0) {
            router.push('/');
        } else if (index === 1) {
            router.push('/resume');
        } else if (index === 2) {
            router.push('/projects');
        } else if (index === 3) {
            router.push('/other');
        } else if (index === 4) {
            router.push('/contact');
        }
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
                zIndex: 1000, // Ensure the Navbar is on top
            }}
        >
            <ul className="d-flex justify-content-around p-0 m-0 list-unstyled">
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        role="button"
                        onClick={() => handleClick(index)}
                        style={{
                            color: selectedIndex === index ? '#ffdb70' : '#ffffff',
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
