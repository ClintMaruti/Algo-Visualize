const swap = (arr, i, j) => {
  try {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  } catch (error) {
    console.log(error);
  }
};

// const rowArr = [
//     { id: 1, selectColor: "#f4f269" }, // 0
//     { id: 2, selectColor: "#cee26b" }, // 1
//     { id: 3, selectColor: "#a8d26d" }, // 2
//     { id: 4, selectColor: "#82c26e" }, // 3
//     { id: 5, selectColor: "#5cb270" }, // 4
//   ];

const selectionSort = (arr) => {
  try {
    let minIndex = null;
    for (let i = 0; i < arr.length; i++) {
      minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].id < arr[i].id) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
};

export default selectionSort;
