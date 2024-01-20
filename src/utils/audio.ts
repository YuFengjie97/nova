export class AudioAnalyser {
  dataArray: Uint8Array
  analyser: AnalyserNode
  source: MediaElementAudioSourceNode | null
  ctx: AudioContext
  audioDom: HTMLAudioElement
  fftSize: number

  constructor(audioDom: HTMLAudioElement, fftSize = 512) {
    // 创建 AudioContext
    const AudioContext = window.AudioContext
    this.fftSize = fftSize
    this.ctx = new AudioContext()
    this.source = null
    this.audioDom = audioDom
    // 创建 AnalyserNode
    this.analyser = this.ctx.createAnalyser()
    this.analyser.fftSize = fftSize

    this.updateSource()

    // 初始化数据源
    const bufferLength = this.analyser.frequencyBinCount
    this.dataArray = new Uint8Array(bufferLength)
  }

  updateSource() {
    // 设置 SourceNode
    const source = this.ctx.createMediaElementSource(this.audioDom) // 通过<audio>节点创建音频源
    source.connect(this.analyser) // 将音频源关联到分析器
    this.analyser.connect(this.ctx.destination) // 将分析器关联到输出设备（耳机、扬声器）
  }

  getAudioData() {
    this.analyser.getByteFrequencyData(this.dataArray)

    return this.dataArray
  }
}
