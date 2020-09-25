import React, { useState, useEffect } from 'react';
import Header from './Header'
import { PlannerDiv, SectionPlanner } from './styled'
import axios from "axios"

function Section() {

    const [task, setTask] = useState([]);

    useEffect(() => {
        getTasks();
    }, [task]);

    const getTasks = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-guilherme"
            )
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const deleteText = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-guilherme/${id}`
            )
            .then((response) => {
                // SetTask(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const tasksDay = (day) => {
        const renderDays = task.map((task) => {
            if (task.day === day) {
                return (
                    <div>
                        <p>
                            {task.text}{" "}
                            <button onClick={() => deleteText(task.id)}> X </button>
                        </p>
                    </div>
                )
            }
        })
        return renderDays
    }

    return (
        <div>
            <Header />
            <SectionPlanner>
                <PlannerDiv>
                    <h1>Domingo</h1>
                    {tasksDay("domingo")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Segunda</h1>
                    {tasksDay("segunda")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Terça</h1>
                    {tasksDay("terca")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Quarta</h1>
                    {tasksDay("quarta")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Quinta</h1>
                    {tasksDay("quinta")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Sexta</h1>
                    {tasksDay("sexta")}

                </PlannerDiv>

                <PlannerDiv>
                    <h1>Sabado</h1>
                    {tasksDay("sabado")}
                </PlannerDiv>
            </SectionPlanner>



        </div>
    );
}

export default Section;
