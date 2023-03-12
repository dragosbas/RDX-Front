import { useState } from "react";
import { useAtom } from "jotai";
import { userState } from "../state";
import axiosInstance from "../helpers/axios";


const RegisterContractForm = () => {

      const [user] = useAtom(userState.currentUser);

  const [formData, setFormData] = useState({
    profileText: "",
    budget: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      
        try {
          const req = await axiosInstance.post("/contract/register", {
            params: {
              id: user.id,
                  profileText: formData.profileText,
                  budget: formData.budget
            }
          });   
          const data = req.data;
          console.log(data);
        } catch (error) {
            console.log(error)
        }
    
  };

  return (
    <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="profileText"
        >
          Profile Text
        </label>
        <textarea
          className="form-textarea border rounded py-2 px-3 w-full"
          id="profileText"
          name="profileText"
        rows="8"
        cols="16"
          placeholder="Enter profile text here..."
          value={formData.profileText}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="budget"
        >
          Budget
        </label>
        <input
          className="form-number border rounded py-2 px-3 w-full"
          id="budget"
          name="budget"
          type="number"
          placeholder="Enter budget here..."
          value={formData.budget}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterContractForm;


