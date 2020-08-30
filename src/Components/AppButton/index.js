import React, {Component} from 'react';
import {TouchableHighlight, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export class AppButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    styles: PropTypes.any,
    textStyles: PropTypes.any,
    onTouch: PropTypes.func,
    image: PropTypes.any,
  };

  static defaultProps = {
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
          {this.props.image && (
            <Image source={this.props.image} style={styles.imageView} />
          )}
          <Text style={[styles.textStyle, this.props.textStyles]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default AppButton;
