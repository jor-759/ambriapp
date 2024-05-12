"use client";

import { FC, useEffect, useRef, useState } from "react";
import logo from "@/resources/images/logo.png";
import { MenuCollapse } from "./menu-collapse/menu-collapse";

export const Header: FC = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    const [showCollapseMenu, setShowCollapseMenu] = useState(false);

    let priceContentRef: Element;
    let aboutUsRef: Element;
    let footerRef: Element;
    let homeRef: Element;

    useEffect(() => {
        homeRef = document.getElementsByClassName("content")[0];
        priceContentRef = document.getElementsByClassName("cost-content")[0];
        aboutUsRef = document.getElementsByClassName("about-us-ref")[0];
        footerRef = document.getElementsByClassName("footer-content")[0];
        
        if(window.scrollY > 10){
            headerRef?.current?.classList.add("sticky");
        }
        if(document){
            document.onscroll = (ev: Event) => {
                if (window.scrollY > 75) {
                    window.scrollY  = window.scrollY + 20;
                    headerRef?.current?.classList.add("sticky");
                } else {
                    headerRef?.current?.classList.remove("sticky");
                }

                let pricesElement = document.getElementById("prices");
                let aboutUsElement = document.getElementById("about-us");
                let footerElement = document.getElementById("contact");
                
                let pricesRect = priceContentRef?.getBoundingClientRect();
                let aboutUsRect = aboutUsRef?.getBoundingClientRect();
                let footerRect = footerRef?.getBoundingClientRect();

                let documentHeight = document.body.scrollHeight;
                let currentScroll = window.scrollY + window.innerHeight;

                if(pricesRect && pricesRect?.top < 150 && pricesRect?.top > (-pricesRect?.height) + 50){
                    pricesElement?.classList.add("selected");
                }else{
                    pricesElement?.classList.remove("selected");
                }

                
                if(aboutUsRect && aboutUsRect?.top < 170 && aboutUsRect?.top > (-aboutUsRect?.height) +50 && !(footerRect.top < 900)){
                    aboutUsElement?.classList.add("selected");
                }else {
                    aboutUsElement?.classList.remove("selected");
                }

                
                if(footerRect.top < 900){
                    footerElement?.classList.add("selected");
                }else{
                    footerElement?.classList.remove("selected");
                }
            }   
        }
    }, [])

    const eventScrollTo = (element: Element) => {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

        showCollapseMenu && setShowCollapseMenu(false)
        
    }

    const showMenuCollapse = () => {
        setShowCollapseMenu(!showCollapseMenu);
    }

    return (
        <div className="header" id="header" ref={headerRef}>
           <div className="logo-header">
                <img className="image-head" onClick={() => window.scrollTo({top: 0})} src={logo.src} alt="" />
           </div>
           <div className="nav-header">
                <ul className="ul-links">
                    <li className="li-link" >
                        <span id="prices" onClick={() => eventScrollTo(priceContentRef)}>Precios</span>
                    </li>
                    <li className="li-link">
                        <span id="about-us" onClick={() => eventScrollTo(aboutUsRef)}>Sobre nosotros</span>
                    </li>
                    <li className="li-link">
                        <span  id="contact" onClick={() => eventScrollTo(footerRef)}>Contáctenos</span>
                    </li>
                </ul>
           </div>
           <div className="menu-collapse" onClick={() => showMenuCollapse()}>
                <svg className="icon-menu" version="1.1" viewBox="0 0 24 24"><g id="grid_system"/><g id="_icons"><path d="M5,7h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5C4.4,5,4,5.4,4,6S4.4,7,5,7z"/><path d="M5,13h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z"/><path d="M5,19h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,19,5,19z"/></g></svg>
           </div>
           {showCollapseMenu && <MenuCollapse onClickLink={(e) => eventScrollTo(e)} />}
        </div>
    )
}