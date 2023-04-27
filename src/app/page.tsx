import Button from "@/components/Button";
import Feature from "@/components/Feature";
import {
  AdjustmentsVerticalIcon,
  ArrowUpOnSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

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
        <div className="px-20 space-y-5">
          <p className="text-teal-500">Presenting</p>
          <h1 className="text-5xl font-bold">
            Tri<span className="text-teal-500">Art</span>
          </h1>
          <p className="text-3xl max-w-sm">
            A 3D art sharing space where you can promote your work to the world
          </p>
          <div className="flex gap-5">
            <Button styleType="primary">Get started</Button>
            <Button styleType="secondary">Sign in</Button>
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
      <div className="h-[150vh] flex justify-center items-center">
        Hello world
      </div>
    </>
  );
}
