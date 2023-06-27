import React from 'react'
import logo from './spin.gif'
const Loader = () => {
//   return (
//     <div>
//       loading...
//       <img url="https://newlifegrit.com/wp-content/uploads/2021/04/spin.gif"/>
//     </div>
//   )
// }
const styleload={
    // position: "absolute",
    display: "flex",
    // margin-left: "39%",
    margin: "15% 45%",
    width: "10vw"
}
  
  return (
    
    <div >
      <img style={styleload} src={logo}/>
    </div>
  )
}

export default Loader   