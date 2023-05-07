import ItcCustomSelect from "../vendor/custom-select.js";

const selectsArray = [];

// Tower Select
const selectTower = new ItcCustomSelect('#selectTower', { name: 'tower' });
selectsArray.push(selectTower);

// Floor Select
const selectFloorOptions = [];
const startFloor = 3;
const lastFloor = 27;

for (let i = startFloor; i <= lastFloor; i++) {
  selectFloorOptions.push([`floor ${i}`, `${i} этаж`]);
}

const selectFloor = new ItcCustomSelect('#selectFloor', {
  name: 'floor',
  options: selectFloorOptions
});
selectsArray.push(selectFloor);

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
selectsArray.push(selectMR);

export function resetSelects() { 
  selectsArray.forEach(select => {
    select.value = '';
  });
};

export function validateSelects() {
  const selectsData = {};
  let flag = true;

  for (let i = 0; i < selectsArray.length; i++) {
    const select = selectsArray[i];
    const value = select.value;

    if (value !== '') {
      const key = select._params.name;
      selectsData[key] = select.value; 
    } else { // Если есть хоть один пустой select
      flag = false;
      break;
    }
  };

  if (flag) return selectsData;
  return {};
}