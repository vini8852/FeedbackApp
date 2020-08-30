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
  bottomView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },
  emailText: {
    paddingHorizontal: 20,  
    fontSize: AppFont.titleBold.size,
    fontFamily: AppFont.titleBold.name,
    fontWeight: AppFont.titleBold.weight,
    color: Color.darkText,
  },
  bottomImage:{
    marginBottom: '10%',
    width: 300,
    height: 300,
  } 
});
