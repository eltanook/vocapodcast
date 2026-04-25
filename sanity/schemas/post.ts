import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Entrevistas', value: 'Entrevistas' },
          { title: 'Reflexiones', value: 'Reflexiones' },
          { title: 'Noticias', value: 'Noticias' },
          { title: 'Inspiración', value: 'Inspiración' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Tiempo de Lectura (minutos)',
      type: 'number',
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 3,
      description: 'Un breve resumen para las tarjetas de la lista.',
    }),
    defineField({
      name: 'body',
      title: 'Contenido (Portable Text)',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: 'Importante para SEO y accesibilidad.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Artículos Relacionados',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Marcar para que aparezca en la parte superior del blog (máximo 2 recomendados).',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
