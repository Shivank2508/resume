"use client"

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
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
                        Web Portal
                    </div>
                </li>
                {/* <li className="">
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
                </li> */}
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
                    <div className="d-flex flex-wrap gap-6">
                        <Link href={"https://www.sobf.in/"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/Soul_of_braj.png"
                                width={500}
                                height={300} // Adjust height for uniformity
                                alt="Picture of the project"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }} // Maintain aspect ratio and consistent height
                            />
                            <div className="p-2">
                                <h5 className="fw-medium my-2">Soul Of Braj</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Developed the website for Soul of Braj Federation to highlight their non-profit initiatives and boost community engagement
                                </p>
                            </div>
                        </Link>

                        <Link href={"https://bhashini.gov.in/bhashadaan/en/home"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/bhashni.png"
                                width={500}
                                height={300}
                                alt="Picture of the project"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                            <div className="p-2">
                                <h5 className="fw-medium my-2">Bhashni</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Developed the official website for Bhashni, a government initiative aimed at facilitating language exchange and promoting linguistic diversity.
                                </p>
                            </div>
                        </Link>
                        <Link href={"https://staging.iirpldev.com:8282"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/repay.png"
                                width={500}
                                height={300}
                                alt="Picture of the project"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                            <div className="p-2">
                                <h5 className="fw-medium my-2">Project And Telecaller Management Portal</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Developed a comprehensive portal to manage project workflows and telecaller activities effectively.
                                </p>
                            </div>
                        </Link>

                        <Link href={"https://kanatomy.com/"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/kanatomy.jpeg" // start with '/' since it's in 'public'
                                width={500}
                                height={500}
                                alt="Picture of the projects"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                            <div className="p-2">
                                <h5 className="fw-medium my-2">Kanatomy</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Developed a review portal for NGOs and individuals to highlight their initiatives and boost community engagement.
                                </p>
                            </div>
                        </Link>

                        <Link href={"https://staging.iirpldev.com:8282/customer/mitr/login"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/redemption.png" // start with '/' since it's in 'public'
                                width={500}
                                height={500}
                                alt="Picture of the projects"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />

                            {/* <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." /> */}
                            <div className="p-2">
                                <h5 className="fw-medium my-2">Redemption Portal</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    It is like e-commerce portal where users can place redemptions and complete KYC as well.
                                </p>
                            </div>
                        </Link>
                        <Link href={"https://amtdairyfood.com/"} target='_blank' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <Image
                                src="/ProjectImages/amt.png" // start with '/' since it's in 'public'
                                width={500}
                                height={500}
                                alt="Picture of the projects"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />

                            {/* <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." /> */}
                            <div className="p-2">
                                <h5 className="fw-medium my-2">A M T Processing Dairy & Food Pvt. Ltd.</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Developed the website for A M T Processing Dairy & Food Pvt. Ltd. to showcase their products, factory solutions, and dairy plant machinery.
                                </p>
                            </div>

                        </Link>
                    </div>



                )}

                {/* {activeTab === 'tab2' && (
                    <div className="d-flex flex-wrap gap-3">
                        <div role='button' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div role='button' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div role='button' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                        <div role='button' className="" style={{ width: "calc(33.333% - 1rem)" }}>
                            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                            <div className="p-2">
                                <h5 className="fw-medium">Card title</h5>
                                <p style={{ color: "#d6d6d6b3" }}>
                                    Nemo enim ipsam
                                </p>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default ProjectsTabs;
