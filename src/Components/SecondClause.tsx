import React from 'react';

const secondList = [
    'Still',
    'Christian',
    'of',
    'Scott',
    'State',
    '',
    'Vista',
    'Technology',
    'International',
    'Gulf Coast',
    'National',
];

const secondName = (second: Array<string>) => {
    return second[Math.floor(Math.random() * (second.length - 1))];
};

const SecondClause = () => {
    return <div>{secondName(secondList)}</div>;
};

export default SecondClause;
