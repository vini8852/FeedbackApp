import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View, Alert} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';
import { addWorkShop } from '../../Server/ApiController';

class CreateWorkShop extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
  };

  signInButtonAction = this.signInButtonAction.bind(this);

  signInButtonAction() {
    if(this.state.name.length == 0) {
      Alert.alert('Error','Please Enter Name.',[
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ])
      return
    }
   

    addWorkShop({ProjectName: this.state.name, ProjectFrequency: '2' }).then((respose)=>{
      this.props.navigation.navigate(Routes.YourRole);
    }).catch(error =>{

    })
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Create workspace'}
            subtitle={'Please create your workspace'}
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
        <Text>{'Workspace'}</Text>
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={'emailTextField'}
          placeholder={'Enter workspace name'}
          keyboardType={'default'}
          autoCapitalize={'words'}
          returnKeyType={'next'}
          autoCorrect={true}
          style={styles.inputViewStyle}
          onChangeText={text => this.setState({name: text})}
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

export default CreateWorkShop;
