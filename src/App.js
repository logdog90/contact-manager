import {Route, Routes, Navigate} from 'react-router-dom'

import './App.css';
import ContactList from './components/pages/ContactList';
import AddContact from './components/pages/AddContact';
import EditContact from './components/pages/EditContact';
import ViewContact from './components/pages/ViewContact';

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Navigate to={'/contact'} />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/contact/add" element={<AddContact />} />
        <Route path="/contact/edit/:id" element={<EditContact />} />
        <Route path="/contact/view/:id" element={<ViewContact />} />
      </Routes>
    </main>
  );
}

export default App;
