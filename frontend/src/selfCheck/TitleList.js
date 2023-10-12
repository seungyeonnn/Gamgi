import React from "react";
import dummy from '../db/data.json';

const TitleList = () => {
    return(
        <div>
            {dummy.depression.map(title => (
                    <li key={title.id}>
                        {title.title}
                    </li>
                ))}
        </div>
    );
}

export default TitleList;