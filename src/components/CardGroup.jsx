import { Image } from "react-bootstrap";
import './CardGroup.scss'

export function CardGroup() {
    return (
        <div className="cards-icons">
            <div className="cards-cart-note">
                <div className="card-cart">
                    <Image src="assets/cart.svg" className="image-card" />
                </div>

                <div className="card-note">
                    <Image src="assets/note.svg" className="image-card" />
                </div>
            </div>

            <div className="card-dolar">
                <Image src="assets/dolar.svg" className="image-card-dolar" />
            </div>
        </div>
    )
}