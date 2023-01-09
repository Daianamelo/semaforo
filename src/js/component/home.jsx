import React from "react";
import { useState } from "react";



//create your first component
const Home = () => {
	const [sombra1,setSombra1]=useState("");
	const [color1,setColor1]= useState("btn-danger");
	

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setSombra1("0 0 15px 10px red");
			setSombra2("");
		setSombra3("");
			
		}else{
		setColor1("btn-danger")
		setColor2("");
		setColor3("");
		setSombra1("0 0 15px 10px red");
	
	}




	
}
const [sombra2,setSombra2]=useState("");
const [color2,setColor2]= useState("btn-warning");

	function encenderAmarillo() {

		if(color2 === "btn-warning"){
			setSombra2("0 0 15px 10px yellow");
			setSombra1("");
		setSombra3 ("");
		}else{
		setColor2("btn-warning");
		setColor1("");
		setColor3("");
	

	}
	}
	const [sombra3,setSombra3]=useState("");
	const [color3,setColor3]= useState("btn-success");

	function encenderVerde() {

		if(color3 === "btn-success"){
			setSombra3("0 0 15px 10px green");
			setSombra1("");
			setSombra2("");
		}else{
		setColor3("btn-success");
		setColor2("");
		setColor1("");
		
		
	}
	}

	



	return (
	<div className="semaforo text-center d-flex flex-column">

		<div className={"btn luces "+color1} style={{boxShadow: sombra1}} onClick={encenderRojo}></div>
		<div className={"btn luces "+color2} style={{boxShadow:sombra2 }} onClick={encenderAmarillo}></div>
		<div className={"btn luces "+color3} style={{boxShadow:sombra3 }} onClick={encenderVerde}></div>	
	</div>	
	);
};

export default Home;
