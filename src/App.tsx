import './App.css';
import Board from './components/Board';
import Form from './components/Form';

const App = () => {
    return (
        <>
       <div className="board-header">
        <h1 className="board-title">Kanban Board</h1>
      </div>
        <section className="app">
            <article>
                <Board />
            </article>
            <article>
            <Form onCreate={()=>{}}/>
            </article>
        </section>
        </>
    );
};

export default App;