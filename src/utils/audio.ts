export class AudioAnalyser {
  dataArray: Uint8Array
  analyser: AnalyserNode

  constructor(audioDom: HTMLAudioElement, fftSize = 512) {
    // 创建 AudioContext
    const AudioContext = window.AudioContext
    const ctx = new AudioContext()

    // 创建 AnalyserNode
    const analyser = ctx.createAnalyser()
    analyser.fftSize = fftSize
    this.analyser = analyser

    // 设置 SourceNode
    const source = ctx.createMediaElementSource(audioDom) // 通过<audio>节点创建音频源
    source.connect(analyser) // 将音频源关联到分析器
    analyser.connect(ctx.destination) // 将分析器关联到输出设备（耳机、扬声器）

    // 获取数据
    const bufferLength = analyser.frequencyBinCount
    this.dataArray = new Uint8Array(bufferLength)
    // analyser.getByteFrequencyData(this.dataArray);
  }

  getAudioData() {
    this.analyser.getByteFrequencyData(this.dataArray)
    // let max = this.dataArray.reduce((pre,cur)=>{
    //   return cur > pre ? cur : pre
    // },-Infinity)
    // console.log(max);
    // console.log(this.dataArray.length);
    
    return this.dataArray
  }
}
