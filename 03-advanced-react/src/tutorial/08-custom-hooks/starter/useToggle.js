import { useState } from "react";

const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);
    function toggle () {
        setShow(!show)
    }
    return [show, toggle]

}

export default useToggle;