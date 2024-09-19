

const Contact = () => {
    return (
        <div className="p-4  d-flex flex-column gap-4">
            <div className="fs-2 fw-semibold  ">
                Contact
            </div>
            <hr className="border border-warning border-3 rounded-pill opacity-50 w-10 " />
            <section>
                <div style={{ width: '100%', height: '280px' }}>
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'black', borderRadius: '1rem', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05906023395!2d76.68831267692514!3d30.732401982427874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1726657667195!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: '0', filter: "grayscale(1) invert(1)" }}
                            allowFullScreen
                            loading="lazy"
                            className="rounded-4"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="fs-4 fw-semibold pb-4">Contact Form</div>
                    <div className="row g-3">
                        {/* Full Name and Email Address in one row */}
                        <div className="col-md-6">
                            <input
                                placeholder="Full Name"
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    backgroundColor: '#1e1e1e',
                                    color: '#d6d6d6',
                                    border: '1px solid #333',
                                    borderRadius: '15px',
                                    outline: 'none',
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                placeholder="Email Address"
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    backgroundColor: '#1e1e1e',
                                    color: '#d6d6d6',
                                    border: '1px solid #333',
                                    borderRadius: '15px',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        {/* Message Field */}
                        <div className="col-12">
                            <textarea
                                placeholder="Your message"
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    backgroundColor: '#1e1e1e',
                                    color: '#d6d6d6',
                                    border: '1px solid #333',
                                    borderRadius: '15px',
                                    resize: 'none',
                                    height: '100px',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-12">
                            <button
                                style={{
                                    padding: '15px 20px',
                                    backgroundColor: '#333',
                                    color: '#d6d6d6',
                                    border: 'none',
                                    borderRadius: '10px',
                                    width: '100%',
                                }}
                            >
                                <span style={{ color: "#ffdb70" }}>
                                    <i className="bi bi-send-fill pe-2 fs-6"></i>
                                    Send Message
                                </span>
                            </button>
                        </div>
                    </div>
                </div>



            </section>



        </div>
    )
}

export default Contact