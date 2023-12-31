import {TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainLayout from './Screen/Dashboard/MainLayout';
import HeaderIcon from './Components/HeaderIcon';
import {COLORS} from './constants';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome Coder's"
          component={MainLayout}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <HeaderIcon />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
