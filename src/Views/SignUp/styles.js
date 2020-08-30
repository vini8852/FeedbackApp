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
    paddingTop: 50,
  },
  bottomView: {},
  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.darkBorder,
  },
  inputViewStyle: {
    height: 45,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
  },
  signInContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40
  },
  signInButtonStyle: {
    paddingHorizontal: 15,
    borderRadius: 30,
    height: 40,
    backgroundColor: Color.blue,
  },
  signInButtonTextStyle: {
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.brightText,
  },
  forgotButtonContainer: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotButtonText: {
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
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
  welcomeNote:{
    margin: 30,
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.themeText,
  }
});
