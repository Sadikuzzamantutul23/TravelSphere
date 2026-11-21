
import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Sanity environment variables are missing.");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-11-21",
  useCdn: true,
});
