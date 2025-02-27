"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("executive");

  const [currentPage, setCurrentPage] = useState(1);

  const membersPerPage = 8;

  const departments = [
    { id: "executive", name: "Executive Leadership" },

    { id: "design", name: "Design & Architecture" },

    { id: "engineering", name: "Engineering & Construction" },

    { id: "operations", name: "Business & Operations" },
  ];

  const teamMembers = {
    executive: [
      {
        name: "Mohammad Bhuiyan",

        role: "CEO & CDM Co-ordinator",

        image: "/placeholder.jpg",
      },

      {
        name: "Md Sadequl Alam",

        role: "Director",

        image: "/placeholder.jpg",
      },

      {
        name: "Najia Nitu",

        role: "Director",

        image: "/placeholder.jpg",
      },

      {
        name: "Akm Boby",

        role: "Director of Finance & Accounts",

        image: "/placeholder.jpg",
      },

      {
        name: "Masud Karim",

        role: "Director of Quality Assurance",

        image: "/placeholder.jpg",
      },

      {
        name: "Andrew Modhu",

        role: "Director of Operations & Business Development",

        image: "/placeholder.jpg",
      },
    ],

    design: [
      {
        name: "Mobinur Rahman",

        role: "Head of Building Information Modelling & Design",

        image: "/placeholder.jpg",
      },

      {
        name: "Areef Khan",

        role: "Lead Architectural Designer, Residential",

        image: "/placeholder.jpg",
      },

      {
        name: "Mohammed Suhair",

        role: "Lead Architectural Designer, Commercial",

        image: "/placeholder.jpg",
      },

      {
        name: "Snehal Mhokar",

        role: "Architectural Designer, 3D Rendering",

        image: "/placeholder.jpg",
      },

      {
        name: "Artenisa Arifllari",

        role: "Architectural Assistant",

        image: "/placeholder.jpg",
      },

      {
        name: "Sinem Canli",

        role: "Architectural Assistant",

        image: "/placeholder.jpg",
      },

      {
        name: "Vidya Vijayan",

        role: "Architectural Assistant",

        image: "/placeholder.jpg",
      },

      {
        name: "Md Tareq Hasan",

        role: "Interior Design Manager",

        image: "/placeholder.jpg",
      },

      {
        name: "Faria Hritu",

        role: "Interior Design Assistant",

        image: "/placeholder.jpg",
      },
    ],

    engineering: [
      {
        name: "Syed Qamber Ali",

        role: "Program & Building Control Manager",

        image: "/placeholder.jpg",
      },

      {
        name: "Venkatesh Chintalapudi",

        role: "Senior Site Engineer, Commercial",

        image: "/placeholder.jpg",
      },

      {
        name: "Sairam Yerapatineni",

        role: "Senior Site Engineer, Residential",

        image: "/placeholder.jpg",
      },

      {
        name: "Hridoy Das",

        role: "Site Engineer",

        image: "/placeholder.jpg",
      },

      {
        name: "Anamul Haque",

        role: "Site Engineer",

        image: "/placeholder.jpg",
      },

      {
        name: "Parvathi Dadireddy",

        role: "Site Engineer",

        image: "/placeholder.jpg",
      },

      {
        name: "Azhar Mohammad",

        role: "Lead Electrician",

        image: "/placeholder.jpg",
      },
    ],

    operations: [
      {
        name: "Shamsul Alam",

        role: "Director of HR & CIS",

        image: "/placeholder.jpg",
      },

      {
        name: "Mahbubul Alam Bhuiyan",

        role: "Account Manager",

        image: "/placeholder.jpg",
      },

      {
        name: "Salma Begum",

        role: "Account Assistant",

        image: "/placeholder.jpg",
      },

      {
        name: "Shakil Ahmed",

        role: "Procurement Manager",

        image: "/placeholder.jpg",
      },

      {
        name: "Mehedi Iqbal Evan",

        role: "Digital Brand Manager",

        image: "/placeholder.jpg",
      },

      {
        name: "Moshuir Rahman",

        role: "Agent Management & Business Development",

        image: "/placeholder.jpg",
      },

      {
        name: "Narendra Nath",

        role: "Analyst of Branding & Business",

        image: "/placeholder.jpg",
      },

      {
        name: "Neel Patel",

        role: "Web Designer & Software Engineer",

        image: "/placeholder.jpg",
      },
    ],
  };

  const currentMembers = teamMembers[activeTab] || [];

  const totalPages = Math.ceil(currentMembers.length / membersPerPage);

  const startIndex = (currentPage - 1) * membersPerPage;

  const displayedMembers = currentMembers.slice(
    startIndex,
    startIndex + membersPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}

      <div
        className="absolute top-40 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -z-10 opacity-60
    
    animate-pulse-slow"
      />

      <div
        className="absolute bottom-40 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60
    
    animate-pulse-slow"
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

            <span className="text-sm font-medium">Our Team</span>
          </div>

          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>

          <p className="text-gray-600 text-lg">
            Our diverse team of professionals brings together expertise from
            various disciplines to deliver exceptional results for every
            project.
          </p>
        </div>

        {/* Department Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => {
                setActiveTab(dept.id);

                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
    
    ${
      activeTab === dept.id
        ? "bg-red-500 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden
    
    transform transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}

              <div className="relative h-80 sm:h-64 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
    
    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content */}

              <div
                className="absolute bottom-0 left-0 right-0 p-6 text-white transform
    
    translate-y-6 group-hover:translate-y-0 transition-transform duration-300"
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>

                  <p className="text-white/90 mb-4">{member.role}</p>
                </div>
              </div>

              {/* Accent Line */}

              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0
    
    group-hover:scale-x-100 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
