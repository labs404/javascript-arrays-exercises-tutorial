let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(array) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  array.forEach((element) => {
    element.forEach((item) => {
      if (item == 1) {
        state.totalSlots += 1;
        state.occupiedSlots += 1;
      }
      if (item == 2) {
        state.totalSlots += 1;
        state.availableSlots += 1;
      }
    })
  })
  return state;
}


console.log(getParkingLotState(parking_state))