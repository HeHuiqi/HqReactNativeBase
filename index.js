
import { AppRegistry } from 'react-native';
// import App from './App';
import HqApp from './HqScreens/HqApp'
// import HqHome from './HqScreens/HqHomeScreen'
// import HqDetail from './HqScreens/HqDetailScreen'

// import HqLoginView from './HqComponents/HqLoginView'

// import HqListView from './HqComponents/HqListView'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('HqReactNativeBase', () => HqApp);
