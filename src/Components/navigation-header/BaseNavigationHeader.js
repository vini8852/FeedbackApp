import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Image, StyleSheet, Text} from 'react-native';

import {Color} from '../../Constants/Color';
import {AppFont} from '../../Constants/Fonts';
import {Icons} from '../../Constants/Assets';

export default class BaseNavigationHeader extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    showRightButton: PropTypes.bool,
    rightButtonIcon: PropTypes.any,
    onClickRightButton: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    showRightButton: false,
    onClickRightButton: () => {},
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack();
            }}
            underlayColor={Color.themeBackground}
            style={styles.backIconStyle}>
            <Image source={Icons.back} style={styles.backIcon} />
          </TouchableHighlight>
          {this.props.showRightButton && (
            <View style={styles.rightView}>
              <TouchableHighlight
                onPress={this.props.onClickRightButton}
                underlayColor={Color.themeBackground}
                style={styles.backIconStyle}>
                <Image
                  source={this.props.rightButtonIcon}
                  style={styles.backIcon}
                />
              </TouchableHighlight>
            </View>
          )}
        </View>
        {this.props.title && (
          <View style={styles.topView}>
            <Text style={styles.headerTitle}>{this.props.title}</Text>
            {this.renderSubTitleView()}
          </View>
        )}
      </View>
    );
  }

  renderSubTitleView() {
    if(this.props.subtitle != '') {
      return <Text style={styles.subTitle}>{this.props.subtitle}</Text>;
    }
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  rightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backIcon: {
    tintColor: Color.darkText,
  },
  backIconStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText,
  },
  subTitle: {
    marginTop: 10,
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.darkText,
  },
});
