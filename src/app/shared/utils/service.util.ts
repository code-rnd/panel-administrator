import { getRandomArbitrary } from "../../store/services/services.utils";

export const timerCount = 1000;

export const initialItem = {
  name: "",
  level: 1,
  id: getRandomArbitrary(100, 10000),
  isArchive: false,
  childrenItems: [],
};
