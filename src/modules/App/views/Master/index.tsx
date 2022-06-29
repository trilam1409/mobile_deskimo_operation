import React from 'react';
import {View} from 'react-native';
import HeaderTop from './HeaderTop';
import MasterStyle from '../../styles/Master.style';
import {useNavigation} from '@react-navigation/native';
import {FuncVoidType} from '../../../../configs/DeclareType';

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  padding?: number;
  headerTop?: string | JSX.Element;
  headerTopLogo?: boolean;
  headerTopRight?: JSX.Element;
  onGoBack?: FuncVoidType;
  isGoBack?: boolean;
  hideGoBack?: boolean;
  borderBottom?: boolean;
};

const MasterContainer = ({
  children,
  padding = 16,
  headerTopLogo,
  headerTop,
  headerTopRight,
  onGoBack,
  isGoBack = true,
  borderBottom = false,
}: Props) => {
  const navigation = useNavigation();

  const _onPressGoBack = () => {
    if (onGoBack) {
      onGoBack();
      return;
    }
    navigation.goBack();
  };

  return (
    <View style={MasterStyle.container}>
      {headerTop || headerTopLogo ? (
        <HeaderTop
          onPressGoBack={_onPressGoBack}
          headerTop={headerTop}
          headerTopLogo={headerTopLogo}
          headerTopRight={headerTopRight}
          isGoBack={isGoBack}
          borderBottom={borderBottom}
        />
      ) : null}
      <View style={[MasterStyle.flex, {padding}]}>{children}</View>
    </View>
  );
};

export default MasterContainer;
