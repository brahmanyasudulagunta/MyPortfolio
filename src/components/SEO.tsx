import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Brahmanya Asrit Sudulagunta | Cloud & DevOps Engineer",
  description = "Portfolio of Brahmanya Asrit Sudulagunta, a passionate Cloud & DevOps Engineer specializing in Kubernetes, Terraform, CI/CD, and scalable infrastructure.",
  image = "/og-image.png", // Add a real path if available
  url = "https://brahmanyasudulagunta.github.io/MyPortfolio/",
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
