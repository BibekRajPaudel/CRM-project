import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const Icon = <p onClick={() => setVisible(visibility => !visibility)}>{visible ? <AiFillEyeInvisible /> : <AiFillEye />}</p>;
    const InputType = visible ? "text" : "password";
    return [InputType, Icon]
}
