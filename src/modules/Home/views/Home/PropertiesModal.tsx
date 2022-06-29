import React, {Dispatch, RefObject, SetStateAction, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {InputPipe} from '../../../../components/Input';
import {Modalize} from 'react-native-modalize';

type Props = {
  modalizeRef: RefObject<Modalize>;
  propertySelect: string;
  setPropertySelect: Dispatch<SetStateAction<string>>;
  propertiesList: any[];
};

const PropertiesModal = ({
  modalizeRef,
  propertySelect,
  setPropertySelect,
  propertiesList,
}: Props) => {
  const [listFilter, setListFilter] = useState(propertiesList);

  return (
    <Modalize
      ref={modalizeRef}
      adjustToContentHeight
      modalStyle={{padding: 20}}>
      <InputPipe placeholder={'Search'} />
      <Picker
        selectedValue={propertySelect}
        onValueChange={itemValue => setPropertySelect(itemValue)}>
        {listFilter.map(({label, value}) => (
          <Picker.Item key={label} label={label} value={value} />
        ))}
      </Picker>
    </Modalize>
  );
};

export default PropertiesModal;
