import React, { useState } from "react";

const AddDepertments = () => {
    // Store currently selected category  
    const [category, setCategory] = useState("");

    return (
        <div className="mb-4 ms-3 text-center">
            <select
                name="laptops"
                id="laptop"
                className="select"
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Depertment</option>
                <option value="BBA Faculty">BBA</option>
                <option value="CSE Faculty">CSE</option>
                <option value="EB Faculty">EB</option>
                <option value="ELL Faculty">ELL</option>
            </select>
        </div>
    );
};
export default AddDepertments;

