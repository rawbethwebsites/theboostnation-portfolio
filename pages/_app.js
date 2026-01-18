import '../globals.css'
import '../components/common/TargetCursor.css'
import '../components/common/ElectricBorder.css'
import '../components/common/GhostCursor.css'
import '../components/common/GridScan.css'
import '../components/common/GridDistortion.css'
import '../components/common/FlowingMenu.css'
import TargetCursor from '../components/common/TargetCursor'

export default function App({ Component, pageProps }) {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Component {...pageProps} />
    </>
  )
}
