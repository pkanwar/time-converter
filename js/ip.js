const ipOutput = document.querySelector('#ipOutput');
const ipGetBtn = document.querySelector('#ipGetBtn');


ipGetBtn.addEventListener('click', () => {
    fetch('https://api.ipify.org/?format=json',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((res) => res.json())
        .then((json) => {
            ipOutput.innerHTML = `Your public IP address is : ${json.ip}`;
        })
        .catch((err) => {
            console.log(`error : ${err}`);
        });


})