for (let i = 2; i <= 20; i++, i++) {
    let table = `
        <tr>
        <th scope="row"> ${i}</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>`;
    
    document.getElementById("tabla").innerHTML += table;
    
    }