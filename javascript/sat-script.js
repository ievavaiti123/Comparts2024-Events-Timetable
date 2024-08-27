document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#schedule-table tbody');

    fetch('../docs/saturday.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Assuming the first row is headers

            rows.forEach(row => {
                const columns = row.split(',');

                if(columns.length === 3) {
                    const tr = document.createElement('tr');

                    columns.forEach(column => {
                        const td = document.createElement('td');
                        td.textContent = column.trim();
                        tr.appendChild(td);
                    });

                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error('Error fetching the schedule:', error));
});
