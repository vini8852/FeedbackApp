import React, {Component} from 'react';
import {TouchableHighlight, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Icons} from '../../Constants/Assets';

import styles from './styles';

export class AddTeamItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    styles: PropTypes.any,
    textStyles: PropTypes.any,
    onTouch: PropTypes.func,
    isSelected: PropTypes.bool,
    image: PropTypes.object
  };

  static defaultProps = {
    isSelected: false,
    styles: {},
    textStyles: {},
    onTouch: () => {},
  };

  render() {
    return (
      <TouchableHighlight
        style={[styles.viewStyle, this.props.styles]}
        onPress={this.props.onTouch}
        underlayColor={'transparent'}>
        <View style={styles.container}>
          <Image
            source={this.props.image}
            resizeMode={'cover'}
            resizeMethod={'resize'}
            style={styles.image}
          />
          <View style={styles.detail}>
            <View style={styles.detailContainer}>
              <Text style={[styles.textStyle, this.props.textStyles]}>
                {this.props.title}
              </Text>
            </View>
            {this.props.isSelected && (
              <Image
                source={Icons.check}
                resizeMode={'cover'}
                resizeMethod={'resize'}
                style={styles.checkImage}
              />
            )}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default AddTeamItem;
