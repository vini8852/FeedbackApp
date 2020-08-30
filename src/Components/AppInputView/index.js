import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export class AppInputView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    styles: PropTypes.any
  };

  static defaultProps = {
    styles: {},
    textStyles: {},
    onTouch: () => {},
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>{this.props.title}</Text>
        <TextInput
          style={styles.inputViewStyle}
        />
      </View>
    );
  }
}

export default AppInputView;
