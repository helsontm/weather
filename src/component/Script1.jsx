import { useEffect, useState } from "react";

const Script1=()=>{
    

    const [isOn, setIsOn] = useState(false);

    const changeBulb = () => {
        setIsOn(
            document.body.classList.toggle("dark-mode")  
        );
    }



    return(
<section className='sectioTitle'>
 <div className="title">
 
    <h1>Weather app</h1>
    
    <div className="titleBuscar">
     🔍  
    <input title="Busca una Ciudad" placeholder="Search of City"></input>
    </div>
    <input id="checkitem" type="checkbox"  onClick={changeBulb}/>
    <script src="script.js"></script>

</div>
 </section>




    )
}
export default Script1;



