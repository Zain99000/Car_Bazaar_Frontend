import { useParams } from "react-router-dom"
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

const CarInfo = () => {
    const { carid } = useParams();
    const [car, setCar] = useState(null)

    const getGivenCarDetails = () => {
        axios.get(`http://localhost:8000/getgivencardetails/${carid}`)
            .then(res => {
                if (!res.data.Car) {
                    // console.log(`No Car Found`);
                    alert(res.data.message)
                    return;
                }

                setCar(res.data.Car);
                console.log(res.data.Car);


            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getGivenCarDetails();
    }, [])

    return (
        <>
            <Header />
            {car && <img src={car.Img} alt="" style={{width:"30%"}}/>}
            <br />
            <h1>{car?.Color}</h1>
            <h1>{car?.CarName}</h1>
        </>
    )
}

export default CarInfo;