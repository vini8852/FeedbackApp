import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, Image, View } from 'react-native'

import styles from '../styles'

export default class PlaceView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func
  }

  static defaultProps = {
    onTouch: () => {}
  }

  render () {
    const { image, name, detail } = this.props.info

    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={this.props.onTouch}
          underlayColor={'transparent'}
          style={styles.touchContainer}
        >
          <View style={styles.container}>
            {this.renderImageView({ imageUrl: image })}
            {this.renderDetailsView({ name: name, detail: detail })}
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  renderImageView ({ imageUrl }) {
    return (
      <Image
        source={imageUrl}
        resizeMode={'contain'}
        resizeMethod={'resize'}
        style={styles.imageContainer}
      />
    )
  }

  renderDetailsView ({ name, detail }) {
    return (
      <View style={styles.textContainer}>
        <View style={styles.titleAndSubtitle}>
          <View style={styles.textAndRating}>
            <Text style={styles.titleTextStyle}>{name}</Text>
          </View>
          <Text style={styles.subtitleTextStyle}>{detail}</Text>
        </View>
      </View>
    )
  }
}
