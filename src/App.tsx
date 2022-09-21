import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { UserList } from './pages/userList';

const Landing: Component = () => {
  return <>Landing</>
};

const App: Component = () => {
  return (
    <div class='px-20 py-10'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users" element={<UserList />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
