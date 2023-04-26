# OpenAI API - Demo

## Introduction
From OpenAI's page:
"We’re releasing an API for accessing new AI models developed by OpenAI. Unlike most AI systems which are designed for one use-case, the API today provides a general-purpose “text in, text out” interface, allowing users to try it on virtually any English language task. You can now request access in order to integrate the API into your product, develop an entirely new application, or help us explore the strengths and limits of this technology."

As mentioned earlier, the API can be utilized in various ways. However, this repository is designed as a demonstration on how to access AI models through the API and implement them in your own application. The purpose of this case study is to provide instructions on getting started with the API, along with explanations of key concepts and details. Additionally, it includes a sample implementation of the API in a simple web application.

## Demo
### Getting started 
1. The very first thing you need to do is create an OpenAI account. Go to chat.openai.com and create an account.
2. Once your account is created and verified, go to https://platform.openai.com, click on your user-cion in the top right corner and press "View API keys".

![Skjermbilde 2023-04-25 kl  14 44 36](https://user-images.githubusercontent.com/95288100/234537665-fc259e6a-e959-4e96-8675-35944e28720f.png)

3. You'll be redirected to a page where you can create a secret key. Click on this and create it. The secret key is your accesstoken that will be used in your API calls. Remember to store it somewhere safe and don't show it to anyone.

![Skjermbilde 2023-04-25 kl  15 32 34](https://user-images.githubusercontent.com/95288100/234538975-9ebbda2a-193a-4652-b434-b9a9d08a4193.png)

4. Now that you have the key, the API can be used. 

### Building the application
1. I have created a project folder with an HTML file, where I've built a simple UI with an input element, a button for event handling and a text element for displaying the funfact.

![Skjermbilde 2023-04-25 kl  20 04 57](https://user-images.githubusercontent.com/95288100/234539999-145ec985-549b-4b5e-918c-7a78da1289c3.png)

And in the JavaScript file, the API key and url is defined. The API key needs to be replaced with your own key and the url contains an endpoint that is compatible with the GPT model of your choice. The current endpoint is configured for the GPT-3.5 model 'text-davinci-003'.

<img width="549" alt="Skjermbilde 2023-04-25 kl  20 02 23" src="https://user-images.githubusercontent.com/95288100/234541567-60462129-e54e-4a34-9be7-31a7af1172a7.png">

2. The next step is defining our request data that will be used in the body of the API call.

<img width="532" alt="Skjermbilde 2023-04-26 kl  10 01 59" src="https://user-images.githubusercontent.com/95288100/234542489-83a9154b-26a7-4fd4-88d8-8f2f3d87531d.png">

The 'model' property is the only required property, while the other properties have default values. However, adjusting these properties can help you better control the response of the API. Here's a short explanation of the properties used in this example:

#### model
The 'model' property specifies the language model that you want to use for generating text with the OpenAI API. In this example, we have set the model to 'text-davinci-003'. According to OpenAI, 'gpt-3.5-turbo' is the most capable and cost-effective model in the GPT-3.5 family. Although it is free to use, calling the API too frequently in a short period of time is limited. Therefore, 'text-davinci-003' is used in this case. OpenAI provides a wide range of models, some of which require different endpoints. Additionally, some models, such as GPT-4, are still in limited beta and require special access. A complete list of available models and their corresponding endpoints can be found here: https://platform.openai.com/docs/models/

#### prompt
This is the starting text that the language model uses as a prompt. It's similar to writing a message to ChatGPT about any topic that you may be wondering about. To better control the output, additional text is added to the prompt to provide direction. However, the majority of the content is left up to the user.

#### max_tokens
The maximum number of tokens that will be generated in response is determined by this parameter. Tokens can be words or just chunks of characters. For example, the string 'ChatGPT is great!' is encoded into six tokens: ['Chat', 'G', 'PT', ' is', ' great', '!']. You pay for the tokens you consume, so the more tokens used, the more expensive the API call becomes. Additionally, the response received counts towards the total number of tokens. Lets say you write a prompt that amounts to 10 tokens and the response you get from the API amounts to 20 tokens. The total number of tokens used is then 30. So you you just spent 30 tokens. When you first signup with OpenAI you get a free trial usage up to 18$. The number of tokens also affects the duration of the API call, with more tokens taking longer to process. The maximum limit of tokens in a single call varies from model to model. For instance, the gpt-3.5-turbo-0301 model has a limit of 4096 tokens, while the text-davinci-003 has a limit of 2048 tokens.

#### n
This is the number of different responses that the language model will generate as a response to the prompt. In this example, we only need one fun-fact so it has been set to one. However, if you wanted to generate something else, like different name suggestions for a pet, you could set it to five and receive five names suggestions.

#### stop
This is a list of tokens that the language model should stop generating text at. In this case, it has been set to null, which means that the model will generate text until it reaches the max_tokens limit without stopping at any specific tokens.

#### temperature
This controls the randomness of the output provied. It can be set between 0 and 2. Higher values (closer to 2) make the output more random, while lower values make it more predictable. There is an alternative property called 'top-p' that can be used similarily, but OpenAI suggest only using either on of these.

There are other properties to choose from with detailed explanations. You can find a list over the properties here: https://platform.openai.com/docs/api-reference/

3. The API call itself can be written like this using fetch:

