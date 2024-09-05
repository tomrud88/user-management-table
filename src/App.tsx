import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store'
import './App.css';
import { Table } from './components/table/Table'
import { Inputs } from './components/inputs/Inputs';
import { fetchUsers, selectFilters, selectStatus, selectUsers } from './redux/userSlice';


function App() {
  const filters = useSelector(selectFilters);
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])
  
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error loading data</div>

   const filteredData = users.filter(
     (user) =>
       user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
       user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
       user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
       user.phone.toLowerCase().includes(filters.phone.toLowerCase())
   );
      
  return (
    <div className="App">
      <h1>User Management</h1>
      <Inputs searchFields={filters}  />
      <Table filteredData={filteredData} />
    </div>
  );
}

export default App;
