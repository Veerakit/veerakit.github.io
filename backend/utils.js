let activityIdCounter = 0;

const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

const createElement = (elementType, queryArguments) => {
  if (queryArguments.hasOwnProperty('name') &&
      queryArguments.hasOwnProperty('type') &&
      queryArguments.hasOwnProperty('date') &&
      queryArguments.hasOwnProperty('kcal') &&
      queryArguments.hasOwnProperty('duration') &&
      queryArguments.hasOwnProperty('description')) {
    let currentId;
    if (elementType === 'activitylists') {
      activityIdCounter += 1;
      currentId = activityIdCounter;
    }
    return {
      'id': currentId,
      'name': queryArguments.name,
      'type': queryArguments.type,
      'date': queryArguments.date,
      'kcal': queryArguments.kcal,
      'duration': queryArguments.duration,
      'description': queryArguments.description,
    };
  } else {
    return false;
  }
};

const updateElement = (id, queryArguments, elementList) => {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error('updateElement must be called with a valid id parameter');
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};

// const seedElements = (arr, type) => {
//   if (type === 'expressions') {
//     arr.push(createElement('expressions', {'emoji': '😀', 'name': 'happy'}));
//     arr.push(createElement('expressions', {'emoji': '😎', 'name': 'shades'}));
//     arr.push(createElement('expressions', {'emoji': '😴', 'name': 'sleepy'}));
//   } else if (type === 'animals') {
//     arr.push(createElement('animals', {'emoji': '🐶', 'name': 'Pupper'}));
//     arr.push(createElement('animals', {'emoji': '🐍', 'name': 'Snek'}));
//     arr.push(createElement('animals', {'emoji': '🐱', 'name': 'Maru'}));
//   } else {
//     throw new Error(`seed type must be either 'expression' or 'animal'`);
//   }
// };

module.exports = {
  createElement: createElement,
  getIndexById: getIndexById,
  getElementById: getElementById,
  updateElement: updateElement,
};