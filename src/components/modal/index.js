import React, { useState } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
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
                <h2>WARNING</h2>
                <p>The oldest song is going to be deleted.</p>
                <div>
                    <button onClick={handleOk}>Ok</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>)
    )
}

export default Modal;