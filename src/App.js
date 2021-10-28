import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front in javascript framework'
    },
    {
        title: 'What use React?',
        content: 'Fuck this project'
    },
    {
        title: 'Do you know what you are doing?',
        content: 'Not really sir I do not!'
    }
]

export default () => {
    return (
    <div>
        <Accordion items={items} />
    </div>
    );
};