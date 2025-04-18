import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ColdDrinkByName = () => {
  const { name } = useParams();
  const [coldDrink, setColdDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios
      .get(`${serverUrl}/ColdDrinkName/${name}`)
      .then((response) => {
        setColdDrink(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [name,serverUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!coldDrink.length) return <p>No cold drink found.</p>;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.username && newReview.comment) {
      const updatedReviews = [...(coldDrink.reviews || []), newReview];
      setColdDrink({ ...coldDrink, reviews: updatedReviews });
      setNewReview({ username: "", rating: 5, comment: "" });
    }
  };

  const averageRating = coldDrink.reviews?.length
    ? (coldDrink.reviews.reduce((sum, review) => sum + review.rating, 0) / coldDrink.reviews.length).toFixed(1)
    : "No Ratings Yet";

  return (
    <motion.div className="cold-drink-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="cold-drink-grid">
        {coldDrink.map((item) => (
          <motion.div key={item.id} className="cold-drink-card" whileHover={{ scale: 1.05 }}>
            <div className="card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-details">
              <span className="drink-name">{item.name}</span>
              <span className="drink-size">{item.quantity}</span>
              <span className="drink-price">{item.price}</span>
              <button className="add-button">Buy Product</button>
              <p className="average-rating">⭐ {averageRating} / 5</p>
              <h3>Refresh your soul, recharge your body</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="review-container">
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          {coldDrink.reviews?.length > 0 ? (
            coldDrink.reviews.map((review, index) => (
              <motion.div key={index} className="review-card" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05 }}>
                <p className="review-user">
                  <strong>{review.username}</strong> ⭐ {review.rating}/5
                </p>
                <p className="review-comment">"{review.comment}"</p>
              </motion.div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <div className="add-review-section">
          <h2>Add a Review</h2>
          <motion.form onSubmit={handleReviewSubmit} className="review-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <input type="text" placeholder="Your Name" value={newReview.username} onChange={(e) => setNewReview({ ...newReview, username: e.target.value })} required />
            <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
              {[5, 4, 3, 2, 1].map((rating) => (
                <option key={rating} value={rating}>{rating} Stars</option>
              ))}
            </select>
            <textarea placeholder="Write a review..." value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} required />
            <button type="submit" className="submit-button">Submit Review</button>
          </motion.form>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
    </motion.div>
  );
};

export default ColdDrinkByName;
