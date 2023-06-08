import { useRouter } from 'next/router';
import useCurrentStore from '../../hooks/useCurrentStore';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '../../hooks/useMap';
import { NaverMap } from '../../types/map';
import Map from './Map';
import Markers from './Markers';
import { useMemo } from 'react';

const MapSection = () => {
    const router = useRouter();
    const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);

    const initialZoom = useMemo(() => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM), [query]);

    const initialCenter = useMemo<StoreProject.Coordinates>(
        () =>
            query.get('lat') && query.get('lng')
                ? [Number(query.get('lat')), Number(query.get('lng'))]
                : INITIAL_CENTER,
        [query]
    );

    const { initializeMap } = useMap();
    const { clearCurrentStore } = useCurrentStore();

    //swr을 이용하여 map을 전역상태로 관리;
    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
    };
    return (
        <>
            <Map onLoad={onLoadMap} initialCenter={initialCenter} initialZoom={initialZoom} />
            <Markers />
        </>
    );
};

export default MapSection;
