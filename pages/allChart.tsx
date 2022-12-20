import { useEffect, useState } from "react";
import React from "react";
import styles from  '../styles/Index.module.css'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const AllChart = (): JSX.Element=> {
    const [inst, setInst] = useState<any[]>([])
    useEffect(() =>{
        void fetch('/api/getAll')
        .then(async res => {
            return res.json()
        })
        .then(res=>{
            setInst(res)
        })
    })
    return(
        <div className={styles.graphBox}>
       <h3>Salary per Instructor</h3>
       <Bar
       data = {{
        labels:  inst.map( i => i.name),
        datasets: [{
            label: 'Salary',
            data: inst.map(i => i.salary),
            barThickness: 20,
            backgroundColor: ['#2C5282']
        }
        ]
    
       }}
       options={{
        responsive: true
    }}
       />
       
       </div>
    )
}

export default AllChart