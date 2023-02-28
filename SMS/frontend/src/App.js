import './App.css';
import React from 'react';
import Header from './components/Header';
import AddStudent from './components/addStudent';
import AllStudents from './components/student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>hello</h1>
    //     <CounterClass />
    //     <CounterFunction />
    //   </header>
    // </div>
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/" element={<AllStudents />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <Router>
    //   <div>
    //     <Header />
    //     <Route path='/add' exact component={AddStudent}/>
    //   </div>
    // </Router>
  );
}

export default App;
