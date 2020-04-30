import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile35610Navigator from '../features/UserProfile35610/navigator';
import Maps35591Navigator from '../features/Maps35591/navigator';
import Settings35569Navigator from '../features/Settings35569/navigator';
import Settings35554Navigator from '../features/Settings35554/navigator';
import NotificationList35553Navigator from '../features/NotificationList35553/navigator';
import Maps35552Navigator from '../features/Maps35552/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile35610: { screen: UserProfile35610Navigator },
Maps35591: { screen: Maps35591Navigator },
Settings35569: { screen: Settings35569Navigator },
Settings35554: { screen: Settings35554Navigator },
NotificationList35553: { screen: NotificationList35553Navigator },
Maps35552: { screen: Maps35552Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
