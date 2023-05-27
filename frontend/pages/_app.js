import '@/styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.css';
import { RecoilRoot } from 'recoil';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
