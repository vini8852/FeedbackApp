import {StyleSheet} from 'react-native';

import {Color} from '../../Constants/Color';
import {AppFont} from '../../Constants/Fonts';
import AppStyles from '../../Constants/AppStyles';

export default StyleSheet.create({
  viewStyle: {
    ...AppStyles.shadow,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  detail: {
    borderBottomColor: Color.offWhiteBackground,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  detailContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    height: 40,
    width: 40,
  },
  textStyle: {
    fontSize: AppFont.titleLargeMedium.size,
    fontFamily: AppFont.titleLargeMedium.name,
    fontWeight: AppFont.titleLargeMedium.weight,
    color: Color.darkText,
  },
  detailText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.darkText,
  },
  checkImage: {
    height: 20,
    width: 20,
    margin: 10,
    tintColor: Color.offWhiteBackground
  },
});
