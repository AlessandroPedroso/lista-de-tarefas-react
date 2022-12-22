import { useState } from "react"

function ListaDeTarefas(){

    const [tasks, setTasks] = useState(['Entrar para o DevClub'])
    const [inputValue, setInputValue] = useState('')

    const inputChange = event =>{

       setInputValue(event.target.value)
    }

    function buttonClick(){

        setTasks([...tasks,inputValue])
    }

    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange}/>
            <button onClick={buttonClick}>Adicionar Tarefa</button>

            <ul>
                {
                    tasks.map(item =>(

                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )

}
export default ListaDeTarefas