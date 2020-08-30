import {StyleSheet} from 'react-native';

import {Color} from '../../Constants/Color';
import {AppFont} from '../../Constants/Fonts';
import AppStyles from '../../Constants/AppStyles';

export default StyleSheet.create({
  viewStyle: {
    height: 50,
    borderRadius: 5,
    ...AppStyles.shadow,
  },
  textStyle: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.themeDark,
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView:{
    width: 30,
    height: 30,
    resizeMode: 'center'
  }
});
