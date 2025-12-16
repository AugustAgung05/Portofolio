import ReactDOM from "react-dom";
import { useEffect } from "react";

//eslint-disable-next-line
export default function ProjectOverlay({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        (
            <div
                className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-md flex justify-center items-center p-4"
                onClick={onClose}
            >
                <div
                    className="bg-white/10 border border-white/20 rounded-xl shadow-xl p-6 w-fit"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        ),
        document.getElementById("overlay-root")
    );
}
