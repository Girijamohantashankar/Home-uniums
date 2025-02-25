'use client';

import Image from 'next/image';
import Link from 'next/link';
import SolutionsSection from './Components/SolutionsSection';
import TestimonialsSection from './Components/TestimonialsSection';
import BookDemo from './bookdemo/page';
import PartnerInstitutions from './Components/PartnerInstitutions';
import HowItWorks from './Components/HowItWorks';
import StatsSection from './Components/StatsSection';
import Events from './Components/Events';
import Contact from './contact/page';
import Prices from './pricing/page';
import FAQ from './faq/page';
import dashboard from "../assets/dashbord.png"
import manage from "../assets/intuitive-dashboard-removebg-preview.png"
import automation from "../assets/automation.svg"
import analytics from "../assets/4187142.png"
import support from "../assets/1634618.webp"
import secure from "../assets/secure-data.webp"
import collaboration from "../assets/live-collaboration.png"
import profile1 from '../assets/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';
import profile2 from '../assets/f58f50.jpg';
import profile3 from '../assets/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg';


export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-[auto] md:min-h-screen pt-20 md:pt-8">
      <main className="flex flex-col items-center md:justify-center min-h-[auto] md:min-h-screen px-4 text-center mb-6">
        <h1 className="text-4xl font-bold">Welcome to UniUms</h1>
        <p className="text-lg mt-4 max-w-2xl">
          UniUms is a powerful platform for institutes and colleges to efficiently manage students and faculty.
          Our business model ensures seamless administration and streamlined processes.
        </p>

        <div className="relative w-full max-w-[600px] mx-auto mt-6 rounded-lg shadow-lg group perspective">
          <div className="w-full h-auto transform-gpu transition-transform duration-300 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 group-hover:animate-[shake_0.2s_ease-in-out_infinite]">
            <Image
              src={dashboard}
              alt="UniUms Dashboard"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="mt-12 md:mt-6 flex gap-4">
          <Link href="/features" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Explore Features</Link>
          <Link href="/pricing" className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600">View Pricing</Link>
        </div>
      </main>

      <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose UniUms?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Our platform is designed to enhance institutional management, making it more efficient, reliable, and user-friendly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={automation} alt="Automation" width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Automated Processes</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Reduce manual work with automated student & faculty management.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={analytics} alt="Analytics" width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Gain insights with real-time data and reports for better decision-making.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={support} alt="Support" width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Get round-the-clock support to ensure a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Features
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            UniUms provides powerful tools to streamline your institution's workflow, ensuring efficiency and ease of management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src={manage}
                alt="Dashboard"
                width={100}
                height={100}
                className="w-24 h-24 mx-auto mb-4 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intuitive Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Get a centralized view of student and faculty activities in real time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src={secure}
                alt="Security"
                width={100}
                height={100}
                className="w-24 h-24 mx-auto mb-4 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Secure Data Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Ensure the safety of student and faculty records with advanced security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src={collaboration}
                alt="Collaboration"
                width={100}
                height={100}
                className="w-24 h-24 mx-auto mb-4 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Seamless Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Faculty, students, and admins can connect effortlessly for a smoother workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection />
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Trusted by top institutions, UniUms has transformed the way colleges and universities manage their workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={profile1} alt="Client 1" width={80} height={80} className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dr. Emily Carter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dean, Greenfield University</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                "UniUms has completely revolutionized how we manage students and faculty. It's an essential tool for any institution!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={profile2} alt="Client 2" width={80} height={80} className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Prof. Mark Reynolds</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Administrator, TechBridge College</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                "A game-changer! The analytics and automation features have saved us countless hours."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image src={profile3} alt="Client 3" width={80} height={80} className="mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lisa Thompson</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Principal, Crestwood Academy</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                "We’ve seen a 40% improvement in administrative efficiency since implementing UniUms."
              </p>
            </div>
          </div>
        </div>
      </section>


      <TestimonialsSection />
      <BookDemo />
      <StatsSection />
      <PartnerInstitutions />
      <HowItWorks />
      <Events />
      <Contact />
      <Prices />
      <FAQ />

    </div>
  );
}
