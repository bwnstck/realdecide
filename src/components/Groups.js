import React from "react";

export default function Groups({ groupsChosen: groups }) {
  const renderGroup = groups.map((group) => group.join(", "));
  return (
    <div className="valuesToChoose">
      <h2>👬👭 {groups.length} Groups 👬👭</h2>
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
