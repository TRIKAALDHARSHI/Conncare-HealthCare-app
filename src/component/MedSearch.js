import React from 'react'
function responseFromOpenAI() {
  let search_input = document.getElementById('search-input').value
  const { Configuration, OpenAIApi } = require("openai")
  const config = new Configuration({
    apiKey: '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'
  })

  const openai = new OpenAIApi(config);

  const runPromt = async () => {
    const prompt = `Can you please provide information about the medication that the search input value, ${search_input}, is
used for? Specifically, I would like to know what condition(s) it treats, how it works, and when it is typically
prescribed. Additionally, are there any side effects or precautions that patients should be aware of when taking this
medication?`

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2048,
      temperature: 1,
    });
    let SearchAns = document.getElementById('SearchAns')
    SearchAns.innerHTML = response.data.choices[0].text
    console.log(response.data.choices[0].text)
  }

  runPromt()
}

function MedSearch() {
  return (
    <>
      <div className='con2'><div id="SearchAns"></div></div>
      <form class="container-rogh">
        <div class="container-rogh-main-head">Search Medicine</div>
        <div class="container-rogh-main">
          <div class="container-rogh-main-search">
            <input class="container-rogh-main-search-input" type="text" id="search-input" placeholder="Search..." />
            <label class="container-rogh-main-search-file" for="file-input">
              <i class="fa-regular fa-image"></i>
            </label>
            <ul id="search-list"></ul>
          </div>
          <input class="container-rogh-main-file" id="file-input" accept="image/*" type="file" style={{
            display: "none"
          }} />
          <input class="container-rogh-main-submit" type="button" value="Submit" onClick={responseFromOpenAI} />

        </div>
      </form>
    </>
  )
}
export default MedSearch