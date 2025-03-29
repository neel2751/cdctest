import React from "react";
import HomePage from "./(pages)/Home/home";

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Construction Company",
    name: "CDC Construction",
    description:
      "Leading London construction services specializing in commercial and residential projects",
    foundingDate: "2018",
    founders: [
      {
        "@type": "Person",
        name: "Company Founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "595a Cranbrook Road",
      addressLocality: "Ilford",
      postalCode: "IG2 6JZ",
      addressCountry: "UK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "020-8004-3327",
      email: "info@cdc.construction",
      contactType: "Customer Service",
    },
    serviceArea: ["London", "Ilford", "East London", "Greater London"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        "Commercial Construction",
        "Residential Construction",
        "Renovation",
        "Loft Conversions",
        "Design and Build",
      ],
    },
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </div>
  );
};

export default page;
