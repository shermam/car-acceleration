export function showValues(carImage){
    statsElement.innerHTML = `
        <table>
            ${Object.keys(carImage).map(prop => `
                <tr>
                    <td>${prop}</td>
                    <td>${carImage[prop]}</td>
                </tr>
            `).join('')}
        </table>
    `;
}