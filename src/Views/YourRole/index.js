import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';

class YourRole extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  signInButtonAction = this.signInButtonAction.bind(this);

  signInButtonAction() {
    this.props.navigation.navigate(Routes.YourSkills);
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Your Role'}
            subtitle={'Please enter your role in the organization..'}
          />
          <ManageKeyboardScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.keyboardAvoidView}>
            {this.renderEmailAddress()}
            {this.renderButtomView()}
          </ManageKeyboardScrollView>
        </SafeAreaView>
      </Background>
    );
  }

  renderMiddleView() {
    return <View style={styles.middleView}>{this.renderEmailAddress()}</View>;
  }

  renderButtomView() {
    return <View style={styles.bottomView}>{this.renderSignButton()}</View>;
  }

  renderEmailAddress() {
    return (
      <View style={styles.inputContainer}>
        <Text>{'Role'}</Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={'emailTextField'}
          placeholder={'Enter department'}
          keyboardType={'default'}
          autoCapitalize={'words'}
          returnKeyType={'next'}
          autoCorrect={true}
          style={styles.inputViewStyle}
          onChangeText={text => this.setState({email: text})}
          onSubmitEditing={event => {}}
        />
      </View>
    );
  }

  renderSignButton() {
    return (
      <View style={styles.signInContainer}>
        <AppButton
          title={'Continue'}
          onTouch={this.signInButtonAction}
          styles={styles.signInButtonStyle}
          textStyles={styles.signInButtonTextStyle}
        />
      </View>
    );
  }
}

export default YourRole;
