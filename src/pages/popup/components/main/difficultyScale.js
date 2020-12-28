import React from 'react';
import Scale from "./scale";
import {connect} from "react-redux";
import * as actions from "../../store/actions";

const DifficultyScale = (props) => {
  const { grade } = props.text.meta;
  const gradeToPercentage = {'A1': 10, 'A2': 30, 'B1': 40, 'B2': 60, 'C1': 80, 'C2': 100}

  return (
    <div className="pr-10">
      <div className="h-full flex">
        <div className="w-10 mr-2 flex flex-col justify-around items-center h-full">
          <span className="text-gray-100">C1</span>
          <span className="text-gray-100">B2</span>
          <span className="text-gray-100">B1</span>
          <span className="text-gray-100">A2</span>
          <span className="text-gray-100">A1</span>
        </div>
        <Scale percentage={gradeToPercentage[grade]}/>
      </div>
    </div>
  );
};

export default connect(state => state, actions)(DifficultyScale);
