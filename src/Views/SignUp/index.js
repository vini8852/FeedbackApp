import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';
import {Icons} from '../../Constants/Assets';
import { welcomeNote } from '../../Constants/Constants';

class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  signInButtonAction = this.signInButtonAction.bind(this);

  signInButtonAction() {
    this.props.navigation.navigate(Routes.AddTeam);
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Welcome'}
            subtitle={'Signup to start your feedback journey'}
          />
          <ManageKeyboardScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.keyboardAvoidView}>
            {this.renderMiddleView()}
            {this.renderButtomView()}
          </ManageKeyboardScrollView>
        </SafeAreaView>
      </Background>
    );
  }

  renderMiddleView() {
    return (
      <View style={styles.middleView}>
        {this.renderEmailAddress()}
        {this.renderSignButton()}
        {this.renderGoogleButton()}
      </View>
    );
  }

  renderButtomView() {
    return (
      <View style={styles.bottomView}>
        <Text style={styles.welcomeNote}>{welcomeNote}</Text>
      </View>
    );
  }

  renderEmailAddress() {
    return (
      <View style={styles.inputContainer}>
        <Text>{'Email'}</Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={'emailTextField'}
          placeholder={'Enter work email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          autoCorrect={false}
          style={styles.inputViewStyle}
          onChangeText={text => this.setState({email: text})}
          onSubmitEditing={event => {
          }}
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

  renderGoogleButton() {
    return (
      <View style={styles.signInContainer}>
        <AppButton
          title={'Continue with Google'}
          image={Icons.google}
//          onTouch={this.signInButtonAction}
          styles={styles.googleButtonStyle}
          textStyles={styles.googleButtonTextStyle}
        />
      </View>
    );
  }
}

export default SignUp;
