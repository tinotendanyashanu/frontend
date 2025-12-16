export default function Head() {
  const title = "Services | AI, Automation, Full-Stack Engineering, Cybersecurity";
  const description = "Premium engineering services: AI and automation, scalable web apps, cybersecurity, and technical mentorship from Leo The Tech Guy.";
  const url = "https://leothetechguy.com/services";
  const image = "https://leothetechguy.com/images/og-cover.svg";

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
