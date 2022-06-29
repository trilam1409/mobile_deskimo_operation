import React, {useEffect, useRef, useState} from 'react';
import Master from '../../../App/views/Master';
import Properties from './Properties';
import PropertiesModal from './PropertiesModal';
import {Modalize} from 'react-native-modalize';
import Action from './Action';
import {View} from 'react-native';
import HomeStyles from '../../styles/Home.styles';

const Home = () => {
  const modalizeRef = useRef<Modalize>(null);
  const [propertySelect, setPropertySelect] = useState<string>('');

  const propertiesList: any[] = [
    {
      label: '[SIN] Property MR 1',
      value: 1,
    },
    {
      label: 'MacDonald House',
      value: 2,
    },
    {
      label: 'The Work Project Asia Square',
      value: 3,
    },
    {
      label: 'The Centrepoint',
      value: 4,
    },
    {
      label: 'The Time Square',
      value: 5,
    },
    {
      label: 'OCBC Centre East',
      value: 6,
    },
  ];

  useEffect(() => {
    if (!propertySelect) {
      setPropertySelect(propertiesList[0].value);
    }
  }, []);

  return (
    <>
      <Master borderBottom headerTop={'Home'} headerRightUser>
        <View style={HomeStyles.container}>
          <Properties
            propertySelect={propertySelect}
            modalizeRef={modalizeRef}
            propertiesList={propertiesList}
          />
          <Action />
        </View>
      </Master>
      <PropertiesModal
        modalizeRef={modalizeRef}
        propertySelect={propertySelect}
        setPropertySelect={setPropertySelect}
        propertiesList={propertiesList}
      />
    </>
  );
};

export default Home;
