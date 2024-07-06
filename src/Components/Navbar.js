import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={clickHandler}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Signup</button>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React, { Component } from 'react'

// class Navbar extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          clicked :false
//       }
//     }

//     clickHandler =()=>{
//         this.setState({
//             clicked: !this.state.clicked
//         })
//     }

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="Navbar-logo">Trippy</h1>
//         <div className="menu-icons" onClick={this.clickHandler}>
//             <i className={this.state.clicked ? "fas fa-times" :  "fas fa-bars"}></i>

//         </div>
//         <ul className={this.state.clicked ? "nav-menu active": "nav-menu"} >
//             {MenuItems.map((item, index) => {
//                 return (
//                 <li key={index} >
//                 <a className={item.cName} href= {item.url} >
//                 <i className={item.icon} ></i>
//                 {item.title}</a>
//             </li>
//                 )
//             })}
//             <button >Signup</button>
//         </ul>
//       </nav>
//     )

//   }
// }

// export default Navbar
