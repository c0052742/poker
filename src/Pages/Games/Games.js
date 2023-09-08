import { useState, useEffect } from 'react';
import '../Games/games.css';
import dayjs from 'dayjs';
import { motion, AnimatePresence } from 'framer-motion';

export default function Games() {
  const [stats, setStats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [sortDirection, setSortDirection] = useState('');

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
          setStats(statsData);
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchStats();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOrderBy = (event) => {
    setOrderBy(event.target.value);
  };

  const handleSortDirection = (event) => {
    setSortDirection(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setOrderBy('');
    setSortDirection('');
  };

  const filteredStats = stats.filter((stat) =>
    stat.playerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function winnings(stat) {
    return stat.amountWon - stat.buyin - (stat.rebuy ? stat.rebuyAmount : 0);
  }

  const sortedStats = orderBy
    ? [...filteredStats].sort((a, b) => {
        if (orderBy === 'placement') {
          return sortDirection === 'asc' ? a.place - b.place : b.place - a.place;
        } else if (orderBy === 'date') {
          const dateComparison = dayjs(a.gameDate).unix() - dayjs(b.gameDate).unix();
          return sortDirection === 'asc' ? dateComparison : -dateComparison;
        } else if (orderBy === 'amountWon') {
          return sortDirection === 'asc' ? winnings(a) - winnings(b) : winnings(b) - winnings(a);
        }
        return 0;
      })
    : filteredStats;

  return (
    <div>
      <div className='search_bar'>
        <input type='text' placeholder='Search by player name' value={searchTerm} onChange={handleSearch} />
      </div>
      <div className='select-container'>
        <select value={orderBy} onChange={handleOrderBy}>
        <option value="" disabled hidden>Sort by</option>
          <option value='placement'>Placement</option>
          <option value='date'>Date</option>
          <option value='amountWon'>Winnings</option>
        </select>
        </div>
        <div className='select-container'>
        <select value={sortDirection} onChange={handleSortDirection}>
        <option value="" disabled hidden>Order by</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>
      <button className="button" onClick={handleClearFilters}>Clear Filters</button>
      <div className='grid-container'>
        {sortedStats.length > 0 ? (
          <AnimatePresence>
            {sortedStats.map((stat, index) => (
              <motion.div
                key={index}
                className='user-block'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className='placement-block'>
                  <p className='placement'>Placement</p>
                  <p className='placement-number'>{stat.place}</p>
                </div>
                <div className='user-details'>
                  <p>
                    <strong>Player Name: </strong>
                    <span>{stat.playerName}</span>
                  </p>
                  <p>
                    <strong>Game Date: </strong>
                    <span>{dayjs(stat.gameDate).format('MM/DD/YYYY')}</span>
                  </p>
                  {stat.amountWon !== null ? (
                    <>
                      <p>
                        <strong>Amount won: </strong>
                        <span>{winnings(stat)}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>Buy-in: {stat.buyin}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <div className='no-games'>
            <h1>No Games have been posted</h1>
          </div>
        )}
      </div>
    </div>
  );
}
