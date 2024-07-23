import { useState, useCallback } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const fetchUsers = async (input) => {
    if (input) {
      const result = await fetch(
        `https://dummyjson.com/users/search?q=${input}`
      );
      const data = await result.json();
      setUsers(data.users);
      console.log(data.users);
    } else {
      setUsers([]);
    }
  };

  // Create a debounced version of fetchUsers
  const debouncedFetchUsers = useCallback(debounce(fetchUsers, 500), []);

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedFetchUsers(e.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.filter((user) => userId !== user)
    );
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex min-h-screen justify-center overflow-hidden">
            <div className="p-20">
              <div className="relative w-96">
                <input
                  className="block w-full h-14 flex-1 p-3 hover:shadow-none rounded-lg hover:border-2 
                  border-black shadow-md shadow-slate-600"
                  id="default-search"
                  type="text"
                  placeholder="Search users"
                  value={input}
                  onChange={handleChange}
                />
                {users.length > 0 && (
                  <UsersList users={users} onUserClick={handleUserClick} />
                )}
              </div>
            </div>
          </div>
          {selectedUsers.length > 0 && (
            <UsersCard users={selectedUsers} onRemoveUser={handleRemoveUser} />
          )}
        </form>
      </div>
    </>
  );
}

function UsersList({ users, onUserClick }) {
  return (
    <div className="absolute mt-6 w-full border-4 shadow-lg shadow-slate-800 border-black overflow-hidden rounded-md">
      <div className="cursor-pointer p-4">
        <ul className="h-96 overflow-y-scroll">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => onUserClick(user)}
              className="hover:scale-110 m-2 text-lg border-b-4 hover:bg-slate-200
                  hover:rounded-md list-decimal ml-12 mr-8 p-3"
            >
              {user.firstName + " " + user.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function UsersCard({ users, onRemoveUser }) {
  return (
    <div className="mb-96 bg-blue-950 container-fluid p-8 row">
      <div className="p-8 overflow-hidden grid grid-flow-row gap-8 text-black sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="hover:cursor-pointer transition duration-300 hover:scale-110 mb-12 shadow-lg 
         shadow-blue-500/60 text-black rounded-md overflow-hidden p-4 bg-white"
          >
            <h1
              className="overflow-hidden text-center border-4 rounded-lg border-blue-950
                         text-xl bg-blue-300 p-4 tracking-widest font-bold"
            >
              🙋🏽‍♂️ USER PROFILE
            </h1>
            <div className="overflow-hidden container mx-auto p-6 m-4 text-lg text-black font-medium">
              <p>
                <strong className="text-blue-400">👤USER NAME :</strong>
                <span>{user.firstName + " " + user.lastName}</span>
              </p>
              <p>
                <strong className="text-blue-400">📞 USER PHONE :</strong>
                <span>{user.phone}</span>
              </p>
              <p>
                <strong className="text-blue-400">📧 USER Email :</strong>
                <span>{user.email}</span>
              </p>
            </div>

            <button
              onClick={() => onRemoveUser(user)}
              className="bg-blue-500 p-2 text-white tracking-wide rounded-md font-semibold text-lg shadow-md shadow-zinc-900 hover:shadow-none"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
