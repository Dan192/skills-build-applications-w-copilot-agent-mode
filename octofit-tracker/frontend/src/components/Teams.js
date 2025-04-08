import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://jubilant-couscous-9vj45p49gqh4xw-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team Name</th>
            <th scope="col">Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <th scope="row">{index + 1}</th>
              <td>{team.name}</td>
              <td>{team.members.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;