// import React, { Component } from "react";
// export default class Count extends Component {
//   state = {
//     Count: 0
//   };
//   add = () => {
//     this.setState({ Count: this.state.Count + 1 });
//   };

//   kam = () => {
//     this.setState({ Count: this.state.Count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.kam}>-</button>
//         <p>{this.state.Count}</p>
//         <button onClick={this.add}>+</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  return(
  <div>
    <button onClick={() => setCount(count + 1)}>+</button>
    <p>{count}</p>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
  );
};

export default Count;

