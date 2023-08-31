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
  setMarkers: (i,j) => set(state => ({markers:markers[i][j] })),
  setWholeMarkers:k => set(state => ({markers:[...k]})),
  active_block: null,
  setActive_block: k => set(state => ({active_player: k}))
}));
