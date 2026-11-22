
import { defineField, defineType } from "sanity";

export const guideType = defineType({
  name: "guide",
  title: "Travel Guide",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Guide Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Travel Tips", value: "travel-tips" },
          { title: "Travel Planning", value: "travel-planning" },
          { title: "Budget Travel", value: "budget-travel" },
          { title: "Packing Guide", value: "packing-guide" },
          { title: "Travel Safety", value: "travel-safety" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "readingTime",
      title: "Reading Time (Minutes)",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "content",
      title: "Guide Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
