import { FC } from "react";
import "@/resources/elements/card/style.scss";
export const CardElement: FC<{
    title: string,
    description: string,
    price: string,
    currency: string,
    payMethod: string,
    detail?: any,
    highlight?: boolean
    onButtonClick: () => void
}> = (props) => {
    return(
        <div className="card-container" style={{scale: props.highlight ? 1.1 : 1, borderColor: props.highlight ? "#0174d9" : "#dfdfdf7a"}}>
            <div className="card-head">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
            </div>
            <div className="card-price">
                <div className="price-currency">
                    <span className="currency">{props.currency}</span>
                    <span className="price-number">{props.price}</span>
                </div>
                <span className="method">{props.payMethod}</span>
            </div>
            <div className="card-detail">
                {props.detail}
            </div>
            <div className="card-button">
                <button className="btn-send" onClick={() => props.onButtonClick()}>Obtener</button>
            </div>
        </div>
    )
}