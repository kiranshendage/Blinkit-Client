import React, { useEffect, useState } from "react";
import axios from "axios";

const VariousSmallCatagory = () => {
    const [variousSmallCatagory, setVariousSmallCatagory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://blinkit-server-mongo.onrender.com/VariousSmallCatagory")
            .then((response) => {
                console.log("API Response:", response.data);
                if (Array.isArray(response.data.variousSmallCatagoryList)) {
                    setVariousSmallCatagory(response.data.variousSmallCatagoryList);
                } else {
                    setVariousSmallCatagory([]);
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
        <div className="various-small-catagory-div">
            <div className="various-small-catagory">
                {variousSmallCatagory.map((item) => (
                    <div key={item.id} className="block">
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VariousSmallCatagory;
