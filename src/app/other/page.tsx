import Skills from "@/components/Skills"
import Testimoonials from "@/components/Testimoonials"


const Other = () => {
    return (
        <div className="p-4  d-flex flex-column gap-4">
            <div className="fs-2 fw-semibold  ">
                Other
            </div>
            <hr className="border border-warning border-3 rounded-pill opacity-50 w-10 " />
            <div className="fs-4 fw-semibold  ">
                My Skills
            </div>
            <div className="card bg-dark text-white p-6 rounded-4" style={{ border: "1px solid #585858" }}>
                <Skills />
            </div>
            <div className="fs-4 fw-semibold  ">
                Testimonials
            </div>
            <Testimoonials />

        </div>
    )
}
export default Other