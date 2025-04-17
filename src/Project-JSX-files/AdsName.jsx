import React, { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import axios from "axios";

const AdsName = () => {
  const { name } = useParams(); // Get restaurant city from URL
  const [dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://blinkit-server-mongo.onrender.com/SelectAds/${name}`)
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
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dataa) return <p>No Data found.</p>;

  return (
    
    <div className="cold-drink-container">
    <div className="cold-drink-grid">
      {dataa.map((item) => (
        <div key={item.id} className="cold-drink-card">
          <div className="card-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-details">
            <span className="drink-name">{item.name}</span>
            <span className="drink-size">{item.quantity}</span>
            <span className="drink-price">{item.price}</span>
            <button className="add-button">Buy Product</button>
            <h3>Pure, fresh, and full of life - that's dairy for you!</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};



export default AdsName;
