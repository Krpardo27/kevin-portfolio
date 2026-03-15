import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  image = "https://kevcodesdev.cl/og-image.jpg",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content="Kevin Pardo Veas" />
      <meta name="publisher" content="Kevin Pardo" />
      <meta property="og:site_name" content="Kevin Pardo Portfolio" />
      <meta property="og:locale" content="es_CL" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="Kevin Pardo, React Developer, Frontend Developer, MERN Stack, JavaScript Developer"
      />
      <meta property="og:image" content={image} />

      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {`
{
 "@context": "https://schema.org",
 "@type": "Person",
 "name": "Kevin Pardo",
 "url": "https://kevcodesdev.cl",
 "image": "https://kevcodesdev.cl/perfil.jpg",
 "jobTitle": "Frontend Developer",
 "description": "Frontend developer especializado en React, JavaScript y aplicaciones web modernas.",
 "sameAs": [
   "https://github.com/Krpardo27",
   "https://linkedin.com/in/kevinpardoveas"
 ]
}
`}
      </script>
    </Helmet>
  );
};

export default SEO;
