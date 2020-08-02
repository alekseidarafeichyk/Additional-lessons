import React from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UnControlledAccordion';

export default {
    title: 'UnControlledAccordion',
    component: UncontrolledAccordion,
};

export const ModeChanging = () => {
    return <UncontrolledAccordion title={'Menu'}/>
}





