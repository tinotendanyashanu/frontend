type Props = { params: { id: string } };

export default function Head({ params }: Props) {
  const slug = params.id;
  const title = `${slug === 'preciagro' ? 'PreciAgro' : slug === 'sanganai-events' ? 'Sanganai Events' : 'Project'} | Portfolio | Leo The Tech Guy`;
  const description = "Detailed look at a Leo The Tech Guy build. AI, automation, and secure engineering for ambitious teams.";
  const baseUrl = "https://leothetechguy.com";
  const url = `${baseUrl}/portfolio/${slug}`;
  const image = `${baseUrl}/images/og-cover.svg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
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
