"use client";

import { CardElement } from "@/resources/elements/card/card";
import { FC } from "react";
import "@/components/content/prices/style.scss";

export const Prices: FC = () => {

    const onClickOffer = (message: string) => {
        window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
    }

    return(
        <div className="cost-content">
            <div className="price-head">
                <h2 className="head-title">Precios</h2>
                <span className="head-description">Obtén los mejores precios que se adapten a ti.</span>
            </div>
            <div className="price-content">
                
                <CardElement title="Basic beginner"
                    currency="€"
                    description="Para personas que deseen empezar a aprender un idioma"
                    payMethod="Un pago"
                    price="100"
                    onButtonClick={() => onClickOffer("Quisiera mas información a cerca del Basic Beginner")}
                />
                <CardElement title="Subscription"
                    currency="€"
                    description="Suscribete y fortalece mes a mes tu nivel de ingles "
                    payMethod="Mensual"
                    price="70"
                    highlight
                    onButtonClick={() => onClickOffer("Quisiera mas información a cerca del plan Subscription")}
                />
                <CardElement title="Full"
                    currency="€"
                    description="Desde básico a avanzado"
                    payMethod="Un pago"
                    price="350"
                    onButtonClick={() => onClickOffer("Quisiera mas información a cerca del plan Full")}
                />
                <CardElement title="Lesson"
                    currency="€"
                    description="Si deseas reforzar un tema en especifico"
                    payMethod="Un pago"
                    price="18"
                    onButtonClick={() => onClickOffer("Quisiera mas información a cerca de Lesson")}
                />
            </div>
        </ div>
    )
}