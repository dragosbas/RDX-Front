import { useAtom } from 'jotai';
import React from 'react'
import RegisterContractForm from '../forms/RegisterContractForm'
import axiosInstance from '../helpers/axios';
import { userState } from '../state';

function Contracts() {



  


  return (
    <div className='m-12 p-2 mx-auto'>
      <h1 className='font-extrabold text-2xl'>Create a contract!</h1>
      <div>
        <RegisterContractForm />
      </div>
    </div>
  )
}

export default Contracts