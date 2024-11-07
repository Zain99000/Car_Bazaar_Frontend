import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';


export const CarDisplays = ({ car }) => {
    const nav = useNavigate();


    return (
        <Carousel data-bs-theme="light" style={{ width: "50%", marginLeft: "25%", }}>

            <Carousel.Item onClick={(e) => nav(`/carinfo/${car._id}`)}>
                <img
                    className="d-block w-100"
                    src={car.Img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>{car.CarName}</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}