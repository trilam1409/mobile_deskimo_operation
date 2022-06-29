import 'react-native-reanimated';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import ScannerStyles from '../../styles/Scanner.styles';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const ScanFrame = () => {
  const navigation = useNavigation();
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;

  const [loading, setLoading] = useState(false);
  const [scanData, setScanData] = useState('');

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  React.useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
    })();
  }, []);

  useEffect(() => {
    if (barcodes.length && !scanData) {
      console.log('barcodes[0].rawValue', barcodes[0].rawValue);
      setScanData(barcodes[0].rawValue);
      setLoading(true);
      setTimeout(() => {
        Toast.show('Check in successfully!', Toast.LONG);
        navigation.goBack();
      }, 3000);
    }
  }, [barcodes]);

  if (device == null) {
    return <ActivityIndicator />;
  }

  return (
    <View style={ScannerStyles.container}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={ScannerStyles.innerContainer}>
          <Pressable
            style={ScannerStyles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={ScannerStyles.backText}>Back</Text>
          </Pressable>
          <View style={ScannerStyles.topStyle}>
            <Text style={ScannerStyles.title}>
              Place the QR Code inside the area
            </Text>
            <Text style={ScannerStyles.description}>
              Scanning will start automatically
            </Text>
          </View>
          <View style={ScannerStyles.cameraWrapper}>
            <Camera
              style={ScannerStyles.cameraStyle}
              device={device}
              isActive={!loading}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
            />
            {loading && (
              <ActivityIndicator size={'large'} style={ScannerStyles.loading} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ScanFrame;
