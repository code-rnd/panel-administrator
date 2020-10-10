import { TreeviewPropsModel } from "../../pages/Services/components/Treeview/model/Treeview.model";

export const TreeviewMock: TreeviewPropsModel[] = [
  {
    id: 1,
    name: "Первая",
    level: 1,
    isArchive: false,
    childrenItems: [
      {
        id: 2,
        name: "Вторая",
        level: 2,
        isArchive: false,
        childrenItems: [
          {
            id: 3,
            name: "Третья",
            level: 3,
            isArchive: false,
          },
          {
            id: 4,
            name: "Четвертая",
            level: 3,
            isArchive: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Пятая",
    level: 1,
    isArchive: false,
    childrenItems: [
      {
        id: 6,
        name: "Шестая",
        level: 2,
        isArchive: false,
      },
    ],
  },
  {
    id: 7,
    name: "Седьмая",
    level: 1,
    isArchive: false,
    childrenItems: [
      {
        id: 8,
        name: "Восьмая",
        level: 2,
        isArchive: false,
      },
      {
        id: 9,
        name: "Девятая",
        level: 2,
        isArchive: false,
        childrenItems: [
          {
            id: 10,
            name: "Десятая",
            level: 3,
            isArchive: false,
          },
          {
            id: 11,
            name: "Одиннадцатая",
            level: 3,
            isArchive: false,
            childrenItems: [
              {
                id: 12,
                name: "Двенадцатая",
                level: 4,
                isArchive: false,
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 13, name: "Тринадцатая", level: 1, isArchive: false },
];
