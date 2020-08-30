import {StyleSheet} from 'react-native';

import {AppFont} from '../../Constants/Fonts';
import {Color} from '../../Constants/Color';
import AppStyles from '../../Constants/AppStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidView: {
    flexGrow: 1,
  },
  middleView: {
    flex: 1,
  },
  bottomView: {},
  signInContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 40,
  },
  googleButtonStyle:{
    paddingHorizontal: 15,
    borderRadius: 30,
    height: 40,
    borderWidth: 1.0,
    borderColor: Color.border
  },
  googleButtonTextStyle:{
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.darkText,
  },
});
