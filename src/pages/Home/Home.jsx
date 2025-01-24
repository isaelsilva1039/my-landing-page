import { Image } from "react-bootstrap";
import BottomHeader from "../../components/Bottom-hedaer";
import Header from "../../components/Header";
import './Home.scss'

export function Home() {
    return (
        <div>
            <div className="home-container">
                <Header />
                <BottomHeader />
            </div>

            {/* <Image src="assets/effects-line.svg" /> */}
        </div>
    )
}