'use client'
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "@/list.json";
import styles from "./style.module.css";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
        <button onClick={() => setIsOpen((previousState) => !previousState)}   className={styles.btn}>
            Drop Down
            {!isOpen ? 
                <AiOutlineCaretDown className="h-8"/>
                :
                <AiOutlineCaretUp className="h-8"/>
            }
        </button>
        {
            isOpen && (
                <div className={styles.list} >
                    
                        {list.map((item,i) => (
                                    <div className={styles.item} >
                                    <h3>{item.city}</h3>
                                    <h3>{item.emoticon}</h3>
                                    </div>
                        ))}
                    
                    
                </div>
            )
        }
    </div>
  )
}

export default DropDown