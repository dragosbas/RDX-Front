import React from 'react'
import SideBar from '../components/SideBar';
import { ChatContextProvider } from '../context/chatContext';
import { useAtom } from 'jotai';
import { userState } from '../state';
import ProfilePage from '../components/ProfilePage';
import CompanyRegistration from '../components/CompanyRegistration';
import Contracts from '../components/Contracts';

const Home = () => {
  const [currentMainPage,] = useAtom(userState.currentMainPage);
  return (
    <div className="flex transition duration-500 ease-in-out">
      <ChatContextProvider>
        <SideBar />
        {(() => {
          switch (currentMainPage) {
            case 'Profile':
              return <ProfilePage />;
            case 'Contracts':
              return <Contracts />;
            case 'CompanyRegistration':
              return <CompanyRegistration />;
            default:
              return null;
          }
        })()}
      </ChatContextProvider>
    </div>
  )
}

export default Home