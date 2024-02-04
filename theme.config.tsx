import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LogoImage } from "./partials/logo";

const config: DocsThemeConfig = {
  logo: <LogoImage />,
  project: {
    link: "https://github.com/dryerjs/dryerjs",
  },
  chat: {
    link: "https://discord.gg/mBZN86W5Fa",
  },
  feedback: {
    useLink: () => "https://github.com/dryerjs/dryerjs/issues/new/choose",
  },
  docsRepositoryBase: "https://github.com/dryerjs/docs/blob/master",
  footer: {
    text: "DryerJS © 2023 - All rights reserved.",
  },
  primaryHue: 161,
  primarySaturation: 100,
  head: (
    <>
      <meta
        name="facebook-domain-verification"
        content="4zlvb8dll3eri6xegklodvem9fywca"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – DryerJS",
      description:
        "The fastest way to build a GraphQL API with NestJS and Mongoose",
      openGraph: {
        type: "website",
        url: "https://dryerjs.com",
        title: "DryerJS",
        description:
          "The fastest way to build a GraphQL API with NestJS and Mongoose",
        siteName: "DryerJS",
        images: [
          {
            url: "https://dryerjs.com/cover.jpg",
            width: 1817,
            height: 975,
            alt: "DryerJS",
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: "@dryerjs",
        handle: "@dryerjs",
      },
    };
  },
};

export default config;
