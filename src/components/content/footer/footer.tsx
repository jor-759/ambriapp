"use client";

import { FC, useEffect } from "react";
import '@/components/content/footer/style.scss';
import logo from "@/resources/images/logo.png"

export const Footer: FC = () => {

    let priceContentRef: Element;
    let aboutUsRef: Element;
    let homeRef: Element;

    useEffect(() => {
        homeRef = document.getElementsByClassName("content")[0];
        priceContentRef = document.getElementsByClassName("cost-content")[0];
        aboutUsRef = document.getElementsByClassName("about-us-ref")[0];
    }, [])

    const eventScrollTo = (element: Element) => {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        
    }

    return (
        <footer className="footer-content">
            <img src={logo.src} alt="" />
            <div className="information">
                <span className="name">American British English</span>
                <span className="street">123 Main St, Anytown USA</span>
                <span className="mail-phone">info@americanbritish.com | (123) 456-7890</span>
            </div>
            <div className="links">
                <ul>
                    <li onClick={() => eventScrollTo(homeRef)}>Home</li>
                    <li onClick={() => eventScrollTo(priceContentRef)}>Precios</li>
                    <li onClick={() => eventScrollTo(aboutUsRef)}>Sobre nosotros</li>
                </ul>
            </div>
            <div className="copyright">© {new Date().getFullYear() } American British English. All rights reserved.</div>
        </footer>
    )
}
