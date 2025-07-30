import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "dl5tgwig",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
