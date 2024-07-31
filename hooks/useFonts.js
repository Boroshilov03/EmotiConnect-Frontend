import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    'OleoScriptSwashCaps-Regular': require('../assets/fonts/OleoScriptSwashCaps-Regular.ttf'),
  });
};

export default useFonts;
