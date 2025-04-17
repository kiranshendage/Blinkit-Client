import React from "react";
import ColdDrink from "./ColdDrink";
import DairyProduct from "./DairyProduct";
import Gummies from "./Gummies";
import Hookha from "./Hookha";
import MouthFreshner from "./MouthFreshner";
import Rolling from "./Rolling";
import Snack from "./Snack";
import VariousSmallCatagory1 from "./VariousSmallCatagory1";
import VariousSmallCatagory from "./VariousSmallCatagory";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Menu/>
            <VariousSmallCatagory/>
            <VariousSmallCatagory1/>
            <DairyProduct/>
            <Snack/>
            <Hookha/>
            <Rolling/>
            <MouthFreshner/>
            <ColdDrink/>
            <Gummies/>
            <Footer/>
        </div>
    )
}
export default Home;