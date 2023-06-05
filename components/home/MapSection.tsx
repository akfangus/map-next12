import useMap from "../../hooks/useMap";
import { NaverMap } from "../../types/map";
import Map from "./Map";
import Markers from "./Markers";

const MapSection = () => {
  const { initializeMap } = useMap();

  //swr을 이용하여 map을 전역상태로 관리;
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />;
    </>
  );
};

export default MapSection;
