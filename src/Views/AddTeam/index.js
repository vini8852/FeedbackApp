import React, {Component} from 'react';
import {SafeAreaView, FlatList, TextInput, View, Text, Image} from 'react-native';

import BaseNavigationHeader from '../../Components/navigation-header/BaseNavigationHeader';
import AppButton from '../../Components/AppButton';
import ManageKeyboardScrollView from '../../Constants/ManageKeyboardScrollView';
import Routes from '../../Router/Routes';
import Background from '../../Components/backgound';

import {Color} from '../../Constants/Color';
import AddTeamItem from '../../Components/AddTeamItem';
import {TeamData} from '../../Constants/Constants';

import styles from './styles';
import {Icons, Logos} from '../../Constants/Assets';
import {getWorkShops} from '../../Server/ApiController';

class AddTeam extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selectedTeams: [],
    data:[],
    isLoading: true
  };

  signInButtonAction = this.signInButtonAction.bind(this);
  skipButtonAction = this.skipButtonAction.bind(this);
  renderItem = this.renderItem.bind(this);

  componentDidMount() {
    this.fetchWorkShops();
  }

  fetchWorkShops() {
    getWorkShops()
      .then(response => {
        this.setState({
            data: response,
            isLoading: false
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
        this.setState({
            isLoading: false
        })
      });
  }

  signInButtonAction() {
    this.props.navigation.navigate(Routes.CreateWorkShop);
  }

  skipButtonAction() {}

  onSelectTeam({item}) {
    var team = this.state.selectedTeams;
    let isInclude = team.includes(item.id);
    if (isInclude) {
      team = team.filter(t => {
        return t.id != item.id;
      });
    } else {
      team.push(item.id);
    }
    this.setState({selectedTeams: team});
  }

  render() {
    return (
      <Background>
        <SafeAreaView style={styles.container}>
          <BaseNavigationHeader
            navigation={this.props.navigation}
            title={'Workspaces'}
            subtitle={'These are your workspaces..'}
          />
          {this.renderMiddleView()}
          {this.renderButtomView()}
        </SafeAreaView>
      </Background>
    );
  }

  renderMiddleView() {
    return <View style={styles.middleView}>{this.renderFlatList()}</View>;
  }

  renderFlatList() {
    return (
     <View>
        {
        this.state.isLoading ? <Text>Loading...</Text>:
         <FlatList
                extraData={this.state}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => item.id}
              />
        }

     </View>
    );
  }

  renderItem({item, index}) {
    let selected = this.state.selectedTeams.includes(item.id);
    return (
      <AddTeamItem
        title={item.projectName}
        image={Logos.workspace}
        //isSelected={selected}
        onTouch={() => {
          this.onSelectTeam({item: item});
        }}
      />
    );
  }

  renderButtomView() {
    return <View style={styles.bottomView}>{this.renderGoogleButton()}</View>;
  }

  renderGoogleButton() {
    return (
      <View style={styles.signInContainer}>
        <AppButton
          title={'Create new workspace'}
          image={Icons.add}
          onTouch={this.signInButtonAction}
          styles={styles.googleButtonStyle}
          textStyles={styles.googleButtonTextStyle}
        />
      </View>
    );
  }
}

export default AddTeam;
