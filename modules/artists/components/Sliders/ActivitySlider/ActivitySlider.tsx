import { FC } from 'react';

import ActivitySliderItem, { IActivitySliderItemModel } from '@Artists/components/Sliders/ActivitySlider/Item/ActivitySliderItem';
import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';

interface IActivitySlider {
    items: Array<IActivitySliderItemModel>;
}

const ActivitySlider: FC<IActivitySlider> = ({ items }) => {

    return (
        <div className={'activity-slider'}>
            <Swiper
                loop={true}
                slidesPerView={1.6}
                spaceBetween={12}>
                {
                    items.map((item, index) =>
                        <SwiperSlide key={index}>
                            <ActivitySliderItem {...item} />
                        </SwiperSlide>,
                    )
                }
            </Swiper>
        </div>
    );
};

export default ActivitySlider;
