import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../store/actions";
import LoadingText from "../loaders/loadingText";

const Stats = (props) => {
  const { words, levels } = props.text.meta;
  const { loading } = props.text;
  const firstThousand = Math.floor(levels.A2 * words / 100);
  const thirdThousand = Math.floor(levels.B1 * words / 100);

  return (
    <div className="flex justify-around flex-col">
      <div className="flex flex-col py-2">
        <span className="text-gray-400">All words</span>
        <span className="text-white text-3xl font-semibold">{loading ? <LoadingText/>  : words}</span>
      </div>
      <div className="flex flex-col py-2">
        <span className="text-gray-400 ">Words from “Common thousand”</span>
        <span className="text-white text-3xl font-semibold">{loading ? <LoadingText/>  : firstThousand}</span>
      </div>
      <div className="flex flex-col py-2">
        <span className="text-gray-400">Words from “Third thousand”</span>
        <span className="text-white text-3xl font-semibold">{loading ? <LoadingText/>  : thirdThousand}</span>
      </div>
    </div>
  );
};

export default connect(state => state, actions)(Stats);
