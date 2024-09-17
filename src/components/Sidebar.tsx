import { CharacterDisplay } from "@/components/Helpers";
export const Sidebar = () => {
    return (
        <div
            className="p-8 "
            style={{
                position: "sticky",
                top: "60px",
                height: "48rem",
                maxWidth: "22%",
                border: '1px solid #383838',
                borderRadius: "20px",
                backgroundColor: "#1e1e1f",
            }}
        >
            <div className="d-flex flex-column justify-content-center align-items-center gap-4 py-8">
                <figure
                    style={{
                        backgroundColor: "#3f3f40",
                        borderRadius: "30px",
                        padding: "10px",
                    }}
                >
                    <img
                        src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/my-avatar.png"
                        alt="Shivank Tyagi"
                        style={{ width: "100%", maxWidth: "140px", height: "auto" }}
                    />
                </figure>
                <div className="gap-3 text-center">
                    <div className="fs-3 fw-bolder">Shivank Tyagi</div>
                    <div
                        className="badge badge-lg px-4 py-2 fw-normal"
                        style={{ backgroundColor: "#2b2b2c" }}
                    >
                        React Js Developer
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-8 d-grid gap-8">
                <div className="d-flex justify-content-between flex-wrap">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-envelope fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="ms-2" style={{ minWidth: "60%" }}>
                        <p className="text-secondary" style={{ fontSize: "11px" }}>EMAIL</p>
                        <div

                            className="fw-normal"
                            style={{ fontSize: "13px", overflow: 'hidden' }}
                        >
                            <CharacterDisplay character={"tyagishivank1212@gmail.com"} count={'17'} />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-phone fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="ms-2" style={{ minWidth: "60%", maxWidth: "60%" }}>
                        <p className="text-secondary" style={{ fontSize: "11px" }}>PHONE</p>
                        <div className="fw-normal" style={{ fontSize: "13px" }}>
                            8923212675
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-calendar3 fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="ms-2" style={{ minWidth: "60%" }}>
                        <p className="text-secondary" style={{ fontSize: "11px" }}>BIRTHDAY</p>
                        <div style={{ fontSize: "13px" }}>June 15, 2000</div>
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                    <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{
                            background: 'linear-gradient(to bottom right, #404040 0%, hsla(0, 0%, 25%, 0) 50%)',
                            width: "48px",
                            height: "48px",
                        }}
                    >
                        <i className="bi bi-geo-alt fs-6" style={{ color: "#ffdb70" }}></i>
                    </div>
                    <div className="ms-2" style={{ minWidth: "60%", maxWidth: "60%" }}>
                        <p className="text-secondary" style={{ fontSize: "11px" }}>LOCATION</p>
                        <div style={{ fontSize: "13px" }}>Saharanpur, Uttar Pradesh, 247001  </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
