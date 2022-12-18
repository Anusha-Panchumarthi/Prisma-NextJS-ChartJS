
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

const Index: React.FC = ()=> {
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
        <div>
        <table className={styles.table}>
            <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>ID</th>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Dept Name</th>
                <th className={styles.tableHeader}>Salary</th>
            </tr></thead>
            <tbody>
            {inst.map((item)=>(
                <tr key={item.id} className= {styles.tableRow}>
                <td className={styles.tableEntry}>{item.id}</td>
                <td className={styles.tableEntry}>{item.name}</td>
                <td className={styles.tableEntry}>{item.dept_name}</td>
                <td className={styles.tableEntry}>{item.salary}</td>
            </tr>
            ))}
        </tbody>
       </table>
       <div className={styles.barchart}>
       <Bar
       data = {{
        labels:  inst.map( i => i.name),
        datasets: [{
            label: 'Salary',
            data: inst.map(i => i.salary),
            barThickness: 20
        }
        ]
    
       }}
       />
       </div>
       </div>
    )
}

export default Index