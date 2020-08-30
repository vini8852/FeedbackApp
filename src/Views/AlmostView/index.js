import React, {Component} from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';
import {Logos} from '../../Constants/Assets';

class AlmostView extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {};

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Almost there..'}
            subtitle={'Simply click the verification link sent to'}
          />
          <ManageKeyboardScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.keyboardAvoidView}>
            <Text style={styles.emailText}>{'vineeta@dockabl.com'}</Text>
            {this.renderBottomView()}
          </ManageKeyboardScrollView>
        </SafeAreaView>
      </Background>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.bottomView}>
        <Image source={Logos.almostComplete} style={styles.bottomImage} />
      </View>
    );
  }
}

export default AlmostView;
