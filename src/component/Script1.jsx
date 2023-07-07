

const Script1=()=>{

    function enableDarkMode() {
        let main_body = document.body;
        main_body.classList.toggle("dark-mode");
    
        // Check if checkbox is checked or not
        if (document.getElementById('checkitem').checked) {
            console.log("checked");
        } else {
            console.log("NOT checked");
        }
    }

    return(
<section className='sectioTitle'>
 <div className="title">
 
    <h1>Weather app</h1>
    
    <div className="titleBuscar">
     🔍  
    <input title="Busca una Ciudad" placeholder="Search a City"></input>
    </div>
    <input id="checkitem" type="checkbox"  />
    <script src="script.js"></script>

</div>
 </section>




    )
}
export default Script1;



