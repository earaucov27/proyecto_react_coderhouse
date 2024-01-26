import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const LoaderModal = ({ show }) => {
    return (
        <Modal show={show} centered>
            <Modal.Body className="text-center">
                <Spinner animation="border" variant="primary" />
                <p>Cargando datos...</p>
            </Modal.Body>
        </Modal>
    );
};

export default LoaderModal;
