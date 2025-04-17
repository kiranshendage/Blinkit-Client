import React, { useEffect, useState } from "react";
import axios from "axios";

const VariousSmallCatagory1 = () => {
    const [variousSmallCatagory1, setVariousSmallCatagory1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://blinkit-server-mongo.onrender.com/VariousSmallCatagory1")
            .then((response) => {
                console.log("API Response:", response.data);
                if (Array.isArray(response.data.variousSmallCatagory1List)) {
                    setVariousSmallCatagory1(response.data.variousSmallCatagory1List);
                } else {
                    setVariousSmallCatagory1([]);
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
                {variousSmallCatagory1.map((item) => (
                    <div key={item.id} className="block">
                        <img src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VariousSmallCatagory1;
