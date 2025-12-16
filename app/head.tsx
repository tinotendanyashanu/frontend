export default function Head() {
  const title = "Leo The Tech Guy | AI, Software Engineering, Cybersecurity";
  const description = "Full-stack applications, AI systems, and secure platforms built by Leo The Tech Guy. Book a project, explore the portfolio, or learn how I deliver high-impact technology.";
  const url = "https://leothetechguy.com";
  const image = `${url}/images/og-cover.svg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
