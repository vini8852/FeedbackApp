import React, {Component} from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import styles from './styles';
import {Logos} from '../../Constants/Assets';

class Project extends Component {
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
            title={'Welcome to project screen..'}
          />


           <View style={styles.Image}>
              <Image source={Logos.connect} style={styles.bottomImage}/>
              <Text style={styles.emailText}>Start engaging with your peers.</Text>
          </View>




        </SafeAreaView>
      </Background>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.bottomView}>
        <View>
            <Image source={Logos.connect} style={styles.bottomImage} />
            <Text style={styles.emailText}>Start engaging with your peers.</Text>
        </View>
      </View>
    );
  }
}

export default Project;
