const insert = document.querySelector('.insert');

window.addEventListener('keydown', (e)=> {
    // console.log(e.key, e.code);

    let key = document.querySelector('.key');

    key.innerHTML = `<div class="color">
        <table>
        <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>

        </tr>

        <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>

        </tr>
        
        </table>
    </div>`
    // console.log(e.key, e.keyCode, e.code);
})