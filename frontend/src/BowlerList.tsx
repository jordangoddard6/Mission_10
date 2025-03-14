import './BowlerList.css';
import { bowler } from './types/bowler';
import { useEffect, useState } from 'react';

function BowlerList() {
  // useState to hold Bowler data from backend API
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  // useEffect to prevent frontend from hounding backend
  useEffect(() => {
    // fetchBowlers gets Bowler data from backend API
    const fetchBowlers = async () => {
      const response = await fetch('https://localhost:5000/api/Bowling'); //static port 5000 for https
      const data = await response.json();
      setBowlers(data); // saves data from API to bowlers variable
    };

    fetchBowlers();
  }, []);

  // Return table of bowler records
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map(
            (
              b // Loop through each bowler in JSON and create table row
            ) => (
              <tr key={b.bowlerId}>
                <td>
                  {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
                </td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
