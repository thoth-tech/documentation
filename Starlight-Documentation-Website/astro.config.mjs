import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Thoth Tech",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/thoth-tech",
      },
      sidebar: [
        {
          label: "Processes",
          items: [
            { label: "Introduction", link: "/processes/introduction" },
            {
              label: "Cyber Security Guidelines",
              autogenerate: {
                directory: "processes/cyber-security-guidelines",
              },
            },
            {
              label: "Documentation",
              autogenerate: { directory: "processes/Documentation" },
            },
            {
              label: "Quality Assurance",
              items: [
                {
                  label: "Git Contributions Guide",
                  link: "/processes/quality-assurance/git-contributions-guide",
                },
                {
                  label: "Quality Assurance Overview",
                  link: "/processes/quality-assurance/quality-assurance-overview",
                },
                {
                  label: "Testing and Development",
                  link: "/processes/quality-assurance/testing-and-dev",
                },
                {
                  label: "Templates",
                  autogenerate: {
                    directory: "processes/quality-assurance/templates",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Teams and Leadership",
          autogenerate: {
            directory: "teams-and-leadership",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Policies",
          autogenerate: {
            directory: "policies",
          },
        },
        {
          label: "Products",
          items: [
            {
              label: "Products",
              link: "/products/products",
            },
            {
              label: "Art Gallery",
              autogenerate: { directory: "products/art-gallery" },
            },
            {
              label: "Company Operations",
              autogenerate: { directory: "products/company-operations" },
            },
            {
              label: "CourseFlow",
              autogenerate: { directory: "products/courseflow" },
            },
            // {
            //   label: "OnTrack",
            //   autogenerate: { directory: "products/ontrack" },

            // },
            {
              label: "OnTrack",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/ontrack/example",
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/ontrack/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/ontrack/issues-and-resolution",
                  },
                },
                // {label: "Deploy OnTrack Using Docker",
                //   autogenerate: {
                //     directory: "products/ontrack/front-end-migration/deploy-ontrack-using-docker",
                //   },
                // },
              ],
            },
            {
              label: "SplashKit",
              autogenerate: { directory: "products/splashkit" },
            },
          ],
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
