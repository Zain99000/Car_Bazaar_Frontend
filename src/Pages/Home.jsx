import axios from "axios";
import { CarDisplays } from "../Components/CarDisplaysAutomatic"
import Header from "../Components/Header"
import { useEffect, useState } from "react";

const Home = () => {

    const [cars, setCars] = useState([]);

    const getCardetails = () => {
        axios.get(`http://localhost:8000/getcardetails`)
            .then((response) => {
                if (!response.data) {
                    console.log(`Invalid response`);
                    return;
                }

                if (response.data.Available) {
                    setCars(response.data.Cars);
                    console.log(response.data);
                    return;
                }

                alert(response.data.message);
                console.log(response.data);
                setCars([]);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCardetails();
    }, [])

    return (
        <>
            <Header />

            {!cars.length ? <h2>No Cars Yet...</h2>
                :
                cars.map((car) => {
                    return <CarDisplays car={car} />
                })}
        </>
    )
}

export default Home;