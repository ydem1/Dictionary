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
    }
  },
})

export const { initNewDictionary } = dictionarysSlice.actions

export default dictionarysSlice.reducer