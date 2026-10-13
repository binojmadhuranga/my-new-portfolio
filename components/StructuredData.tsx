export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binojmadhuranga.com";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": "Binoj Madhuranga",
    "alternateName": "Binoj",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Xigenix"
    },
    "description": "Software Engineer, Research & Developer, AI & ML Engineer, Mobile App Developer, and Full-Stack Architect.",
    "url": siteUrl,
    "image": `${siteUrl}/profile.png`,
    "sameAs": [
      "https://github.com/binojmadhuranga",
      "https://www.linkedin.com/in/binoj-madhuranga/",
      "https://x.com/labugamage",
      "https://medium.com/@binojmadhuranga"
    ],
    "email": "mailto:binojmadhuranga2002.04.04@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gampaha",
      "addressCountry": "Sri Lanka"
    },
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Node.js",
      "Python",
      "TensorFlow",
      "React Native",
      "IoT Systems",
      "Smart Contracts"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "Binoj Madhuranga Portfolio",
    "description": "Official portfolio of Binoj Madhuranga - Software Engineer specializing in Full-Stack Web, AI/ML, Mobile Development, and Cloud Solutions.",
    "author": {
      "@id": `${siteUrl}/#person`
    },
    "inLanguage": "en-US"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    "url": siteUrl,
    "name": "Binoj Madhuranga - Software Engineer Portfolio",
    "mainEntity": {
      "@id": `${siteUrl}/#person`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
