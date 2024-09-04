import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { LinkedinIcon, MailIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center p-6 ">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-lg mb-2">
              <a
                href="mailto:nickollasgiordanoarroio@gmail.com"
                className="flex items-center text-blue-500 hover:underline"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                nickollasgiordanoarroio@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-lg mb-2">
              <a
                href="https://wa.me/+5511985214691"
                className="flex items-center text-green-500 hover:underline"
              >
                {/* <WhatsappIcon className="w-5 h-5 mr-2" /> */}
                +55 11 985214691
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-lg mb-6">
              <a
                href="https://www.linkedin.com/in/nickollasgiordanoarroio/"
                className="flex items-center text-blue-700 hover:underline"
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                linkedin.com/in/nickollasgiordanoarroio
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
