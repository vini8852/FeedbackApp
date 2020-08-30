import React, {PureComponent} from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import Background from '../../../Components/backgound';
import AppNavigation from '../../../Router/AppNavigation';

import styles from './styles';

export class App extends PureComponent {
  render() {
    return (
      <Background>
        <AppNavigation />
      </Background>
    );
  }
}

export default App;
