document.addEventListener("DOMContentLoaded", function() {
  const electionResults = document.querySelector('#electionResults');

  const resultsRequest = axios({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    responseType: 'text'
  }).then(function (response) {
    response.data.candidates.forEach(function(candidate) {
    const candidateResult = document.createElement('LI')
    candidateResult.innerHTML = (`${candidate.name}: ${candidate.votes} votes`)
    electionResults.appendChild(candidateResult);
    })

    console.log(response.data);

  })
});
