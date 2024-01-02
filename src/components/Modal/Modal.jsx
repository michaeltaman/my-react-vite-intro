import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children, isOpened, closeModal }) {

  const dialog = useRef()

  useEffect(() => {
    //console.log("isOpened inside if useEffect: ", isOpened)
    if(isOpened){
      dialog.current.showModal()
    }
    else {
      dialog.current.close()
    }
  }, [isOpened])

  return createPortal(
    <>
      {isOpened && <div className="backdrop" onClick={closeModal}></div>}
      <dialog ref={dialog} className="modal-dialog">
        {children}
        <button className="close-button" onClick={closeModal}>
          X
        </button>
      </dialog>
    </>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
