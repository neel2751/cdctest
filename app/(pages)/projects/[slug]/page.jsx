import ProjectDetailNew from "@/components/projects/project-deatils";

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProjectDetailNew slug={slug} />;
}
