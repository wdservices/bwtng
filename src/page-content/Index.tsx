import { Head as Helmet } from 'vite-react-ssg'
import RedesignHome from '@/components/RedesignHome'

export default function Index() {
  return <>
    <Helmet>
      <title>Bluewaves Technology — Digital innovation studio in Nigeria</title>
      <meta name="description" content="Bluewaves Technology builds serious software for ambitious ideas: websites, mobile applications, AI products, business systems, and immersive digital experiences." />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://www.bwtng.live/" />
      <meta property="og:title" content="Bluewaves Technology — Digital innovation studio" />
      <meta property="og:description" content="Serious software for ambitious ideas." />
      <meta property="og:url" content="https://www.bwtng.live/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <RedesignHome />
  </>
}
