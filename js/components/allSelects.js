import ItcCustomSelect from "../vendor/custom-select.js";

// Tower Select
const selectTower = new ItcCustomSelect('#selectTower');

// Floor Select
const selectFloorOptions = [];
const startFloor = 3;
const lastFloor = 27;

for (let i = startFloor; i < lastFloor; i++) {
  selectFloorOptions.push([`floor ${i}`, `${i} этаж`]);
}

const selectFloor = new ItcCustomSelect('#selectFloor', {
  name: 'floor',
  options: selectFloorOptions
});

// Metteng Room Select, MR = Meeting room

const selectMROptions = [];
const startMR = 1;
const lastMR = 10;

for (let i = startMR; i <= lastMR; i++) {
  selectMROptions.push([`meeting room ${i}`, `Переговорная комната №${i}`]);
}

const selectMR = new ItcCustomSelect('#selectMR', {
  name: 'meeting room',
  options: selectMROptions
});

export const selectsArray = [selectTower, selectFloor, selectMR]; 