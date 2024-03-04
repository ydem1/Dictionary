import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dictionaries } from '../types/Dictionary';

const dictionaries = {
  animals1: [
    {
      ukr: 'собака',
      eng: 'dog',
    },
    {
      ukr: 'кіт',
      eng: 'cat',
    },
    {
      ukr: 'птах',
      eng: 'bird',
    }
  ],
  animals2: [
    {
      ukr: 'кролик',
      eng: 'rabbit',
    },
    {
      ukr: 'олень',
      eng: 'deer',
    },
    {
      ukr: 'мавпа',
      eng: 'monkey',
    }
  ],
  animals3: [
    {
      ukr: 'слон',
      eng: 'elephant',
    },
    {
      ukr: 'тигр',
      eng: 'tiger',
    },
    {
      ukr: 'ведмідь',
      eng: 'bear',
    }
  ]
};


export interface DictionarysState {
  Dictionaries: Record<string, Dictionaries[]>,
}

const initialState: DictionarysState = {
  Dictionaries: dictionaries
}

export const dictionarysSlice = createSlice({
  name: 'dictionarys',
  initialState,
  reducers: {
    addNewDictionary: (state, action: PayloadAction<{ key: string; dictionary: { ukr: string; eng: string }[] }>) => {
      const { key, dictionary } = action.payload;

      if (state.Dictionaries[key]) {
        throw new Error(`Dictionary with key ${key} already exists.`);
      }

      state.Dictionaries[key] = dictionary;
    }
  },
})

export const { addNewDictionary } = dictionarysSlice.actions

export default dictionarysSlice.reducer