import Carousel from 'react-bootstrap/Carousel';

export const CarDisplays = () => {
    return (
        <Carousel data-bs-theme="light" style={{ width: "50%", marginLeft: "25%", }}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B368B465A4DC909CDB6E799ACB64899B54E731B6D894FA5B080D75DB2F30533/scale?aspectRatio=1.78&format=jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallup.net/wp-content/uploads/2019/09/841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.5a9ccaddc8257ec7d13217718caadd63?rik=YJSnPkLVmLofqw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-3rtIf4n9ojo%2fU4qyeClR3_I%2fAAAAAAAADRk%2fu7ug_YFr_bs%2fs1600%2fyellow-bull-lamborghini-aventador-on-pur-rs04-by-sr-auto-group-(3).jpg&ehk=94Jq3ZV8BTF4Km8gZQc3XkQL8kVTpSoefC9Fu8k1t9o%3d&risl=&pid=ImgRaw&r=0"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/455679-car-BMW-BMW_i8.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}