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
  item: TreeviewPropsModel,
  upd: {
    name?: string;
    isArchive?: boolean;
  } = {}
) => {
  let result = [...array];
  for (let i = 0; i < result.length; i++) {
    let xItem = result[i];

    deleteItemByID(result, xItem, item.id, i, upd);
  }

  return result;
};

export const deleteItemByID = (
  array: TreeviewPropsModel[],
  item: TreeviewPropsModel,
  id: number,
  count: number,
  upd: {
    name?: string;
    isArchive?: boolean;
  } = {}
) => {
  if (item.id === id) {
    array[count] = { ...array[count], ...upd };
    return;
  } else {
    if (item.childrenItems) {
      if (item.childrenItems.length) {
        for (let i = 0; i < item.childrenItems.length; i++) {
          let xItem = item.childrenItems[i];
          deleteItemByID(item.childrenItems, xItem, id, i, upd);
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
  item: TreeviewPropsModel,
  upd: {
    name: string;
  }
) => {
  let result = [...array];
  for (let i = 0; i < result.length; i++) {
    let xItem = result[i];

    addItemByID(result, xItem, item.id, i, upd);
  }

  return result;
};

export const addItemByID = (
  array: TreeviewPropsModel[],
  item: TreeviewPropsModel,
  id: number,
  count: number,
  upd: {
    name: string;
  }
) => {
  if (item.id === id) {
    const oldChildren = array[count]?.childrenItems;

    if (oldChildren) {
      array[count]?.childrenItems?.push({
        id: id + getRandomArbitrary(100, 10000),
        childrenItems: [],
        isArchive: false,
        level: item.level + 1,
        ...upd,
      });
    }

    if (!oldChildren) {
      array[count] = {
        ...array[count],
        childrenItems: [
          {
            id: id + getRandomArbitrary(100, 10000),
            childrenItems: [],
            isArchive: false,
            level: item.level + 1,
            ...upd,
          },
        ],
      };
    }

    return;
  }
  if (item.id !== id) {
    if (item.childrenItems) {
      if (item.childrenItems.length) {
        for (let i = 0; i < item.childrenItems.length; i++) {
          let xItem = item.childrenItems[i];
          addItemByID(item.childrenItems, xItem, id, i, upd);
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
 *
 * Add first item func
 */
export const prepareAddFirstItem = (
  array: TreeviewPropsModel[],
  item: TreeviewPropsModel
) => {
  const result = [...array];

  result.push(item);

  return result;
};
/**
 *
 * Add first item func end
 */

/**
 * Random interval
 * @param min
 * @param max
 */
export const getRandomArbitrary = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};
