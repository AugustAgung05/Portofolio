import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import DetailCard from "./DetailCard";

//eslint-disable-next-line
export default function Card({ category, title, description, logo, contentImg = [], role, contentDesc = "", scopes = [], tools = [], features = [],  link = "", }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="relative w-fit rounded-xl group cursor-pointer">
                <div className="absolute -inset-1 rounded-xl bg-white transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>

                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative z-10 w-[350px] h-[200px] bg-[#0F1722] flex items-center rounded-lg transition-opacity duration-300 group-hover:opacity-20">
                    <div className="flex justify-between items-center w-full px-10">
                        <div className="flex flex-col font-medium">
                            <h4 className="px-4 py-0.5 bg-white text-bg text-[13px] rounded-full w-fit">
                                {category}
                            </h4>
                            <h5 className="text-2xl text-white mt-2">
                                {title}
                            </h5>
                            <p className="text-[13px] font-normal text-secondary mt-1">
                                {description}
                            </p>
                        </div>
                        <img src={logo} alt="Logo" className="w-22" />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                    <span className="text-white rounded-full font-medium bg-[#0F1722] px-4 py-2 flex gap-1.5 items-center transition-transform duration-300 translate-y-5 group-hover:translate-y-0">
                        <p>Tekan Aku</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-6 fill-white"
                        >
                            <path d="M128 256L296 256L296 64L288 64C199.6 64 128 135.6 128 224L128 256zM128 304L128 416C128 504.4 199.6 576 288 576L352 576C440.4 576 512 504.4 512 416L512 304L128 304zM512 256L512 224C512 135.6 440.4 64 352 64L344 64L344 256L512 256z" />
                        </svg>
                    </span>
                </button>
            </section>

            <Overlay isOpen={open} onClose={() => setOpen(false)}>
                <DetailCard
                    onClose={() => setOpen(false)}
                    images={contentImg}
                    title={title}
                    role={role}
                    desc={contentDesc}
                    scopes={scopes}
                    tools={tools}
                    features={features}
                    link={link}
                />
            </Overlay>
        </>
    );
}
