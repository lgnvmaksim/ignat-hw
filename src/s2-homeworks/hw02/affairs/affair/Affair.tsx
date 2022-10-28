import React , {MouseEvent} from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void // need to fix any - fixed
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
       props.deleteAffairCallback(props.affair._id)    // need to fix - вообще не понял
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair.name} className={nameClass}>
                {/*создаёт студент*/}

                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair.priority} hidden>
                {/*создаёт студент*/}

                {/**/}
            </div>

            <button onClick={deleteCallback} className={buttonClass}>x</button>
        </div>
    )
}

export default Affair
