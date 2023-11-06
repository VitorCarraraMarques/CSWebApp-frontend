import { Link, useLocation } from "react-router-dom"; 

export default function NavHome(){
	let location = useLocation(); 
	
	return (
		<nav className="home-nav"> 
			<Link className={`home-nav-link ${location.pathname=="/about" ? "active-link" : ""}`} to="about"> /SOBRE </Link>
			<Link className={`home-nav-link ${location.pathname=="/exp" ? "active-link" : ""}`} to="exp"> /EXPERIÊNCIA </Link> 
			<Link className={`home-nav-link ${location.pathname=="/projects" ? "active-link" : ""}`} to="projects"> /PROJETOS </Link> 
			<Link className={`home-nav-link ${location.pathname=="/config" ? "active-link" : ""}`} to="config"> /CONFIGURAÇÕES </Link> 
		</nav>	
	)
} 