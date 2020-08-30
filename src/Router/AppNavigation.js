import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import GetStarted from '../Views/GetStarted';
import SignUp from '../Views/SignUp';
import CreateWorkShop from '../Views/CreateWorkShop';
import ChooseDepartment from '../Views/ChooseDepartment';
import AddTeam from '../Views/AddTeam';
import AlmostView from '../Views/AlmostView';
import YourRole from '../Views/YourRole';
import YourSkills from '../Views/YourSkills';
import InviteTeam from '../Views/InviteTeam';
import Project from '../Views/Project/Project';

import Routes from './Routes'

const AppNavigator = createStackNavigator(
  {
    [Routes.GetStarted]: GetStarted,
    [Routes.SignUp]: SignUp,
    [Routes.CreateWorkShop]: CreateWorkShop,
    [Routes.ChooseDepartment]: ChooseDepartment,
    [Routes.AddTeam]: AddTeam,
    [Routes.AlmostView]: AlmostView,
    [Routes.YourRole]: YourRole,
    [Routes.YourSkills]: YourSkills,
    [Routes.InviteTeam]: InviteTeam,
    [Routes.Project]: Project
  },
  {
    initialRouteName: Routes.GetStarted
  }
)

export default createAppContainer(AppNavigator)
