async function fetchChecklistResults() {
  try {
    const response = await fetch('/api/evaluate');
    const data = await response.json();

    if (data.success) {
      const resultsTable = document.getElementById('checklist-results');
      resultsTable.innerHTML = '';

      data.results.forEach((result) => {
        const row = document.createElement('tr');
        const ruleCell = document.createElement('td');
        const statusCell = document.createElement('td');

        ruleCell.textContent = result.rule;
        statusCell.textContent = result.status;
        statusCell.className = result.status.toLowerCase();

        row.appendChild(ruleCell);
        row.appendChild(statusCell);
        resultsTable.appendChild(row);
      });
    } else {
      console.error('Failed to fetch checklist results.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchChecklistResults();
