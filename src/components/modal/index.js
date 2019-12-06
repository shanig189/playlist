import React, { useState } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { container, buttonsCtn, okBtn, cancelBtn } from './style';
import Actions from '../../helpers/tracksActions';

const Modal = () => {
    const [isShowModal, setIsShowModal] = useGlobalState('isShowModal');
    const { deleteTrack } = Actions();
    
    const handleClose = () => {
        setIsShowModal(false);
    }

    const handleOk = () => {
        handleClose();
        deleteTrack();
    }
   
    return(
        isShowModal &&
       (<div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <div style={container}>
                    <h2>WARNING</h2>
                </div>
                <div style={container}>
                    <p>The oldest song is going to be deleted.</p>
                </div>
                <div style={buttonsCtn}>
                    <button onClick={handleOk} style={okBtn} className='btn'>Ok</button>
                    <button onClick={handleClose} style={cancelBtn} className='btn'>Cancel</button>
                </div>
            </div>
        </div>)
    )
}

export default Modal;