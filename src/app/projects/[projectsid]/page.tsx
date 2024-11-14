"use client"
import Image from "next/image"
import { Carousel } from "react-bootstrap"

export default async function Page({
    params,
}: {
    params: Promise<{ projectsid: string }>
}) {
    const projectsid = (await params).projectsid
    return <div className="p-4 d-flex flex-column gap-3">
        <div className="fs-2 fw-semibold">{projectsid}</div>
        <hr className="border border-warning border-3 rounded-pill opacity-50 w-10" />

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <Image
                        src="/ProjectImages/bhashni.png" // start with '/' since it's in 'public'
                        width={1100}
                        height={500}
                        alt="Picture of the project"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image
                        src="/ProjectImages/bhashni.png" // start with '/' since it's in 'public'
                        width={1100}
                        height={500}
                        alt="Picture of the project"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="/ProjectImages/bhashni.png" // start with '/' since it's in 'public'
                        width={1100}
                        height={500}
                        alt="Picture of the project"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>


}