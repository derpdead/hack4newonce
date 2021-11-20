import {
    FC,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { ArtistThumb } from '@Artists/components';
import { POPULAR_ARTISTS_COLUMNS } from '@Artists/defaults';
import usePopularArtists from '@Artists/hooks/usePopularArtists';
import { IArtistModel } from '@Artists/service/models';
import useResizeObserver from '@react-hook/resize-observer';
import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';

const sliders = [...Array(POPULAR_ARTISTS_COLUMNS).keys()];

const PopularArtistsSlider: FC = () => {
    const popularArtists = usePopularArtists();
    const [
        sliderArtists, setSliderArtists,
    ] = useState<Array<Array<IArtistModel>>>([]);

    const [
        width, setWidth,
    ] = useState(0);
    const ref = useRef(null);

    useResizeObserver(ref, (entry) => setWidth(entry.contentRect.width));

    const itemWidth = useMemo(() => (width - 16) / 4, [width]);

    useEffect(() => {
        if (!popularArtists.length) {
            return;
        }
        const tmp = [...popularArtists];
        const sliderArtists = [];
        const middleIndex = Math.ceil(tmp.length / POPULAR_ARTISTS_COLUMNS);

        sliderArtists.push(tmp.splice(0, middleIndex));
        sliderArtists.push(tmp.splice(-middleIndex));
        sliderArtists.push(tmp.splice(-middleIndex));
        sliderArtists.push(tmp.splice(-middleIndex));

        setSliderArtists(sliderArtists);
    }, [popularArtists]);

    return (
        <div
            className={'popular-artists-slider'}
            ref={ref}>
            {
                sliderArtists.map((artists, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Swiper
                            key={index}
                            direction={'vertical'}
                            slidesPerView={isEven ? 4 : 4.1}
                            spaceBetween={isEven ? 50 : 60}
                            centeredSlides={!isEven}
                            loop={true}>
                            {
                                artists.map(artist =>
                                    <SwiperSlide key={artist.id}>
                                        <>
                                            {
                                                artist.image.url &&
                                                <ArtistThumb
                                                    width={itemWidth}
                                                    height={100}
                                                    objectFit={'cover'}
                                                    src={artist.image.url} />
                                            }
                                            {
                                                !artist.image.url &&
                                                <div
                                                    style={{
                                                        height: '100px',
                                                        width: `${itemWidth}px`,
                                                        backgroundColor: 'rebeccapurple',
                                                    }} />
                                            }
                                        </>
                                    </SwiperSlide>,
                                )
                            }
                        </Swiper>
                    );
                },
                )
            }
        </div>
    );
};

export default PopularArtistsSlider;
