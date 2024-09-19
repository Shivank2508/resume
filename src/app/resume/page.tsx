import React from 'react';
import { resumeData } from "@/components/Data";

const Resume = () => {
    // Default values in case resumeData is not available
    const experience = resumeData.experience || [];
    const education = resumeData.education || [];

    return (
        <div className="p-4 d-flex flex-column gap-4">
            <div className="fs-2 fw-semibold">
                Resume
            </div>
            <hr className="border border-warning border-3 rounded-pill opacity-50 w-10" />

            <section>
                <div className="d-flex gap-3">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-book fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="fs-4 fw-semibold">
                        Experience
                    </div>
                </div>
                <div>
                    <ul className="custom-list">
                        {experience.map((item, index) => (
                            <li key={index}>
                                <h4 className="fs-6 fw-semibold pb-2">{item.company}</h4>
                                <div style={{ color: "#ceb15a" }}>{item.title}</div>
                                <span style={{ color: "#fff" }}>{item.duration}</span>
                                <p style={{ color: "#d6d6d6" }}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <div className="d-flex gap-3">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-book fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="fs-4 fw-semibold">
                        Education
                    </div>
                </div>
                <div>
                    <ul className="custom-list">
                        {education.map((item, index) => (
                            <li key={index}>
                                <h4 className="fs-6 fw-semibold pb-2">{item.degree}</h4>
                                <span style={{ color: "#ceb15a" }}>{item.duration}</span>
                                <p style={{ color: "#d6d6d6" }}>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
