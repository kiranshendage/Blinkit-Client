import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://blinkit-server-mongo.onrender.com/Menu")
            .then((response) => {
                console.log("API Response:", response.data);
                if (Array.isArray(response.data.menuList)) {
                    setMenu(response.data.menuList);
                } else {
                    setMenu([]);
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
        <div className="various-catagory-div">
          <div className="various-catagory">
            {menu.map((item) => (
              <div className="various-catagory-box" key={item.id}>
                <img src={item.image} alt="product" />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Menu;
