import ServiceDetails from "./detail";

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServiceDetails slug={slug} />;
}
