import '@/styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap'
config.autoAddCss = false;

// process.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false;

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
