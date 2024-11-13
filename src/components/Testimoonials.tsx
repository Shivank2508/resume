import { resumeData } from "./Data";

const Testimonials = () => {
    const testtestimonialsData = resumeData.testimonialsData || [];
    return (
        <ul className="testimonials-list">
            {testtestimonialsData?.map((data, index) => (
                <li key={index} className="testimonials-item">
                    <div className="content-card p-4">
                        <figure className="testimonials-avatar-box">
                            <img
                                src={data?.avatar}
                                alt="Daniel lewis"
                                width="80"
                                data-testimonials-avatar=""
                            />
                        </figure>
                        <h4 className="fs-5 fw-semibold ms-11 ps-11" data-testimonials-title="">
                            {data?.name}
                        </h4>
                        <div className="testimonials-text pt-4" data-testimonials-text="">
                            <p>
                                {data?.text}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Testimonials;
