import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "../components/ui/hero-image.webp";
import { RootLayout } from "@/components/layout/root-layout";

export default function LandingPage() {
  return (
    <RootLayout>
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Explore the Universe of Sci-Fi
            </h2>
            <p className="text-xl mb-6">
              Discover and stream the best science fiction movies from across
              the galaxy.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg">
              Start Watching Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={heroImage}
              alt="Sci-Fi Movie Collage"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Choose Your Adventure
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-80">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Basic</h3>
                <p className="text-gray-600 mb-6">Perfect for casual viewers</p>
                <ul className="text-sm text-gray-600 mb-8">
                  <li className="mb-2">✓ HD streaming</li>
                  <li className="mb-2">✓ Watch on 1 device</li>
                  <li className="mb-2">✓ Cancel anytime</li>
                </ul>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-6">
                  €7.99<span className="text-base font-normal">/month</span>
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Choose Basic
                </Button>
              </div>
            </div>

            {/* Premium Plan (Most Popular) */}
            <div className="bg-blue-100 rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-80 border-4 border-blue-500 transform md:scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Premium
                </h3>
                <p className="text-gray-600 mb-6">Best value for enthusiasts</p>
                <ul className="text-sm text-gray-600 mb-8">
                  <li className="mb-2">✓ 4K Ultra HD streaming</li>
                  <li className="mb-2">✓ Watch on 4 devices</li>
                  <li className="mb-2">✓ Offline viewing</li>
                  <li className="mb-2">✓ Exclusive content</li>
                </ul>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-6">
                  €13.99<span className="text-base font-normal">/month</span>
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Choose Premium
                </Button>
              </div>
            </div>

            {/* Ultimate Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-80">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Ultimate
                </h3>
                <p className="text-gray-600 mb-6">
                  For the true sci-fi fanatics
                </p>
                <ul className="text-sm text-gray-600 mb-8">
                  <li className="mb-2">✓ 8K streaming</li>
                  <li className="mb-2">✓ Watch on 6 devices</li>
                  <li className="mb-2">✓ Offline viewing</li>
                  <li className="mb-2">✓ Exclusive content</li>
                  <li className="mb-2">✓ Early access to new releases</li>
                </ul>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-6">
                  €18.99<span className="text-base font-normal">/month</span>
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Choose Ultimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
