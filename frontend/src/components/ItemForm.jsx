import { useState } from "react";
import "./ItemForm.css"; // 👈 ADD THIS LINE (important)

function ItemForm({ onSubmit, submitText, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [couponCode, setCouponCode] = useState(initialData.couponCode || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      category,
      price: Number(price),
      description,
      imageUrl,
      couponCode,
    });
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <div className="form-group">
        <label>Item Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Coupon Code</label>
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
        />
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default ItemForm;