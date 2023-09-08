import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function PlayerProfile() {
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const statsData = await response.json();
          console.log(statsData);
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchStats();
  }, []);
  return (
    <div>
      <h1>This is your profile</h1>
    </div>
  );
}

export default PlayerProfile;
