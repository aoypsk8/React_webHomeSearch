// import React, { useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";

// function App() {
//   const [minValue, setMinValue] = useState(0);
//   const [maxValue, setMaxValue] = useState(0);

//   const handleChange = (e) => {
//     setMinValue(e.minValue);
//     setMaxValue(e.maxValue);
//     console.log(`Min value: ${e.minValue}, Max value: ${e.maxValue}`);
//   };

//   return (
//     <div>
//       <div>
//         <MultiRangeSlider
//           min={0}
//           max={100}
//           onInput={handleChange}
//           onChange={handleChange}
//           label={false}
//           ruler={false}
//           style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
//           barInnerColor="00B8D1"
//           thumbLeftStyle=""
//           thumbRightStyle=""
//         />
//         <span>{minValue}/</span>
//         <span>{maxValue}</span>
//       </div>
//     </div>
//   );
// }

// export default App;
