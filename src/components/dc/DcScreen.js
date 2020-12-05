import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>DC Heroes</h3>
            </div>
            <div className="card-body">
                <HeroList publisher="DC Comics"/>
            </div>
        </div>
    )
}
