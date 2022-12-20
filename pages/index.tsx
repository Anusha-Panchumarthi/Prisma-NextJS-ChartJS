
import React from "react";
import styles from  '../styles/Index.module.css'
import Navbar from "./navbar";
import AllChart from "./allChart"
import BudgetChart from "./budgetChart";
import PhyFinance from "./pvf";

const Index: React.FC = ()=> {
    return(
        <div className={styles.main}>
        <Navbar/>
        <div className={styles.graphs}>
            <div className={styles.bars}>
            <AllChart/>
            <PhyFinance/>
            </div>
        <BudgetChart/>
        </div>
     
       </div>
    )
}

export default Index