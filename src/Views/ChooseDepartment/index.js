import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';
import {DepartmentsData} from '../../Constants/Constants';
import { Color } from '../../Constants/Color';

import styles from './styles';

class ChooseDepartment extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selectedIndex: 0,
  };

  signInButtonAction = this.signInButtonAction.bind(this);
  renderItem = this.renderItem.bind(this)

  signInButtonAction() {
    this.props.navigation.navigate(Routes.Project);
  }

  onTouch({item, index}) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'choose your department'}
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
      <FlatList
        extraData={this.state}
        data={DepartmentsData}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.id}
      />
    );
  }

  renderItem({item, index}) {
    const textColor = this.state.selectedIndex == index ? { color: Color.shadow} :{}

    return (
      <Text
        onPress={() => {
          this.onTouch({item, index});
        }}
        style={[styles.itemText, textColor]}>
        {item.name}
      </Text>
    );
  }

  renderButtomView() {
    return <View style={styles.bottomView}>{this.renderSignButton()}</View>;
  }

  renderSignButton() {
    return (
      <AppButton
        title={'Next'}
        onTouch={this.signInButtonAction}
        styles={styles.signInButtonStyle}
        textStyles={styles.signInButtonTextStyle}
      />
    );
  }
}

export default ChooseDepartment;
