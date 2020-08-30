import { StyleSheet } from 'react-native'

import { AppFont } from '../../Constants/Fonts'
import { Color } from '../../Constants/Color'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  keyboardAvoidView: {
    flexGrow: 1
  },
  middleView: {
    flex: 1,
    paddingTop: 50
  },
  bottomView:{

  },
  inputViewStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingLeft: 10,
    height: 55,
    backgroundColor: Color.offWhiteBackground,
    padding: 0,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
    ...AppStyles.shadow
  },
  signInButtonStyle: {
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1.0,
    height: 60,
    borderColor: Color.shadow
  },
  signInButtonTextStyle: {
    color: Color.shadow
  },
  forgotButtonContainer: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotButtonText: {
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight
  },
  itemText:{
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 30,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.lightText
  }
})
