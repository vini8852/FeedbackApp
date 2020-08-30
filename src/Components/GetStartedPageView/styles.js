import { StyleSheet } from 'react-native'

import { Color } from '../../Constants/Color'
import { AppFont } from '../../Constants/Fonts'
import { ScreenWidth } from '../../Constants/Constants'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  containerView:{
  },
  tableView:{
  },
  mainContainer: {
    width: ScreenWidth-20,
    margin: 10,
  },
  touchContainer: {
    flex: 1,
    borderRadius: 10,
    //...AppStyles.shadow
  },
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden'
  },
  imageContainer: {
    overflow: 'hidden',
    width: 300,
    height: 200
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  titleAndSubtitle: {
    flex: 1,
    paddingLeft: 5
  },
  profilePhotoContainer: {
    width: 90,
    justifyContent: 'center'
  },
  textAndRating: {
    flexDirection: 'row'
  },
  titleTextStyle: {
    marginTop: 30,
    textAlign: 'left',
    fontSize: 30,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText
  },
  subtitleTextStyle: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.darkText
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitleTextStyle: {
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText
  },
  sellAllTextStyle: {
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.themeText
  },
  placeConatainerView: {
    padding: 10
  },
  placeTableView: {
    height: 40
  },
  dotContainer: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  dotsItem: {
    marginLeft: 5,
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.darkText,
    backgroundColor: Color.brightText
  },
  dotContainerView:{
    paddingHorizontal: 25,
    flexDirection: 'row'
  }
})
