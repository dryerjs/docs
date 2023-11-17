import "../styles/main.scss";

export const runtime = "experimental-edge";
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <p>Simple Usage</p>
  </>
);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}><Page /></Component>;
}
