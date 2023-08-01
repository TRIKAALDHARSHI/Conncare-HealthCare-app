const { Configuration, OpenAIApi } = require("openai")
const config = new Configuration({
  apiKey: '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'
})

const openai = new OpenAIApi(config);

const runPromt = async () => {
  const prompt = "Tell me a joke about a cat eating a pasta"

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });

  console.log(response.data.choices[0].text)
}

runPromt()