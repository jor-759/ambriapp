import '@/components/header/menu-collapse/style.scss';
import { FC, useEffect, useRef } from 'react';

export const MenuCollapse: FC<{onClickLink: (element: Element) => void}> = (props) => {

    let priceContentRef: Element;
    let aboutUsRef: Element;
    let footerRef: Element;

    useEffect(() => {
        priceContentRef = document.getElementsByClassName("cost-content")[0];
        aboutUsRef = document.getElementsByClassName("about-us-ref")[0];
        footerRef = document.getElementsByClassName("footer-content")[0];

        checkCurrentSection();
    }, [])

    const checkCurrentSection = () => {

        let pricesCollapseElement = document.getElementById("collapse-price");
        let aboutUsCollapseElement = document.getElementById("collapse-aboutUs");
        let footerCollapseElement = document.getElementById("collapse-contact");

        let pricesRect = priceContentRef?.getBoundingClientRect();
        let aboutUsRect = aboutUsRef?.getBoundingClientRect();
        let footerRect = footerRef?.getBoundingClientRect();

        if(pricesRect && pricesRect?.top < 150 && pricesRect?.top > (-pricesRect?.height) + 50){
            pricesCollapseElement?.classList.add("selected");
        }else{
            pricesCollapseElement?.classList.remove("selected");
        }

        
        if(aboutUsRect && aboutUsRect?.top < 170 && aboutUsRect?.top > (-aboutUsRect?.height) +50 && !(footerRect.top < 900)){
            aboutUsCollapseElement?.classList.add("selected");
        }else {
            aboutUsCollapseElement?.classList.remove("selected");
        }

        
        if(footerRect.top < 900){
            footerCollapseElement?.classList.add("selected");
        }else{
            footerCollapseElement?.classList.remove("selected");
        }
    }

    return(
        <div className="menu-collapse-links">
            <ul>
                <li id='collapse-price' onClick={() => props.onClickLink(priceContentRef)}>Precios</li>
                <li id='collapse-aboutUs' onClick={() => props.onClickLink(aboutUsRef)}>Sobre nosotros</li>
                <li id='collapse-contact' onClick={() => props.onClickLink(footerRef)}>Contáctenos</li>
            </ul>
        </div>
    )
}