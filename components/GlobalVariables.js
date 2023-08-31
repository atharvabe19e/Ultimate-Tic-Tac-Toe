import {create} from 'zustand';
import React from 'react';

export const useStore = create(set => ({
  active_player: 'X',
  setActive_player: k => set(state => ({active_player: k})),


  markers: [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ],
  setMarkers:(rowIndex, colIndex, newItem) =>
  set((state) => {
    const updatedArray = [...state.markers];
    if (!updatedArray[rowIndex]) {
      updatedArray[rowIndex] = [];
    }
    updatedArray[rowIndex][colIndex] = newItem;
    return { markers: updatedArray };
  })
  ,setWholeMarkers:k => set(state => ({markers:[...k]})),


  active_block: null,
  setActive_block: k => set(state => ({active_player: k})),


  boxStatus:[null,null,null,null,null,null,null,null,null],
  setBoxStatus:(index, newItem) =>
  set((state) => {
    const updatedItems = [...state.boxStatus];
    updatedItems[index] = newItem;
    return { boxStatus: updatedItems };
  }),
  setWholeBoxStatus:k => set(state => ({boxStatus:[...k]}))
}));
