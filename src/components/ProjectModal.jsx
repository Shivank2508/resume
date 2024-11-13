import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ProjectModal = () => {
    const [modalShow, setModalShow] = useState(false);
    const confirmationPopup = (type) => {
        setIsModalOpen(type)
    }
    return (
        <>
            <div role='button' onClick={() => setModalShow(true)} className="" style={{ width: "calc(33.333% - 1rem)" }}>
                <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg" className="pb-2 rounded-4" alt="..." />
                <div className="p-2">
                    <h5 className="fw-medium">Card </h5>
                    <p style={{ color: "#d6d6d6b3" }}>
                        Nemo enim ipsam
                    </p>
                </div>
            </div>
            <Modal
                className='bg-dark'
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='bg-dark' >
                    {/* <Modal.Title id="contained-modal-title-vcenter"> */}
                    <h1> Modal heading</h1>
                    {/* </Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <div className='d-flex flex-wrap gap-6 justify-content-center'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz27FzdNDlSUAZnmfsy2Gyc53-YEi3XDBQJcBY8uoZ6FoGm7Sz1Uox7I&s' width={'25%'} />
                    </div>

                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <button onClick={() => setModalShow(false)}>Close</button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default ProjectModal







