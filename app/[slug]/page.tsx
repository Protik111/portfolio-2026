import { notFound, redirect } from "next/navigation";
import { profiles } from "../../utils/profiles";

export function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.name }));
}

// Matches the old getStaticPaths({ fallback: false }) behavior: only the
// slugs returned by generateStaticParams are valid routes — anything else
// 404s instead of being redirected anywhere.
export const dynamicParams = false;

const MultiProfiles = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const profile = profiles.find((p) => p.name === slug);

  if (!profile) {
    notFound();
  }

  redirect(profile.link);
};

export default MultiProfiles;
