export const NumberOfGrids = [
    {
        isClicked: false,
        value: "1"
    },
    {
        isClicked: false,
        value: "2"
    },
    {
        isClicked: false,
        value: "3"
    },
    {
        isClicked: false,
        value: "4"
    },
    {
        isClicked: false,
        value: "5"
    },
    {
        isClicked: false,
        value: "6"
    },
    {
        isClicked: false,
        value: "7"
    },
    {
        isClicked: false,
        value: "8"
    },
    {
        isClicked: false,
        value: "9"
    },
    {
        isClicked: false,
        value: "10"
    },
    {
        isClicked: false,
        value: "11"
    },
    {
        isClicked: false,
        value: "12"
    },
    {
        isClicked: false,
        value: "13"
    },
    {
        isClicked: false,
        value: "14"
    },
    {
        isClicked: false,
        value: "15"
    },
    {
        isClicked: false,
        value: "16"
    },
]

export const updateSelectedArray = (arr, value) => {
    if(arr.includes(value)){
        return arr
    }

    if(arr.length > 1){
        arr.shift()
    }
    arr.push(value)
    return arr
}

export const BoxActions = {
    SET_SELECTED_BOX : "set_selected_box",
    GET_SELECTED_BOX : "get_selected_box"
}