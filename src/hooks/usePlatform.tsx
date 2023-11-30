import useData from "./useData";
import { Platform } from "./useGames";

const usePlatForm = () => {
  return useData<Platform>("/platforms/lists/parents");
};
export default usePlatForm;
