import "./introstyle.css"
function Intropage () {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

            {/* this div separates the content in one frame */}
            <div className="container">
                <p className="love">Love for nature</p>
                <section className="item">
                    <h2>Discover Your <span className="span">Green</span> Side</h2>
                </section>
                
                <p className="description">We are your one-stop destination for all things green and growing. Our website 
                offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor 
                foliage, allowing you to create your very own green oasis. </p>
            </div>
            
            
        </div>
    );

}


// Disponibilizar a função globalmente ao ser exportada fora da function
export default Intropage;