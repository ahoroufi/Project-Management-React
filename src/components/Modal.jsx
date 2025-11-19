import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

function Modal({ children, ref, buttnCaption }) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }

        }
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form mothod="dialog" className="mt-4 text-right">
                <Button>{buttnCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
}

export default Modal;