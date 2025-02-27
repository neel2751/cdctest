import {
  Award,
  Building2,
  ClipboardCheck,
  Settings,
  Shield,
  ShieldCheck,
  Users,
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

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Building Excellence Since 2018
        </h2>

        <p className="text-slate-600 leading-relaxed">
          As a leading commercial office building contractor, we've established
          a reputation for delivering exceptional quality and innovative
          solutions that transform skylines and communities.
        </p>
      </div>

      {/* Stats Grid */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
        {/* Stat 1 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            150+
          </div>

          <p className="text-sm text-slate-600">Projects Completed</p>
        </div>

        {/* Stat 2 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            100%
          </div>

          <p className="text-sm text-slate-600">Client Satisfaction</p>
        </div>

        {/* Stat 3 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            250+
          </div>

          <p className="text-sm text-slate-600">Team Members</p>
        </div>

        {/* Stat 4 */}

        <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
            15+
          </div>

          <p className="text-sm text-slate-600">Industry Awards</p>
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
            ISO 9001 certified processes ensuring the highest quality standards.
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
            Utilizing cutting-edge construction technology and methodologies.
          </p>
        </div>

        {/* Feature 4 */}

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:shadow-xl group">
          <div className="p-3 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-100 transition-colors duration-300">
            <Award className="h-6 w-6 text-red-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Industry Leading
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Recognized excellence with multiple industry awards and
            certifications.
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

export { Stats, Stats2 };
