export default function TeamGallery() {
  return (
    <div className="relative container mx-auto px-4 py-8 md:py-12 max-w-7xl mt-7">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_110%)]" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">
        Team <span className="italic">Gallery</span>
      </h1>

      <div className="text-gray-600 max-w-2xl mb-12 relative">
        Get a glimpse behind the scenes at{" "}
        <span className="text-red-600 font-medium hover:tracking-tight hover:font-semibold transition-all duration-300 cursor-pointer relative group">
          Creative Design & Construction.
          <div className="h-60 w-60 absolute inset-0 -translate-y-52 transition-all group-hover:-translate-y-40 duration-700 opacity-0 group-hover:opacity-100 group-hover:-rotate-[2deg]">
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742567079/DSC_2697_tipxjm.png"
              alt="Team members collaborating around a table"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </span>{" "}
        Our team is <br /> not only dedicated and hardworking but also knows how
        to have fun.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
        {/* Second row */}
        <div className="md:col-span-7 -mt-4">
          <div className="rounded-3xl overflow-hidden mt-4">
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742561938/DSC03132_rpjfl9.png"
              alt="Team members working on laptops"
              width={800}
              height={400}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-5 -mt-4">
          <div className="rounded-3xl overflow-hidden mt-4">
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742561672/DSC_1855_tioedi.png"
              alt="Team planning session at whiteboard"
              width={600}
              height={400}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
          </div>
        </div>

        {/* First row */}
        <div className="md:col-span-5">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742567661/DSC05565_1_phtap3.png"
              alt="Team members collaborating around a table"
              width={600}
              height={400}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742567079/DSC_2697_tipxjm.png"
              alt="Team meeting with presentation"
              width={800}
              height={400}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
