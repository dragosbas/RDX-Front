import { useEffect, useState } from "react";
import CvTable from "../components/CvTable";
import UserDescription from "../components/UserDescription";
import axiosInstance from "../helpers/axios"

function CompanyPage() {

  const mock = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phoneNr": "+1 555-123-4567",
      "cosineSimilarity": 0.86,
      "textcv": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt repellendus illo maxime eius error quae quidem distinctio sit veritatis!"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "phoneNr": "+1 555-987-6543",
      "cosineSimilarity": 0.92,
      "textcv": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt repellendus illo maxime eius error quae quidem distinctio sit veritatis!"
    },
    {
      "id": 3,
      "name": "Bob Smith",
      "email": "bobsmith@example.com",
      "phoneNr": "+1 555-555-5555",
      "cosineSimilarity": 0.78,
      "textcv": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt repellendus illo maxime eius error quae quidem distinctio sit veritatis!"
    }
  ];


  const [currentShownUser, setCurrentShownUser] = useState("");


    const getMyContracts = async () => {
        try {
          const req = await axiosInstance.get("/contract/my-contracts", {
            params: {
              id: 152
            }
          });   
          const data = req.data;
          console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
  
  useEffect(
    () => {
      getMyContracts();
    }
    , [])



  return (
    <div className="ml-8 mt-12">
      <div className="flex gap-8">
        {<CvTable data={mock} setCurrentShownUser={setCurrentShownUser} />}
        {currentShownUser && <UserDescription data={currentShownUser} />}
      </div>
      
    </div>
  )
}

export default CompanyPage