document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input-container");
  const button = document.getElementById("search-btn");
  const dictionary = document.querySelector(".dictionary");
  const partOfSpeech = document.getElementById("parts-of-speech");
  const wordTitle = document.getElementById("word-title");
  const Phonetics = document.getElementById("phonetics");
  const Audio = document.getElementById("audio");
  const Definition = document.getElementById("definition");
  const Examples = document.getElementById("examples");

  dictionary.classList.add("hidden");

  async function dictionaryFn(word) {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data[0];
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  button.addEventListener("click", createCard);

  async function createCard() {
    const data = await dictionaryFn(input.value.trim());
    if (data) {
      dictionary.classList.remove("hidden");

      console.log(data);

      let partsOfSpeech = [];
      for (let i = 0; i < data.meanings.length; i++) {
        partsOfSpeech.push(data.meanings[i].partOfSpeech);
      }

      wordTitle.innerText = `Word: ${data.word}`;
      Phonetics.innerText = data.phonetic;

      const phoneticAudio = data.phonetics.find((p) => p.audio)
        ? data.phonetics.find((p) => p.audio).audio
        : null;
      Audio.innerHTML = phoneticAudio
        ? `<audio controls src="${phoneticAudio}"></audio>`
        : "No audio available";

      Definition.innerText = data.meanings[0].definitions[0].definition;
      Examples.innerText =
        data.meanings[0].definitions[0].example || "No example available";
      partOfSpeech.innerText = partsOfSpeech.join(", ");
    } else {
      dictionary.classList.add("hidden");
    }
  }
});
