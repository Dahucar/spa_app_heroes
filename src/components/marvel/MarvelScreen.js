import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Marvel Heroes</h3>
            </div>
            <div className="card-body">
                <HeroList publisher="Marvel Comics"/>
            </div>
        </div>
    )
}
