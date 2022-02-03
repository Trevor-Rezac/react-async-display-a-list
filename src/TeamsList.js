import React from 'react';
import Team from './Team';

export default function TeamsList({ sportsTeams }) {
  return <>
    <h2>Favorite Sports Teams</h2>
    <div className='teams-list'>
      {sportsTeams.map((team, i) => <Team key={`${team}-${i}`} team={team} />)}
    </div>
  </>;
}
