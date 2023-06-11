import React from 'react'
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';

const Ternary = (props) => {
    const isGoal = props.isGoal;
  return (
    <div>
        {/* condition ? true  : false */}
    {
        isGoal ? <MadeGoal /> : <MissedGoal />
    }
    </div>
  )
}

export default Ternary