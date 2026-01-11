import BasicLayout from "@/layouts/basic-layout";
import Service1Icon from "@root/public/svgs/service1.svg";
import Service2Icon from "@root/public/svgs/service2.svg";
import Service3Icon from "@root/public/svgs/service3.svg";
import Service4Icon from "@root/public/svgs/service4.svg";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <BasicLayout isTransparentBg>
      <Head>
        <title>About Us | Bright Smile Dental</title>
        <meta
          name="description"
          content="Learn about Bright Smile Dental—where exceptional dental care meets extraordinary results. Two decades of transforming smiles with cutting-edge technology and compassionate expertise."
        />
      </Head>
      <div
        className="py-12 pt-48 bg-cover px-4"
        style={{
          backgroundImage: 'url("/images/dentalChair.jpg")',
          backgroundColor: "var(--secondary)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className=" container max-w-screen-lg ">
          <h2 className="font-bold text-center text-3xl md:text-5xl text-white px-4">
            About Bright Smile Dental
          </h2>{" "}
          <p className="max-w-[80ch] mx-auto text-center text-white pt-4 px-12 italic text-lg">
            Transforming lives through exceptional dental care. For over two decades, 
            we&apos;ve been committed to helping families achieve healthier, more confident smiles 
            with personalized attention and world-class expertise.
          </p>
        </div>
      </div>
      <div className="py-12 px-4 md:grid md:grid-cols-[3fr_2fr] md:gap-32 container max-w-screen-lg items-start">
        <div className="my-auto">
          <h1 className="pb-4 text-4xl md:text-5xl font-bold text-secondary">
            Welcome to Our Practice
          </h1>
          <div className="w-12 h-1 bg-primary mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="underline font-medium text-primary">Bright Smile Dental</span>, 
            we&apos;re more than just a dental clinic—we&apos;re your partners in achieving optimal oral health 
            and a stunning smile that reflects your confidence.
            <br />
            <br />
            Our team of highly skilled, board-certified dental professionals brings together decades 
            of collective experience. Each member of our staff shares a passion for excellence and 
            a commitment to staying at the forefront of dental innovation.
            <br />
            <br />
            We believe that every patient deserves personalized, compassionate care tailored to their 
            unique needs. From the moment you walk through our doors, you&apos;ll experience the 
            difference that genuine attention to detail makes. Your comfort, your health, and your 
            satisfaction are our top priorities.
          </p>
        </div>
        <div className="relative w-full mt-8 md:mt-0">
          <div className="object-cover w-full h-full rounded-xl shadow-xl overflow-hidden my-auto">
            <Image
              src="/images/Dentist.jpg"
              alt="Bright Smile Dental Team"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="my-8 bg-primary py-16 md:py-16 px-4 md:px-8 rounded-md flex flex-col md:flex-row items-center gap-4 container max-w-screen-lg">
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service1Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Complete Examinations
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service2Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Preventive Care
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service3Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Smile Design
            </h4>
          </div>
          <div className="w-1/4">
            <div className="w-20 h-20 mx-auto flex justify-center items-center mb-4 rounded-full bg-white/10 overflow-visible p-2">
              <Service4Icon className="fill-primary w-16 h-16 overflow-visible" />
            </div>
            <h4 className="text-white text-center font-semibold mt-8">
              Advanced Treatments
            </h4>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
