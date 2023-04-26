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

And in the JavaScript file, the API key and url is defined. The API key needs to be replaced with your own key and the url contains an endpoint that is compatible with the GPT model of your choice. This endpoint is compatible with the GPT-3.5 model 'text-davinci-003'.



