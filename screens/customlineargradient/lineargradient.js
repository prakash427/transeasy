// import React from 'react';
// import { LinearGradient } from 'react-native-linear-gradient';

// const CustomLinearGradient = ({ children }) => {
//   return (
//     <LinearGradient
//       style={{ flex: 1 }}
//       colors={['#7070d9', '#24a1c9']}
//       start={{ x: 1, y: 0 }}
//       end={{ x: 0, y: 1 }}
//     >
//       {children}
//     </LinearGradient>
//   );
// };

// export default CustomLinearGradient;

import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

const CustomLinearGradient = ({ children, colors, start, end, additionalStyles }) => {
  const defaultColors = ['#7070d9', '#24a1c9'];

  return (
    <LinearGradient
      style={[{ flex: 1 }, additionalStyles]}
      colors={colors || defaultColors}
      start={start || { x: 1, y: 0 }}
      end={end || { x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;

