import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DairyProduct = () => {
    const [dairyProduct, setDairyProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://blinkit-server-mongo.onrender.com/DairyProduct")
            .then((response) => {
                console.log("API Response:", response.data);
                if (Array.isArray(response.data.dairyProductList)) {
                    setDairyProduct(response.data.dairyProductList);
                } else {
                    setDairyProduct([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div className="dairy-product-div-heading">
                <div className="dairy-product-div-heading1">
                    <h2>Dairy, Bread & Eggs</h2>
                </div>
            </div>
            <div className="dairy-product-div">
                <div className="dairy-product">
                    {dairyProduct.map((item) => (
                        
                        <div key={item.id} className="dairy-product-card">
                            <div className="dairy-product-card-upper">
                            <Link to={`/DairyProductName/${item.name}`}><img src={item.image} alt="" /> </Link>
                            </div>
                            <span className="ear">*EARLIEST</span>
                            <span className="hed">{item.name}</span>
                            <span className="ml">{item.quantity}</span>
                            <div className="price">
                                <span className="price-p">{item.price}</span>
                                <button className="price-b">ADD</button>
                            </div>
                           
                        </div>
                       
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DairyProduct;
