import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014709Navigator from '../features/CopyOfBlankScreen014709/navigator';
import BlankScreen114708Navigator from '../features/BlankScreen114708/navigator';
import BlankScreen014705Navigator from '../features/BlankScreen014705/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014709: { screen: CopyOfBlankScreen014709Navigator },
BlankScreen114708: { screen: BlankScreen114708Navigator },
BlankScreen014705: { screen: BlankScreen014705Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
