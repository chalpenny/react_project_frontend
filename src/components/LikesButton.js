import React, { useState } from 'react';


function LikesButton() { 

    const [clicks, incrementClicks] = useState(0);


        return (
            <div>
                <button className="btn-floating btn-small waves-effect waves-light red" onClick={() => incrementClicks(clicks + 1)}><i className="material-icons">thumb_up</i></button> {clicks} people like this 
            </div>
        );

};

export default LikesButton;