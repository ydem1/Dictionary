import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dictionaries } from '../types/Dictionary';
import { dictionaries } from '../constants/initDictionaries';

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
    removeDictionary: (state, action: PayloadAction<{ key: string }>) => {
      const { key } = action.payload;

      if (!state.value[key]) {
        throw new Error(`Dictionary with key ${key} don't already exists.`);
      }

      delete state.value[key];
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
    },
    removeWordToDictionary: (state, action: PayloadAction<{ key: string; indexRemove: number }>) => {
      const { key, indexRemove } = action.payload;

      if (!state.value[key]) {
        throw new Error(`Dictionary with key ${key} don't already exists.`);
      }

      const newWords = state.value[key].filter((_, index) => indexRemove !== index)

      state.value[key] = [
        ...newWords,
      ];
    }
  },
})

export const {
  initNewDictionary,
  removeDictionary,
  addWordToDictionary,
  removeWordToDictionary,
} = dictionarysSlice.actions

export default dictionarysSlice.reducer