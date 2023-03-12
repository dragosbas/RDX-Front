import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import CvTable from "../components/CvTable";
import UserDescription from "../components/UserDescription";
import axiosInstance from "../helpers/axios"
import { userState } from "../state";

function CompanyPage() {


  const [data, setData] = useState([]);
  const [user] = useAtom(userState.currentUser);
  

  const getCvsForCompany = async () => {
      try {
          const req = await axiosInstance.get("/user/getByCompany", {
            params: {
                contractId: user.companyEntity.id
              }
            
          });
        console.log(req.data)
        setData(req.data)
    } catch (error) {
      
    }
    
  }

  useEffect(() => { 
    getCvsForCompany();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])


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
        {<CvTable data={data} setCurrentShownUser={setCurrentShownUser} />}
        {currentShownUser && <UserDescription data={currentShownUser} />}
      </div>
      
    </div>
  )
}

export default CompanyPage