
import { useEffect, useState } from "react";
import React from "react";
import styles from  '../styles/Index.module.css'


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
    )
}

export default Index