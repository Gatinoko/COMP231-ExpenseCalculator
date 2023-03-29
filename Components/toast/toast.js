// React/Next imports
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const ToastTypes = {
    default: 'toast',
    primary: 'toast text-white bg-primary',
    warning: 'toast text-black bg-warning',
    danger: 'toast text-white bg-danger'
}

export const Toast = forwardRef((props, ref) => {

    let [toastText, setToastText] = useState('Body text')
    let [toastType, setToastType] = useState(ToastTypes.default)

    useImperativeHandle(ref, () => ({

        // Method that enables creating and showing a Toast
        showToast(text, type) {

            // Toast element instantiation
            const { Toast } = require("bootstrap")
            const toast = new Toast('#Toast')

            // Loads the supplied arguments and shows toast
            const configureAndShow = async () => {
                setToastType(type)
                await setToastText(text)
                await toast.show()
            }
            configureAndShow()
        } 
    }))

    return(
        <>
        {/* Toast container */}
        <div id="Toast" 
            className={toastType}
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true" 
            data-bs-delay="1000">

            {/* Toast body */}
            <div className="toast-body">
                { toastText }
            </div>
        </div>
        </>
    )
})