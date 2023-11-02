import React, { Component } from "react";
import './Main.css'
//Form
import { FaPlus } from 'react-icons/fa'


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'fazer café',
            'beber agua',
            'estudar'
        ],
    };
    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    render() {
        const { novaTarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form action="#"className="form">
                    <input
                    onChange={this.handleChange} type="text"
                    value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
                <ul className="tarefas">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
