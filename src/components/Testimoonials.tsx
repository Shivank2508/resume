const Testimonials = () => {
    return (
        <ul className="testimonials-list">
            {Array(4).fill().map((_, index) => (
                <li key={index} className="testimonials-item">
                    <div className="content-card p-4">
                        <figure className="testimonials-avatar-box">
                            <img
                                src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/avatar-1.png"
                                alt="Daniel lewis"
                                width="80"
                                data-testimonials-avatar=""
                            />
                        </figure>
                        <h4 className="fs-5 fw-semibold ms-11 ps-11" data-testimonials-title="">
                            Daniel lewis
                        </h4>
                        <div className="testimonials-text pt-4" data-testimonials-text="">
                            <p>
                                Richard was hired to create a corporate identity. Richard was hired to create a corporate identity. Richard was
                                hired to create a corporate identity. Richard was hired to create a corporate identity. Richard was hired to create
                                a corporate identity.
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Testimonials;
