import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import {
  AdjustmentsVerticalIcon,
  ArrowUpOnSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: "url(/homepage.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundPositionY: "top",
        }}
        className="h-screen flex items-center"
      >
        <div className="px-5 md:px-20 space-y-5">
          <p className="text-teal-500">Presenting</p>
          <h1 className="text-5xl font-bold">
            Tri<span className="text-teal-500">Art</span>
          </h1>
          <p className="text-3xl max-w-sm">
            A 3D art sharing space where you can promote your work to the world
          </p>
          <div className="flex gap-5">
            <a
              href="/sign-up"
              className="bg-teal-500 text-black px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
            >
              Get started
            </a>
            <a
              href="/sign-in"
              className="border-teal-500 border-2 bg-teal-950 px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
            >
              Sign in
            </a>
          </div>
        </div>
      </main>

      <section className="space-y-3 text-center my-10">
        <h2 className=" text-teal-500 text-lg">A plataform for artists</h2>
        <h1 className="text-5xl font-bold leading-snug">
          Let others <br />
          explore your{" "}
          <span className="underline decoration-teal-500 decoration-2">
            3D World
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto p-10">
          <Feature
            title="Upload your files"
            icon={<ArrowUpOnSquareIcon className="h-6 w-6" />}
          >
            Simply drag & drop your 3D files and keep a record of all your
            projects in one plataform. Organize it and label it however you
            like!
          </Feature>
          <Feature
            title="Share it everywhere"
            icon={<ShareIcon className="h-6 w-6" />}
          >
            By having your work published in TriArt, you will be able to
            generate links to send it to whoever you please!
          </Feature>
          <Feature
            title="Zero configuration"
            icon={<AdjustmentsVerticalIcon className="h-6 w-6" />}
          >
            A very simple and minimalistic interface will help you worry less
            about the how, and focusing on what matters most,
          </Feature>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="max-w-3xl space-y-10 p-5">
          <h1 className="text-6xl">
            Get{" "}
            <span className="underline decoration-2 decoration-teal-500">
              inspired
            </span>
            , explore other people&apos;s work!
          </h1>

          <p className="text-gray-300 max-w-xl">
            See the work of people from all around the world, get inspired and
            start working on your own ideas faster.
          </p>

          <div className="flex gap-5">
            <a
              href="/sign-up"
              className="bg-teal-500 text-black px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
            >
              Get started
            </a>
            <a
              href="/sign-in"
              className="border-teal-500 border-2 bg-teal-950 px-3 py-2 rounded text-xl hover:opacity-50 duration-300"
            >
              Sign in
            </a>
          </div>
        </div>
        <Image
          src="/homepage-feature.png"
          width={500}
          height={500}
          className="rounded-full hidden md:block"
          alt="Decoration image"
          priority
        />
      </section>
      <Footer />
    </>
  );
}
