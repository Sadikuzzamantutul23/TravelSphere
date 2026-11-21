
import { defineField, defineType } from "sanity";

export const countryType = defineType({
  name: "country",
  title: "Country",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Country Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Country Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "flag",
      title: "Country Flag",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "coverImage",
      title: "Country Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
