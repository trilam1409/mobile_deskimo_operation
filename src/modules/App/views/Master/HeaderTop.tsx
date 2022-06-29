import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import MasterStyles from '../../styles/Master.style';
import MasterStyle from '../../styles/Master.style';
import {FuncVoidType} from '../../../../configs/DeclareType';
import IcLogoText from '../../../../assets/icon/icLogoText.svg';

type Props = {
  headerTop?: string | JSX.Element;
  headerTopLogo?: boolean;
  headerTopRight?: JSX.Element;
  onPressGoBack: FuncVoidType;
  isGoBack?: boolean;
  borderBottom?: boolean;
};

const HeaderTop = ({
  headerTop,
  headerTopLogo,
  headerTopRight,
  onPressGoBack,
  isGoBack,
  borderBottom,
}: Props) => {
  return (
    <SafeAreaView>
      <View
        style={[
          MasterStyles.headerTopWrap,
          borderBottom && MasterStyle.headerBorderBottom,
        ]}>
        {isGoBack ? (
          <TouchableOpacity
            onPress={onPressGoBack}
            style={MasterStyles.headerTopItem}>
            {/*<SvgXml width="18" height="28" xml={icArrowDown} />*/}
          </TouchableOpacity>
        ) : (
          <View style={MasterStyles.headerTopItem} />
        )}

        {headerTop && (
          <Text
            style={[
              MasterStyles.headerTop,
              !headerTopRight && MasterStyles.headerTopOnly,
            ]}>
            {headerTop}
          </Text>
        )}
        {headerTopLogo && <IcLogoText width={120} height={40} />}
        <View style={MasterStyles.headerTopRight}>{headerTopRight}</View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderTop;
