import { NativeBaseProvider, StatusBar, extendTheme } from 'native-base'
import {
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home'

export default function App() {
  const theme = extendTheme({
    fontConfig: {
      Inter: {
        400: {
          normal: 'Inter_400Regular',
        },
        700: {
          bold: 'Inter_700Bold',
        },
      },
    },
    fonts: {
      heading: 'Inter_700Bold',
      body: 'Inter_400Regular',
      mono: 'Inter_400Regular',
    },
  })

  const [fontsLoaded] = useFonts({
    Inter400Regular,
    Inter700Bold,
  })

  if (fontsLoaded) {
    return (
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" translucent />
        <Home />
      </NativeBaseProvider>
    )
  }
}
