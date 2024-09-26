import {describe, expect, it} from 'vitest';
import {formPlural} from '@/utils/formPlural.js';

// Один "поставщик", два "поставщика", три "поставщика" итд
const plurals = ['поставщик', 'поставщика', 'поставщика', 'поставщика', 'поставщиков', 'поставщиков', 'поставщиков', 'поставщиков', 'поставщиков', 'поставщиков', 'поставщиков']

describe('formPlural', () => {
  it('count plurals', () => {
    plurals.forEach((word, index) => {
      expect(formPlural(index + 1, ['поставщик', 'поставщика', 'поставщиков'])).toBe(word)
    })
  })
})