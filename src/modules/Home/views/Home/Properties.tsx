import React, {RefObject} from 'react';
import {Pressable, Text} from 'react-native';
import {Modalize} from 'react-native-modalize';
import HomeStyles from '../../styles/Home.styles';

type Props = {
  propertySelect: string;
  modalizeRef: RefObject<Modalize>;
  propertiesList: any[];
};

const Properties = ({propertySelect, modalizeRef, propertiesList}: Props) => {
  return (
    <>
      <Text>Property selected:</Text>
      <Pressable onPress={() => modalizeRef.current?.open()}>
        <Text style={HomeStyles.propertyTitle}>
          {propertySelect
            ? propertiesList.find(({value}) => value === propertySelect)?.label
            : 'Please select property'}
        </Text>
      </Pressable>
    </>
  );
};

export default Properties;
