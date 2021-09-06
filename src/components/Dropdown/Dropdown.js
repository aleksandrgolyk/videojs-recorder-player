import React from 'react'
import './Dropdown.css'

const Dropdown = ({ isGettingDevices }) => {
  console.log(isGettingDevices)
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content')
      let i
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  return (
    <div>
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">
          Dropdown
        </button>
        <div
          id="myDropdown"
          className="dropdown-content"
          style={{ overflowY: 'scroll' }}>
          {isGettingDevices?.map((device, index) => (
            <a href="#" key={index}>
              {device.label}
            </a>
          ))}

          {/*<a href="#">About</a>*/}
          {/*<a href="#">Contact</a>*/}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
