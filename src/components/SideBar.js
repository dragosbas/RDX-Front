import React, { useState, useContext } from 'react'
import { MdClose, MdMenu, MdOutlineLogout, MdOutlineQuestionAnswer, MdPerson, MdLibraryBooks, MdAddBusiness } from 'react-icons/md'
import { ChatContext } from '../context/chatContext'
import bot from '../assets/bot.ico'
import DarkMode from './DarkMode'
import { AuthContext } from '../context/AuthContext';
import { useAtom } from 'jotai'
import { userState } from '../state'

/**
 * A sidebar component that displays a list of nav items and a toggle 
 * for switching between light and dark modes.
 * 
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true)
  const [, , clearMessages] = useContext(ChatContext)
  const { signOut } = useContext(AuthContext);
  const [currentUser,] = useAtom(userState.currentUser);
  const [companyMode, setCompanyMode] = useAtom(userState.companyMode);
  const [, setCurrentMainPage] = useAtom(userState.currentMainPage);
  /**
   * Toggles the dark mode.
   */
  const clearChat = () => clearMessages()
  const SignOutHandler = () => {
    signOut()
    clearChat()
    window.sessionStorage.clear()
  }

  return (
    <section className={` ${open ? "w-72" : "w-20 "} sidebar`}>
      <div className="sidebar__app-bar">
        <div className={`sidebar__app-logo ${!open && "scale-0 hidden"}`}>
          <span className='w-8 h-8'><img src={bot} alt="" /></span>
        </div>
        <h1 className={`sidebar__app-title ${!open && "scale-0 hidden"}`}>
          {currentUser.name && currentUser.name}
        </h1>
        <div className='sidebar__btn-close' onClick={() => setOpen(!open)}>
          {open ? <MdClose className='sidebar__btn-icon' /> : <MdMenu className='sidebar__btn-icon' />}

        </div>
      </div>
      <div className="nav">
        <span className='nav__item  bg-light-white' onClick={() => setCurrentMainPage('Profile')}>
          <div className='nav__icons'>
            <MdPerson />
          </div>
          <h1 className={`${!open && "hidden"}`}>Profil</h1>
        </span>
      </div>

      <div className="nav">
        <span className='nav__item  bg-light-white' onClick={() => setCurrentMainPage('Contracts')}>
          <div className='nav__icons'>
            <MdLibraryBooks />
          </div>
          <h1 className={`${!open && "hidden"}`}>Contracte</h1>
        </span>
      </div>

      <div className="nav__bottom">
        {!currentUser.companyEntity ?
          <div className="nav">
            <span className='nav__item ' onClick={() => setCurrentMainPage('CompanyRegistration')}>
              <div className='nav__icons'>
                <MdAddBusiness />
              </div>
              <h1 className={`${!open && "hidden"}`}>Inregistrare Companie</h1>
            </span>
          </div> :
          
          (companyMode ?
            <div className="nav">
              <span className='nav__item ' onClick={() => setCompanyMode(false)}>
                <div className='nav__icons'>
                  <MdAddBusiness />
                </div>
                <h1 className={`${!open && "hidden"}`}>Mod Individ</h1>
              </span>
            </div>
            : <div className="nav">
              <span className='nav__item ' onClick={() => setCompanyMode(true)}>
                <div className='nav__icons'>
                  <MdAddBusiness />
                </div>
                <h1 className={`${!open && "hidden"}`}>Mod Companie</h1>
              </span>
            </div>)


        }

        <DarkMode open={open} />
        <div className="nav">
          <a href='./' className="nav__item">
            <div className="nav__icons">
              <MdOutlineQuestionAnswer />
            </div>
            <h1 className={`${!open && "hidden"}`}>Noutati</h1>
          </a>
        </div>
        <div className="nav">
          <span className="nav__item" onClick={SignOutHandler}>
            <div className="nav__icons">
              <MdOutlineLogout />
            </div>
            <h1 className={`${!open && "hidden"}`}>Deconectare</h1>
          </span>
        </div>
      </div>
    </section >
  )
}

export default SideBar