import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { UserList } from './pages/userList';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h1 class="text-3xl font-bold">
          Hello world!
        </h1>
        <UserList />
      </header>
    </div>
  );
};

export default App;
