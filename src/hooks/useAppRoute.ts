import { useRoute } from '@react-navigation/native';
export interface IRouteBody {
  key: string;
  name: string;
  params: {
    id: string;
  };
  path: string;
}

const useAppRoute = () => useRoute<IRouteBody>();

export default useAppRoute;
