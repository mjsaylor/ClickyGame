import React from 'react';
import "./style.css"

export const ModalType = {
    lost: "lost",
    won: "won"
}

function modalMessage(modalType) {
    if (modalType == ModalType.lost) {
        return "You Lost!"
    } else {
        return "You Won!"
    }
} 

function Modal(props) {
    return (
        <div className="Modal">
            {modalMessage(props.modalType)}
        </div>
    );
}

export default Modal;