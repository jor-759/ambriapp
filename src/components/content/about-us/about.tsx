import { FC } from "react";
import image from "@/resources/images/image-1.jpg";
import "@/components/content/about-us/style.scss";
export const AboutUs:FC = () => {
    return(
        <div className="about-us-ref">
            <div className="about-us-content">
                <div className="why-content">
                    <h2 className="why-us">¿Por que nosotros?</h2>
                    <span>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos</span>
                </div>
                <div className="content-img">
                    <img src={image.src} alt="" />
                </div>
            </div>
            <div className="offer-content">
                <div className="offer-head">
                    <h2 className="offer-title">Que ayuda te ofrecemos</h2>
                    <span className="offer-description">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</span>
                </div>
                <div className="offer-list">
                    <div className="offer">
                        <svg className="creative" enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"/></svg>                        
                        <span>Creatividad</span>
                    </div>
                    <div className="offer">
                        <svg className="job" version="1.1" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M7,5l-3,-0c-0.796,-0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121l-0,16c-0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879c5.154,0 18.846,0 24,-0c0.796,0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121l-0,-16c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879l-3,-0l-0,-1c-0,-1.657 -1.343,-3 -3,-3l-12,0c-1.657,0 -3,1.343 -3,3l-0,1Zm-4,7.437l-0,11.563c-0,0.265 0.105,0.52 0.293,0.707c0.187,0.188 0.442,0.293 0.707,0.293l24,0c0.265,0 0.52,-0.105 0.707,-0.293c0.188,-0.187 0.293,-0.442 0.293,-0.707l0,-11.562c0,-0 -9.857,4.333 -9.995,4.335l-0.005,-0l0,1.239c0,0.553 -0.448,1 -1,1l-4,0c-0.552,0 -1,-0.447 -1,-1l-0,-1.243c-0.136,0 -10,-4.332 -10,-4.332Zm14,1.563l0,3.012c0,0 -2,0 -2,0c-0,0 -0,-3.012 -0,-3.012l2,0Zm12,-3.75l0,-2.25c0,-0.265 -0.105,-0.52 -0.293,-0.707c-0.187,-0.188 -0.442,-0.293 -0.707,-0.293l-24,-0c-0.265,-0 -0.52,0.105 -0.707,0.293c-0.188,0.187 -0.293,0.442 -0.293,0.707l0,2.25l10,4.426l-0,-1.676c0,-0.552 0.448,-1 1,-1l4,-0c0.552,-0 1,0.448 1,1l0,1.679l10,-4.429Zm-6,-5.25l-0,-1c-0,-0.552 -0.448,-1 -1,-1c-0,0 -12,0 -12,0c-0.552,0 -1,0.448 -1,1l-0,1l14,-0Z"/><g id="Icon"/></svg>
                        <span>Años de trabajo en el area de idiomas</span>
                    </div>
                    <div className="offer">
                    <svg className="blackboard" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Blackboard"><path d="M46,330.4332v26.219a13.1555,13.1555,0,0,0,13.157,13.156h66.2894l-24.3445,66.8875c-9.1794,27.3587,30.5631,41.822,41.1118,14.9632l7.4982-20.5986H362.29l7.496,20.5986c10.553,26.8631,50.3,12.388,41.1118-14.9632l-24.3445-66.8865-46.5592-.001,12.74,35.0021h-193.47l12.74-35.0021h280.84A13.1551,13.1551,0,0,0,466,356.6522v-26.219Z"/><path d="M247.2521,247.3477a13.1631,13.1631,0,0,1,13.1635-13.1624H391.5887a13.163,13.163,0,0,1,13.1634,13.1624v56.8355H439.75V59.1917a13.1341,13.1341,0,0,0-13.1335-13.1335H85.3835A13.1341,13.1341,0,0,0,72.25,59.1917V304.1832H247.2521Z"/><rect height="43.75" width="105" x="273.5" y="260.4332"/></g></svg>
                    <span>Aprendizaje especializado</span>
                    </div>
                    <div className="offer">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 15" id="Layer_15"><path className="cls-1" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"/><path className="cls-1" d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"/></g></svg>
                        <span>Tiempo que se ajusta a tu nivel</span>
                    </div>
                    <div className="offer">
                        <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"/></svg>
                        <span>Soporte en el momento que lo necesites</span>
                    </div>
                </div>
            </div>
        </div>
    )
}