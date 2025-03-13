import {
  Award,
  Building2,
  ClipboardCheck,
  Settings,
  Shield,
  ShieldCheck,
  Users,
  MessageCircle,
  Ruler,
  HardHat,
  Key,
} from "lucide-react";

const Stats = () => (
  <section className="relative bg-white py-16 md:py-24 overflow-hidden">
    {/* Decorative Background Elements */}

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30" />

      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-30" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}

      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-6 inline-flex items-center rounded-full bg-red-600/10 px-6 py-2 text-red-600">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600"></span>
          Excellence in Construction
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Legacy of{" "}
          <span className=" bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Excellence
          </span>
        </h2>

        <p className="text-slate-600 leading-relaxed">
          Here at Creative Design & Construction (CDC), we consider our attempt
          as pathways for realizing unique designs. Established in 2018,
          Creative Design & Construction is now one of the most reputable
          construction firms in UK.
        </p>
      </div>

      {/* Stats Grid */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
        {/* Stat 1 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            105+
          </div>

          <p className="text-sm text-slate-600">Projects Completed</p>
        </div>

        {/* Stat 2 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            99%
          </div>

          <p className="text-sm text-slate-600">Client Satisfaction</p>
        </div>

        {/* Stat 3 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            100%
          </div>

          <p className="text-sm text-slate-600">Fulfilling Projects</p>
        </div>

        {/* Stat 4 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            30+
          </div>

          <p className="text-sm text-slate-600">Year industry experience</p>
        </div>
      </div>

      {/* Features Grid */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature 1 */}

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl group">
          <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors duration-300">
            <Building2 className="h-6 w-6 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Sustainable Design
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Implementing eco-friendly solutions and sustainable practices in
            every project.
          </p>
        </div>

        {/* Feature 2 */}

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl group">
          <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors duration-300">
            <Shield className="h-6 w-6 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Quality Assured
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Ensuring every project meets the highest standards of quality and
            reliability.
          </p>
        </div>

        {/* Feature 3 */}

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl group">
          <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors duration-300">
            <Settings className="h-6 w-6 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Advanced Technology
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Leveraging cutting-edge technology to streamline processes and
            enhance efficiency.
            {/* Utilizing cutting-edge construction technology and methodologies. */}
          </p>
        </div>

        {/* Feature 4 */}

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl group">
          <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors duration-300">
            <Award className="h-6 w-6 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Customer Satisfaction
            {/* Industry Leading */}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Delivering exceptional customer experiences and exceeding
            expectations.
            {/* Recognized excellence with multiple industry awards and
            certifications. */}
          </p>
        </div>
      </div>
    </div>
  </section>
);
const Stats2 = () => (
  <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
    {/* Background Decorative Elements */}

    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-red-50/50 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Main Content Grid */}

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Image */}

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/construction-planning.jpg"
              alt="Construction Planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stats Card */}

          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-[240px]">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <Users className="h-6 w-6 text-red-600" />
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900">98%</div>

                <div className="text-sm text-slate-600">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}

        <div>
          <div className="space-y-8">
            {/* Header */}

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Transforming dreams into reality with exceptional construction
              </h2>

              <p className="text-lg text-slate-600">
                We bring your visions to life through innovative design and
                meticulous execution.
              </p>
            </div>

            {/* Features List */}

            <div className="space-y-6">
              {/* Feature 1 */}

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <ClipboardCheck className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Proven Track Record
                  </h3>

                  <p className="text-slate-600">
                    Reduce time and effort on building modern look design with
                    CDC only.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-red-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Quality Assurance
                  </h3>

                  <p className="text-slate-600">
                    Quality assurance (QA) in construction is the process of
                    ensuring that a project meets all the specified quality
                    standards.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-50 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Client-Centric Approach
                  </h3>

                  <p className="text-slate-600">
                    In the competitive world of construction, building strong
                    relationships with clients is crucial for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PremiumProcessSection = () => {
  const PROCESS = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description:
        "We start with a thorough consultation to understand your project requirements, goals, and budget.",
      // "CDC starts by understanding your vision, goals, and budget.",
      features: [
        "Discuss project scope and objectives",
        "Identify key stakeholders and their roles",
        "Establish project timelines and milestones",
        "Define budget and resource allocation",
      ],
    },

    {
      icon: Ruler,
      title: "Design & Planning",
      description:
        "Our experienced team creates a comprehensive design and plan that meets your needs and exceeds your expectations.",
      // "Our architects create designs and handle all necessary approvals.",
      features: [
        "Develop a detailed project design and plan",
        "Create 3D models and visualizations",
        "Conduct site analysis and feasibility studies",
        "Obtain necessary permits and approvals",
      ],
    },

    {
      icon: HardHat,
      title: "Construction Phase",
      description:
        "Our skilled team executes the project with precision, quality, and attention to detail.",
      // "Dedicated project management ensuring quality execution.",
      features: [
        "Hire and manage subcontractors and vendors",
        "Conduct regular site inspections and quality control",
        "Manage project timelines and budgets",
        "Ensure compliance with building codes and regulations",
      ],
    },

    {
      icon: Key,
      title: "Final Touches & Handover",
      description:
        "We ensure a smooth transition and handover of the project, meeting your expectations and exceeding your satisfaction.",
      // "Thorough quality check with 10-year structural warranty.",
      features: [
        "Conduct a thorough quality check",
        "Obtain final certifications and approvals",
        "Provide training and support for occupants",
        "Ensure a smooth transition and handover",
      ],
    },
  ];
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Luxury background patterns */}

      <div className="absolute inset-0 bg-[linear-gradient(30deg,#00000003_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ef444410_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Decorative elements */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        {/* Premium Section Header */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 rounded-full border border-red-100 bg-gradient-to-r from-red-50 to-white shadow-sm">
            <Building2 className="w-4 h-4 text-red-500" />

            <span className="text-sm font-semibold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              OUR PROCESS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Transforming Vision
            <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              into Reality
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive process ensures that every project meets the
            highest standards of quality, functionality, and aesthetics.
            {/* A seamless journey from concept to completion, guided by expertise
            and excellence */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((phase, index) => (
            <div key={index} className="group relative h-full">
              {/* Hover effect background */}

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent rounded-3xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>

              {/* Main card */}

              <div className="relative h-full p-8 rounded-3xl border border-slate-100 bg-white backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col">
                {/* Icon container */}

                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-100 to-50 flex items-center justify-center shadow-sm">
                    <phase.icon
                      className="w-7 h-7 text-red-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-pretty tracking-tight">
                  {phase.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 text-base">
                  {phase.description}
                </p>

                {/* Features */}

                <div className="space-y-3">
                  {phase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats, Stats2, PremiumProcessSection };
