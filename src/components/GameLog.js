import {coock} from '../Game';
import React from 'react';

export default function GameLog(props) {
    return (
        <div className="gamelog">
            <div className="gamelog-header">Логи игры</div>
            <ul className="gamelog-list">
                {props.logs.map((item, index) => {
                    return (
                        <li key={index}>{`${(index+coock === 0) ? '' : String(index+coock) + '.'} ${item}`}</li>
                    )
                })}
            </ul>
        </div>
    )
}