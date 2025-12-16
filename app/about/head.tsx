export default function Head() {
  const title = "About Leo The Tech Guy | Builder, Technologist, Problem Solver";
  const description = "Learn about Leo The Tech Guy: AI, software, and cybersecurity builder helping founders ship products that scale.";
  const url = "https://leothetechguy.com/about";
  const image = "https://leothetechguy.com/images/og-cover.svg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="profile" />
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
