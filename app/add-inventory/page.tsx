"use client"; // Make sure to include this

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation after submission

export default function AddInventoryPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    room: '',
    quantity: 0,
    supply_level: ''
  });
  
  const router = useRouter(); // Initialize the router

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Item added successfully, redirect to the inventory list or show a success message
        router.push('/'); // Redirect to the home page or inventory list
      } else {
        const errorData = await response.json();
        console.error("Failed to add item:", errorData.error);
        // Handle error (e.g., show a notification)
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <div>
      <h1>Add New Inventory Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="room"
          placeholder="Room"
          value={formData.room}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="supply_level"
          placeholder="Supply Level"
          value={formData.supply_level}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Inventory Item</button>
      </form>
    </div>
  );
}
