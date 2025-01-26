import React from 'react';
import { useTemplateStore } from '@/app/store';
import Castform from './Castform';
import Celebi from './Celebi';
import Gengar from './Gengar';
import Glalie from './Glalie';
import Onyx from './Onyx';
import Pikachu from './Pikachu';

const registerTemplates = () => {
    const { templates } = useTemplateStore.getState();

    if (templates.length === 0) {
        const { set } = useTemplateStore;
        set({
            templates: [
                { id: 'template1', name: 'Welcome', component: <Castform /> },
                { id: 'template2', name: 'About Us', component: <Celebi /> },
                { id: 'template3', name: 'Contact Us (Gengar)', component: <Gengar /> },
                { id: 'template4', name: 'Contact Us (Glalie)', component: <Glalie /> },
                { id: 'template5', name: 'Contact Us (Onyx)', component: <Onyx /> },
                { id: 'template6', name: 'Contact Us (Pikachu)', component: <Pikachu /> },
            ],
        });
    }
};

registerTemplates();
