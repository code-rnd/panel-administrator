import { TreeviewPropsModel } from "../../pages/Services/components/Treeview/model/Treeview.model";

/**
 * Copy function
 * https://coderoad.ru/53444521/%D0%A3%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%B8%D0%BB%D0%B8-%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%B8%D0%B7-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0
 */

/**
 * Update func
 */

export const prepareUpdateItem = (
  array: TreeviewPropsModel[],
  newItem: TreeviewPropsModel
) => {
  if (!newItem?.id) {
    const result = [...array];

    result.push({
      ...newItem,
      id: 25 + getRandomArbitrary(100, 10000),
      childrenItems: [],
      level: 1,
    });
    return result;
  }

  let result = [...array];
  for (let level = 0; level < result.length; level++) {
    let oldItem = result[level];

    updateItemByID(result, oldItem, newItem, level);
  }

  return result;
};

export const updateItemByID = (
  array: TreeviewPropsModel[],
  oldItem: TreeviewPropsModel,
  newItem: TreeviewPropsModel,
  level: number
) => {
  if (oldItem.id === newItem.id) {
    array[level] = { ...newItem };
    return;
  } else {
    if (oldItem.childrenItems) {
      if (oldItem.childrenItems.length) {
        for (let i = 0; i < oldItem.childrenItems.length; i++) {
          let xItem = oldItem.childrenItems[i];
          updateItemByID(oldItem.childrenItems, xItem, newItem, i);
        }
      }
    }
  }
};

/**
 *
 * Update func end
 */

/**
 *
 * Add func
 */

export const prepareAddItem = (
  array: TreeviewPropsModel[],
  newItem: TreeviewPropsModel
) => {
  if (!newItem?.id) {
    const result = [...array];

    result.push({
      ...newItem,
      id: 25 + getRandomArbitrary(100, 10000),
      childrenItems: [],
      level: 1,
    });
    return result;
  }

  let result = [...array];
  for (let level = 0; level < result.length; level++) {
    let oldItem = result[level];

    addItemByID(result, oldItem, newItem, level);
  }

  return result;
};

export const addItemByID = (
  array: TreeviewPropsModel[],
  oldItem: TreeviewPropsModel,
  newItem: TreeviewPropsModel,
  level: number
) => {
  if (oldItem.id === newItem.id) {
    const oldChildren = array[level]?.childrenItems;

    if (oldChildren) {
      array[level]?.childrenItems?.push({
        ...newItem,
        id: oldItem.id + getRandomArbitrary(100, 10000),
        childrenItems: [],
        level: oldItem.level + 1,
      });
    }

    if (!oldChildren) {
      array[level] = {
        ...array[level],
        childrenItems: [
          {
            ...newItem,
            id: oldItem.id + getRandomArbitrary(100, 10000),
            childrenItems: [],
            level: oldItem.level + 1,
          },
        ],
      };
    }

    return;
  }
  if (oldItem.id !== newItem.id) {
    if (oldItem.childrenItems) {
      if (oldItem.childrenItems.length) {
        for (let i = 0; i < oldItem.childrenItems.length; i++) {
          let xItem = oldItem.childrenItems[i];
          addItemByID(oldItem.childrenItems, xItem, newItem, i);
        }
      }
    }
  }
};

/**
 *
 * Add end
 */

/**
 * Random interval
 * @param min
 * @param max
 */
export const getRandomArbitrary = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};
