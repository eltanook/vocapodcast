import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'podcast',
  title: 'Podcast Episode',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID Original',
      type: 'number',
    }),
    defineField({
      name: 'nombre',
      title: 'Nombre del Entrevistado',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rubro',
      title: 'Rubro / Profesión',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título del Episodio',
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
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'duration',
      title: 'Duración (HH:MM:SS o MM:SS)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Fecha de Publicación',
      type: 'date',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Salud y bienestar', value: 'salud' },
          { title: 'Arte y creatividad', value: 'arte' },
          { title: 'Emprendimiento', value: 'emprendimiento' },
          { title: 'Educación', value: 'educacion' },
          { title: 'Tecnología', value: 'tecnologia' },
          { title: 'Oficios tradicionales', value: 'oficios' },
          { title: 'Ciencia e investigación', value: 'ciencia' },
          { title: 'Deporte', value: 'deporte' },
          { title: 'Otros', value: 'otros' },
        ],
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube ID',
      type: 'string',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nombre',
      media: 'thumbnail', // En sanity esto normalmente es una imagen subida, pero aquí es un string URL.
    },
  },
})
