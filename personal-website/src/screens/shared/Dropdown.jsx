import React from "react";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownButton,
    Button
} from 'react-bootstrap/';
import Modal from 'react-bootstrap/Modal';
import Logout from './Logout'
import { useState } from 'react';

export default function ProfileDropdown() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <DropdownButton id="dropdown-basic-button" variant='outline-accent' title="My Profile" style={{ marginTop: '3px' }}>
            <Dropdown.Item>
                <Link to='/profile'>My Profile</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                <Button variant='accent' onClick={() => { handleShow() }}>Logout</Button>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Logout Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to log out?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Back
                            </Button>
                            <Logout></Logout>
                        </Modal.Footer>
                    </Modal>
                </>
            </Dropdown.Item>
        </DropdownButton>
    )

}


// function ConfirmLogout() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Logout Confirmation</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Are you sure you want to log out?</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Back
//                     </Button>
//                     <Logout></Logout>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }