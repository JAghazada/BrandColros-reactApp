import React from "react";
import Modal from 'react-modal'
import {useState} from "react";
import {GrClose} from 'react-icons/gr'
function Sidebar(){
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const openModal =()=>{
        setModalIsOpen(!modalIsOpen)
    }
    return(
       <>
           <aside className="sidebar">

               <div className="logo">
                   Brand<b>Colors</b>
               </div>
               <div className="info">
                   The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
               </div>
               <nav>
                   <menu>
                       <ul>
                           <li onClick={openModal}>
                               About Brand<b>Colors</b>
                           </li>
                       </ul>
                   </menu>
               </nav>
           </aside>
           <Modal

               isOpen={modalIsOpen}
               onRequestClose={openModal}
               className="about-modal"
               overlayClassName="about-modal-overlay"

           >


               <div>
                   <GrClose style={{
                       position:"relative",
                       top:10,
                       left:"100%",
                       fontSize:22
                   }}  onClick={openModal}></GrClose>
                   <h3><b>About Brand Colors</b></h3>
                   <p>
                       BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.

                       It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.
                   </p>

               </div>
           </Modal>
       </>
    )
}
export default Sidebar