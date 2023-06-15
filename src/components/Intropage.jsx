import "./introstyle.css"
function Intropage () {
    return (
        <div>

           <body>
                {/* this div separates the content in one frame */}
                <section className="container">
                    <div className="containerlove">
                        <div className="border">

                        </div>
                        <p className="love">Love for nature</p>
                    </div>
                    
                    <div className="item">
                        <h2>Discover Your <span className="span">Green</span> Side</h2>    
                    </div>

                    <div>
                        <p className="description">We are your one-stop destination for all things green and growing. Our website 
                        offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor 
                        foliage, allowing you to create your very own green oasis. </p>
                        
                    </div> 

                    <div>
                        <button>
                            <a href="#">Shop now</a>
                        </button>

                    </div>
                                  
                </section>

                
                
            
            </body> 
           
            
        </div>
    );

}


// Disponibilizar a função globalmente ao ser exportada fora da function
export default Intropage;