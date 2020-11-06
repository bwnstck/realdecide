import React from "react";

export default function Groups({ groupsChosen }) {
  const renderGroup = groupsChosen.map((group) => group.join(", "));
  return (
    <div className="valuesToChoose">
      <h2>👬👭 {groupsChosen.length} Groups 👬👭</h2>
      <ul className="RealDecide">
        {renderGroup.map((group) => (
          <li className="value group" key={group}>
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
}
