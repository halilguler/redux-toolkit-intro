import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardTypes) => {
  const [customerFootInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  const handleAddFootCustomer = () => {
    if (!customerFootInput) return;
    dispatch(addFoodToCustomer({ id, food: customerFootInput }));
    setCustomerFoodInput("");
  };

  return (
    <React.Fragment>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((food) => {
              return <p>{food}</p>;
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFootInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button onClick={handleAddFootCustomer}>Add</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerCard;
