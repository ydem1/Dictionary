import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dictionaries } from '../types/Dictionary';

const dictionaries = {
  animals: [
    { ukr: 'собака', eng: 'dog' },
    { ukr: 'кіт', eng: 'cat' },
    { ukr: 'птах', eng: 'bird' },
    { ukr: 'кролик', eng: 'rabbit' },
    { ukr: 'олень', eng: 'deer' },
    { ukr: 'мавпа', eng: 'monkey' },
    { ukr: 'слон', eng: 'elephant' },
    { ukr: 'тигр', eng: 'tiger' },
    { ukr: 'ведмідь', eng: 'bear' },
    { ukr: 'лисиця', eng: 'fox' },
    { ukr: 'вовк', eng: 'wolf' },
    { ukr: 'заєць', eng: 'hare' },
    { ukr: 'кажан', eng: 'bat' },
    { ukr: 'жираф', eng: 'giraffe' },
    { ukr: 'носоріг', eng: 'rhinoceros' },
    { ukr: 'бик', eng: 'bull' },
    { ukr: 'конь', eng: 'horse' },
    { ukr: 'корова', eng: 'cow' }
  ],
  food: [
    { ukr: 'яблуко', eng: 'apple' },
    { ukr: 'банан', eng: 'banana' },
    { ukr: 'апельсин', eng: 'orange' },
    { ukr: 'мандарин', eng: 'tangerine' },
    { ukr: 'лимон', eng: 'lemon' },
    { ukr: 'персик', eng: 'peach' },
    { ukr: 'киві', eng: 'kiwi' },
    { ukr: 'груша', eng: 'pear' },
    { ukr: 'вишня', eng: 'cherry' },
    { ukr: 'виноград', eng: 'grape' },
    { ukr: 'ананас', eng: 'pineapple' },
    { ukr: 'арбуз', eng: 'watermelon' },
    { ukr: 'помідор', eng: 'tomato' }
  ],
  vacation: [
    { ukr: 'пляж', eng: 'beach' },
    { ukr: 'сонце', eng: 'sun' },
    { ukr: 'море', eng: 'sea' },
    { ukr: 'пальма', eng: 'palm tree' },
    { ukr: 'плавати', eng: 'swim' },
    { ukr: 'відпочивати', eng: 'relax' },
    { ukr: 'готель', eng: 'hotel' },
    { ukr: 'відпустка', eng: 'vacation' },
    { ukr: 'екскурсія', eng: 'excursion' },
    { ukr: 'пісок', eng: 'sand' },
    { ukr: 'курорт', eng: 'resort' },
    { ukr: 'пам\'ятник', eng: 'monument' },
    { ukr: 'замок', eng: 'castle' },
    { ukr: 'фонтан', eng: 'fountain' },
    { ukr: 'аквапарк', eng: 'water park' },
    { ukr: 'парк атракціонів', eng: 'amusement park' },
    { ukr: 'ресторан', eng: 'restaurant' },
    { ukr: 'пікнік', eng: 'picnic' },
    { ukr: 'круїз', eng: 'cruise' }
  ]
};


export interface DictionarysState {
  value: Record<string, Dictionaries[]>,
}

const initialState: DictionarysState = {
  value: dictionaries
}

export const dictionarysSlice = createSlice({
  name: 'dictionarys',
  initialState,
  reducers: {
    initNewDictionary: (state, action: PayloadAction<{ key: string }>) => {
      const { key } = action.payload;

      if (state.value[key]) {
        throw new Error(`Dictionary with key ${key} already exists.`);
      }

      state.value[key] = [];
    },
    addWordToDictionary: (state, action: PayloadAction<{ key: string; words: Dictionaries }>) => {
      const { key, words } = action.payload;

      if (!state.value[key]) {
        throw new Error(`Dictionary with key ${key} don't already exists.`);
      }

      state.value[key] = [
        ...state.value[key],
        words,
      ];

    }
  },
})

export const { initNewDictionary, addWordToDictionary } = dictionarysSlice.actions

export default dictionarysSlice.reducer