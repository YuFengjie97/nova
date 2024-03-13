export function initAudioAnalyser(src: string, fftSize = 512) {
  const audio = document.createElement('audio')
  audio.src = src

  function getAnalyser() {
    const audioCtx = new window.AudioContext ()
    const source = audioCtx.createMediaElementSource(audio)
    const analyser = audioCtx.createAnalyser()
    analyser.fftSize = fftSize
    source.connect(analyser)
    source.connect(audioCtx.destination)
    // const bufferLength = fftSize
    // const dataArray = new Float32Array(bufferLength)
    // analyser.getByteTimeDomainData(dataArray)
    return { analyser }
  }

  return { audio, getAnalyser }
}
