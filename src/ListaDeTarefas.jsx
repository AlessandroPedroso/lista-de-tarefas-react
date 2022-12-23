import { useState } from "react"
import {Item, Container , TodoList , Input, Button, Ul} from './styles'

function ListaDeTarefas(){

    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    const inputChange = event =>{

       setInputValue(event.target.value)
    }

    function buttonClick(){

        setTasks([...tasks,inputValue])
    }

    return (
        <Container>
            <TodoList>
            <Input placeholder="Digite a sua tarefa!" onChange={inputChange}/>
            <Button onClick={buttonClick}>Adicionar Tarefa</Button>

            <Ul>
                {
                    tasks.map((item,index) =>(

                        <Item key={index}>{item}</Item>
                    ))
                }
            </Ul>
            </TodoList>
        </Container>
    )

}
export default ListaDeTarefas