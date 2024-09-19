"use client"

import { useState } from 'react';

const ProjectsTabs = () => {

    const [activeTab, setActiveTab] = useState('tab1');


    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-4 d-flex flex-column gap-3">
            <div className="fs-2 fw-semibold">Portfolio</div>
            <hr className="border border-warning border-3 rounded-pill opacity-50 w-10" />
            <ul className="d-flex gap-4">
                <li className="">
                    <div
                        className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                        style={{
                            color: activeTab === "tab1" ? '#ffdb70' : '#ffffff',
                            cursor: 'pointer', // Add a pointer cursor for better UX
                        }}
                        onClick={() => handleTabClick('tab1')}
                    >
                        All
                    </div>
                </li>
                <li className="">
                    <div
                        className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                        style={{
                            color: activeTab === "tab2" ? '#ffdb70' : '#ffffff',
                            cursor: 'pointer', // Add a pointer cursor for better UX
                        }}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Web Portals
                    </div>
                </li>
                {/* <li className="">
                    <div
                        className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                        style={{
                            color: activeTab === "tab3" ? '#ffdb70' : '#ffffff',
                            cursor: 'pointer', // Add a pointer cursor for better UX
                        }}
                        onClick={() => handleTabClick('tab3')}
                    >
                        Web Applications
                    </div>
                </li> */}
            </ul>


            <div className="tab-content mt-3">
                {activeTab === 'tab1' && (
                    <div className="d-flex flex-wrap gap-3">
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                    </div>

                )}

                {activeTab === 'tab2' && (
                    <div className="d-flex flex-wrap gap-3">
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default ProjectsTabs;
