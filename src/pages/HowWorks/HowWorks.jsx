import { Image } from "react-bootstrap";
import Beneficios from "../../components/Beneficios";
import ProductWhitLabel from "../../components/ProductWhitLabel";

import './HowWorks.scss'

export function HowWorks() {
    return (
        <div className="how-works-container">
            <div style={{ marginTop: '-5vh', marginLeft: '4vw' }}>
                <Image src="assets/effects-line.svg" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
                <ProductWhitLabel />

                <Beneficios />
            </div>
        </div>
    )
}