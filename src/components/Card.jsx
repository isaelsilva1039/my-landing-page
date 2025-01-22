import { Image } from "react-bootstrap";
import "./Card.scss";

export function Cards({ icon, title, text }) {
    return (
        <div className="card-container">
            <div>
                <Image src={icon} alt="" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="title-card">{title}</span>
                <p className="description-card">{text}</p>
            </div>
        </div>
    )
}