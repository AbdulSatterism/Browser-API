// alert('abc')
const maComming = () => {
    alert('Ma comming pala pala')
};

const askPicnic = () => {

    const response = confirm('Are you going to picnic?');
    console.log(response)
    if (response === true) {
        alert('amake picnic ar taka pathay de taile')
    }
    else {
        alert('dgb')
    }
}

const askPrompt = () => {
    const name = prompt('what is your name?');
    if (name) {
        alert(name)
    }
}