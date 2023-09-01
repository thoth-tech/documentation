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
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/art-gallery/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/art-gallery/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/art-gallery/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/art-gallery/issues-and-resolution",
                  },
                },
              ],
            },
            {
              label: "Company Operations",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/company-operations/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/company-operations/projects",
                  },
                  items: [
                    {
                      label: "Docusaurus Documentation",
                      autogenerate: {
                        directory: "products/company-operations/projects/docusaurus-documentation",
                      },
                    },
                  ],
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/company-operations/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/company-operations/issues-and-resolution",
                  },
                },
              ],
            },
            {
              label: "CourseFlow",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/courseflow/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/courseflow/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/courseflow/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/courseflow/issues-and-resolution",
                  },
                },
              ],
            },
            {
              label: "OnTrack",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/ontrack/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/ontrack/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/ontrack/documentation",
                  },
                  items: [
                    {
                      label: "Front End Migration",
                      autogenerate: {
                        directory: "products/ontrack/documentation/front-end-migration",
                      },
                    },
                    {
                      label: "Numbas",
                      autogenerate: {
                        directory: "products/ontrack/documentation/numbas",
                      },
                    },
                  ],
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/ontrack/issues-and-resolution",
                  },
                },
              ],
            },
            {
              label: "SplashKit",
              items: [
                {
                  label: "Get to Know Us",
                  link: "/products/splashkit/example",
                },
                {
                  label: "Projects",
                  autogenerate: {
                    directory: "products/splashkit/projects",
                  },
                },
                {
                  label: "Documentation",
                  autogenerate: {
                    directory: "products/splashkit/documentation",
                  },
                },
                {
                  label: "Issues and Resolutions",
                  autogenerate: {
                    directory: "products/splashkit/issues-and-resolution",
                  },
                },
              ],
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
