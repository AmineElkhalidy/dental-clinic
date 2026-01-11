import { About } from "@/components/pages/home/about";
import { Contact } from "@/components/pages/home/contact";
import Hero from "@/components/pages/home/hero";
import { Services } from "@/components/pages/home/services";
import BasicLayout from "@/layouts/basic-layout";
import Head from "next/head";

export default function Home() {
  return (
    <BasicLayout isTransparentBg>
      <Head>
        <title>Home | Bright Smile Dental - Transform Your Smile</title>
        <meta
          name="description"
          content="Bright Smile Dental offers exceptional dental care with cutting-edge technology and compassionate expertise. Transform your smile and boost your confidence with our comprehensive dental services."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </BasicLayout>
  );
}
