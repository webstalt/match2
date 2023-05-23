/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

import {ChoiceScreen} from './pages/choice-screen';
import {SignUp} from './pages/sign-up';

const Stack = createNativeStackNavigator();

enum Screens {
  Choice = 'Choice',
  SignUp = 'SignUp',
}

function App(): JSX.Element {
  useEffect(() => {
    const request = async () => {
      try {
        // const me = await fetch('https:dev-m2.ru/api/match2/profiles/me');
        // console.log(me, 'result');
      } catch (e) {
        // setScreen(Screens.SignUp);
      }
    };
    request();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.SignUp}>
          <Stack.Screen
            name={Screens.SignUp}
            component={SignUp}
            options={{title: 'Регистрация'}}
          />

          <Stack.Screen
            name={Screens.Choice}
            component={ChoiceScreen}
            options={{title: 'Мэтч квадратный'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
