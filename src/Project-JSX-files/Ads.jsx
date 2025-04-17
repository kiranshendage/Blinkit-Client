import React, { useEffect, useState } from "react";
import { useParams,Link  } from "react-router-dom";
import axios from "axios";

const Ads = () => {
  const { city } = useParams(); // Get restaurant city from URL
  const [dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://blinkit-server-mongo.onrender.com/SelectAds/${city}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        setDataa(response.data); // Assuming API returns a object
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);  
      });
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dataa) return <p>No Data found.</p>;

  return (
    
    <div className="dairy-product-div">
    <div className="dairy-product">
    
        {dataa.map((item) => (
            
            <div key={item.id} className="dairy-product-card">
                <div className="dairy-product-card-upper">
                 <Link to={`/SelectAds/${city}`}><img src={item.image} alt="" /></Link>  
                </div>
                <span className="ear">*EARLIST</span>
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

  );
};


export default Ads;
