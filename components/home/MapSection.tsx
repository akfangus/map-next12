import useCurrentStore from "../../hooks/useCurrentStore";
import useMap from "../../hooks/useMap";
import { NaverMap } from "../../types/map";
import Map from "./Map";
import Markers from "./Markers";

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  //swr을 이용하여 map을 전역상태로 관리;
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, "click", clearCurrentStore);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />;
    </>
  );
};

export default MapSection;
