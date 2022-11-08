const { AppBar } = require("@material-ui/core")
const { Wrapper2, MenuItem } = require("./styledComponents")
import { Link } from "react-router-dom";


const SecondBar = ()=> {
    return (
        <>
        <AppBar position="relative">
            <Wrapper2>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><MenuItem>Categorias</MenuItem></Link>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><MenuItem>OFERTAS %</MenuItem></Link>
                    <Link to='/' style={{textDecoration: "none", color: "black"}}><MenuItem>WhatsApp</MenuItem></Link>  
            </Wrapper2>

        </AppBar>
        </>
    )
}

export default SecondBar;