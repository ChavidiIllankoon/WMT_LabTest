import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createItem(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      alert("Failed to add item");
    }
  };

  return (
    <ItemForm
      initialData={{}}
      submitText="Add Item"
      onSubmit={handleSubmit}
    />
  );
}

export default AddItemPage;