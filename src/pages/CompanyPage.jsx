import { useEffect } from "react";
import axiosInstance from "../helpers/axios"

function CompanyPage() {

    const getMyContracts = async () => {
        try {
          const req = await axiosInstance.get("/contract/my-contracts",{});
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
    <div>CompanyPage</div>
  )
}

export default CompanyPage