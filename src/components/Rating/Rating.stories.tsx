import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Rating, {RatingValueType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyRating = () => <Rating onClick={x=>x} value={0}/>;
export const Rating1 = () => <Rating onClick={x=>x} value={1}/>;
export const Rating2 = () => <Rating onClick={x=>x} value={2}/>;
export const Rating3 = () => <Rating onClick={x=>x} value={3}/>;
export const Rating4 = () => <Rating onClick={x=>x} value={4}/>;
export const Rating5 = () => <Rating onClick={x=>x} value={5}/>;

export const RatingChenging = () => {
    let [rating, setRating] = useState<RatingValueType>(5)

    return <Rating value={rating} onClick={setRating}/>
}
