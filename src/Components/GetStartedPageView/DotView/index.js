import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { Color } from '../../../Constants/Color'

import styles from '../styles'

export default class DotView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    selectedItemIndex: PropTypes.number
  }

  static defaultProps = {
    data: [],
    selectedItemIndex: 0
  }

  render () {
    return <View style={styles.dotContainer}>{this.renderDots()}</View>
  }

  renderDots () {
    return this.props.data.map((item, i) => {
      let viewStyle =
        this.props.selectedItemIndex == i
          ? { backgroundColor: Color.darkText  }
          : { backgroundColor: Color.brightText }
      return <View key={i} style={[styles.dotsItem, viewStyle]} />
    })
  }
}
