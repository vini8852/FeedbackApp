import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export class Background extends PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

export default Background;
