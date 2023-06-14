import "./introstyle.css"
function Intropage () {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

            {/* this section separates the content in one frame */}
            <section className="container">
                <p className="love">Love for nature</p>
                <h2 className="discover">Discover Your Green Side</h2>
                <p className="description">We are your one-stop destination for all things green and growing. Our website 
                offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor 
                foliage, allowing you to create your very own green oasis. </p>
            </section>
            
            
        </div>
    );

}


// Disponibilizar a função globalmente ao ser exportada fora da function
export default Intropage;