
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import EmployeeDetailScreen from './src/screens/EmployeeDetailScreen';

const AppNavigator = createStackNavigator(
  {
    EmployeeList: EmployeeListScreen,
    EmployeeDetail: EmployeeDetailScreen,
  },
  {
    initialRouteName: 'EmployeeList',
  }
);

export default createAppContainer(AppNavigator);
