import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import "./EffectsSection.css";
import SearchInput from '../Search/SearchInput';

export default function EffectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchChange = (value) => {
    setSearchText(value); // Update searchText state with the received value
    setCurrentPage(1); // Reset current page to 1 on search change
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const indexOfLastUser = currentPage * pageSize;
  const indexOfFirstUser = indexOfLastUser - pageSize;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate page numbers based on the filtered users
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <section>
      <h1>Effects</h1>
      <br />

      <Button
        style={{ marginBottom: '1rem' }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Information
      </Button>

      <Modal isOpened={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
          perferendis, vel assumenda blanditiis asperiores veritatis fugit
          molestiae, labore recusandae debitis eos voluptatum provident rem
          ullam neque reiciendis quo nesciunt veniam.
        </p>
      </Modal>
      {loading && <p>Loading...</p>}

      <SearchInput
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem', display: filteredUsers.length === 0 ? 'none' : 'block' }}
      />

      {!loading && currentUsers.length > 0 ? (
        <ul>
          {currentUsers
          .map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching users found.</p>
      )}

      {currentUsers.length > 0 && (
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
