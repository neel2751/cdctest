export default function TrackRecord() {
  return (
    <section className="w-full py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
              alt="Creators collaborating at a table with laptops"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-16 bg-white">
            <div>
              <p className="text-red-600 font-medium mb-2">Our track record</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Trusted by thousands of creators worldwide
              </h2>

              <p className="text-gray-500 mb-10 text-sm leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                <div className="border-b sm:border-b-0 sm:border-r border-gray-200 pr-0 sm:pr-8 pb-8 sm:pb-0">
                  <p className="text-2xl font-medium text-red-600">8,000+</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Creators on the platform
                  </p>
                </div>

                <div className="pb-8 sm:pb-0">
                  <p className="text-2xl font-medium text-red-600">3%</p>
                  <p className="text-gray-600 mt-1">Flat platform fee</p>
                </div>

                <div className="border-t sm:border-t-0  sm:border-b-0 sm:border-r border-gray-200 pr-0 sm:pr-8 pt-8 sm:pt-0 pb-8 sm:pb-0">
                  <p className="text-2xl font-medium text-red-600">99.9%</p>
                  <p className="text-gray-600 mt-1">Uptime guarantee</p>
                </div>

                <div className="border-t sm:border-t-0 pt-8 sm:pt-0">
                  <p className="text-2xl font-medium text-red-600">$70M</p>
                  <p className="text-gray-600 mt-1">Paid out to creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
