import React, {PureComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import Background from '../../Components/backgound';
import AppButton from '../../Components/AppButton';

import GetStartedPageView from '../../Components/GetStartedPageView';
import {GetStartedData} from '../../Constants/Constants';

import styles from './styles';
import Routes from '../../Router/Routes';

export class GetStarted extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {};

  onTouchGetStarted = this.onTouchGetStarted.bind(this);

  onTouchGetStarted() {
    this.props.navigation.navigate(Routes.SignUp)
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.firstView}>
            <GetStartedPageView styles={styles.pageView} data={GetStartedData} />
          </View>
          <View style={styles.getStarted}>
            <AppButton
              title={'Get started'}
              styles={styles.getStartedButton}
              textStyles={styles.getStartedButtonText}
              onTouch={this.onTouchGetStarted}
            />
          </View>
        </SafeAreaView>
      </Background>
    );
  }
}

export default GetStarted;
