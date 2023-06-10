export const handleArrayChange = (e, index, val, stateArray, setStateArray) => {
    // e.preventDefault();
    const newArray = [...stateArray];
    newArray[index] = val;
    setStateArray(newArray);
};

export const handleArrayRemove = (e, index, stateArray, setStateArray) => {
    e.preventDefault();
    const newArray = [...stateArray];
    newArray.splice(index, 1);
    setStateArray(newArray);
};

export const handleArrayAdd = (e, stateArray, setStateArray) => {
    e.preventDefault();
    setStateArray((prevState) => [...prevState, ""]);
};
