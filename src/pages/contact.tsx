import { BookWithForm } from "@/components/pages/contact/book-with-form";
import { Contact } from "@/components/pages/home/contact";
import BasicLayout from "@/layouts/basic-layout";
import Head from "next/head";

function ContactPage() {
  return (
    <BasicLayout>
      <Head>
        <title>Contact Us | Bright Smile Dental</title>
        <meta
          name="description"
          content="Get in touch with Bright Smile Dental today. Schedule your consultation, ask questions, or learn more about our comprehensive dental services. We're here to help you achieve your perfect smile."
        />
      </Head>
      <main>
        <Contact showBook={false} />
        <BookWithForm />
      </main>
    </BasicLayout>
  );
}

export default ContactPage;
