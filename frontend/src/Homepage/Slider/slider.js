import './slider.css'

function Slider() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div id='main-slide' className="carousel-inner">
                    <div  className="carousel-item active">
                        <img  id='slide-1' src={require('./1 (1).png')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img id='slide-2' src={require('./1 (2).png')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img id='slide-1' src={require('./1 (3).png')} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;