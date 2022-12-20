import { useEffect, useState } from "react";
import React from "react";
import styles from  '../styles/Index.module.css'
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Colors
  } from 'chart.js';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,

  );

  const BudgetChart = (): JSX.Element=> {
    const [inst, setInst] = useState<any[]>([])
    useEffect(() =>{
        void fetch('/api/budget')
        .then(async res => {
            return res.json()
        })
        .then(res=>{
            setInst(res)
        })
    })
    return(
    <div className={styles.graphBox}>
        <h3>Budget per Department</h3>
        <Pie
        data = {{
        labels:  inst.map( i => i.dept_name),
        datasets: [{
            //label: 'Budget',
                    data: inst.map(i => i.budget),
                    backgroundColor: [ '#9b5fe0', '#16a4d8', '#60dbe8', '#8bd346', '#efdf48', '#f9a52c', '#d64e12'], 
                }],
            }}
        options={{
            responsive: true,
            plugins:{
                legend:{
                    position: "right",
                    align: "center",
                    labels:{
                        padding: 3
                    }
                },
            }
        }}
       />
    
       </div>
    )
}

export default BudgetChart