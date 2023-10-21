import React, { useEffect } from "react"
import Routing from "./src/feature/routing/Routing"
import { ReduxProvider } from "./src/feature/redux/ReduxProvider"
import SplashScreen from "react-native-splash-screen"
import { Platform } from "react-native"

function App() {
  useEffect(() => {
    if (Platform.OS === "android") SplashScreen.hide()
  }, [])
  return (
    <ReduxProvider>
      <Routing />
    </ReduxProvider>
  )
}

export default App
