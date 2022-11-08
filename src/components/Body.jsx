const { default: ItemListContainer } = require("./ItemListContainer");
const { default: ItemCategories } = require("./ItemCategories");
import { BodyDivs, DetailDiv, PrincipalDiv, CarritoDiv } from './styledComponents';



const Body = ()=> {
    return (
        <>
        <BodyDivs>
            <DetailDiv>
                <ItemCategories />
            </DetailDiv>
            <PrincipalDiv>
                <ItemListContainer />
            </PrincipalDiv>
            <CarritoDiv>
                <p>ACA VA EL CARRITO</p>
                <p>Producto 1 $100</p>
                <p>Producto 2 $100</p>
                <p>TOTAL $200</p>

            </CarritoDiv>
        </BodyDivs>
        </>
        )
}

export default Body;