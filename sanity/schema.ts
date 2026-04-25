import { type SchemaTypeDefinition } from 'sanity'

import podcast from './schemas/podcast'
import post from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [podcast, post],
}
