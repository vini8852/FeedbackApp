import {StyleSheet} from 'react-native';
import {black} from 'ansi-colors';
import {Color} from '../../Constants/Color';
import {AppFont} from '../../Constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
  },
  pageView: {
    width: '100%',
    height: '70%',
  },
  getStarted: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  getStartedButton: {
    paddingHorizontal: 15,
    borderRadius: 30,
    height: 40,
    backgroundColor: Color.blue,
  },
  getStartedButtonText: {
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.brightText,
  },
});
