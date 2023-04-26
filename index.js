const apiKey = 'YOUR_API_KEY';
const url = 'https://api.openai.com/v1/completions';
const input = document.querySelector('#prompt');
const button = document.querySelector('#call-button');
const factContainer = document.querySelector('#funfact');

const apiCall = async () => {
    factContainer.innerText = 'Loading...';

    // Defining the API request
    const requestData = {
        model: 'text-davinci-003',
        prompt: `Please tell a random fact with the following keyword: ${input.value}`,
        max_tokens: 70,
        n: 1,
        stop: null,
        temperature: 0.5,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestData),
        })
    
        const data = await response.json();

        if(response.ok){
            funfact.innerText = data.choices[0].text;
        } else if (!response.ok){
            funfact.innerText = data.error.message
            }
        } catch(error) {
            console.log(error)
        }

};
button.addEventListener('click', apiCall);
