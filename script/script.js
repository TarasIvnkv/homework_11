const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

let namesExclamationMark = users.forEach(item => {
    console.log(`${item[0]}!`);
});

let namesQuestionMark = users.forEach(item => {
    console.log(`${item[0]}?`);
});


let filteredUsers = users.filter(item => item[1] === `red`);

let total = filteredUsers.reduce((value, item) => {
    return value + item[2];
},0);

let tableBody = filteredUsers.map(item => {
    return `
        <tr>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
            <td>${item[2]}</td>
            <td>${item[3].join("; ")}</td>
        </tr>
    `;
});


document.write(`
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Comand</th>
                <th>Score</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
           ${tableBody}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total score: ${total}</td>
            </tr>
        </tfoot>
    </table>
`);