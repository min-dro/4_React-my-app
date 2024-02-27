import React, { useState } from 'react';

// component
import Square from './Square';

function Board() {
    const [index, setIndex] = useState(1);

    // Square 컴포넌트를 사용
    return (
        <Square value={index} />
    );
}

export default Board;