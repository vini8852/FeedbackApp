import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';

import PlaceView from './PlaceView';
import DotView from './DotView';
import styles from './styles';

export class GetStartedPageView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    styles: PropTypes.object,
  };

  static defaultProps = {
    data: [],
    styles: {},
  };

  state = {
    viewedIndex: 0,
  };

  renderItem = this.renderItem.bind(this);
  handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this);

  handleViewableItemsChanged(info) {
    if (info.viewableItems[0] != null) {
      let indexValue = info.viewableItems[0].index;
      this.setState({viewedIndex: indexValue});
    }
  }

  onTouchCategory() {}

  render() {
    const {data} = this.props;
    return (
      <View style={[styles.containerView, this.props.styles]}>
        <FlatList
          extraData={this.state}
          data={data}
          horizontal
          pagingEnabled
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.tableView}
          //contentContainerStyle={styles.tableView}
          onViewableItemsChanged={this.handleViewableItemsChanged}
        />
        {this.renderDotView({data: data})}
      </View>
    );
  }

  renderItem({item}) {
    return (
      <PlaceView
        info={item}
        onTouch={() => {
          this.onTouchCategory(item);
        }}
      />
    );
  }

  renderDotView({data}) {
    return (
      <View style={styles.dotContainerView}>
        <DotView data={data} selectedItemIndex={this.state.viewedIndex} />
      </View>
    );
  }
}

export default GetStartedPageView;
