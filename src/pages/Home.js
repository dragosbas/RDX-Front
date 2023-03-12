import React from 'react'
import SideBar from '../components/SideBar';
import { ChatContextProvider } from '../context/chatContext';
import { useAtom } from 'jotai';
import { userState } from '../state';
import ProfilePage from '../components/ProfilePage';
import CompanyRegistration from '../components/CompanyRegistration';
// import Contracts from '../components/Contracts';
import CompanyPage from './CompanyPage';

const Home = () => {
  const [currentMainPage,] = useAtom(userState.currentMainPage);
  
  return (
    <div className="flex transition duration-500 ease-in-out">
      <ChatContextProvider>
        <SideBar />
        {(() => {
          switch (currentMainPage) {
            case "Profile":
              return <ProfilePage />;
            case "Contracts":
              // return <Contracts />;
              return <CompanyPage />;
            case "CompanyRegistration":
              return <CompanyRegistration />;
            case "CompanyPage":
              return <CompanyPage />;
            default:
              return null;
          }
        })()}
      </ChatContextProvider>
    </div>
  )
}

export default Home