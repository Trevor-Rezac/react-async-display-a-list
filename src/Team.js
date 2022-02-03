import React from 'react';

export default function Team({ team }) {
  return <div className='team-container'>
    <h3>{team.Team}</h3>
    <p>Sport: {team.Sport}</p>
    <p>Stadium: {team.Stadium}</p>
    <p>Titles: {team.Titles}</p>
  </div>;
}
