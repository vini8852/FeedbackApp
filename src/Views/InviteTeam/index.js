import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';

class InviteTeam extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
  };

  signInButtonAction = this.signInButtonAction.bind(this);

  signInButtonAction() {
    this.props.navigation.navigate(Routes.ChooseDepartment);
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Invite Team'}
            subtitle={'Please invite your team members to make the process more interesting..'}
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
        <Text>{'Email'}</Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={'emailTextField'}
          placeholder={'Enter email address'}
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
          title={'Invite'}
          onTouch={this.signInButtonAction}
          styles={styles.signInButtonStyle}
          textStyles={styles.signInButtonTextStyle}
        />
      </View>
    );
  }
}

export default InviteTeam;
