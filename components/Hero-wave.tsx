import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { WavyBackground } from './ui/wavy-background'

function HeroWave() {
  return (
    <div className='pb-24 pt-40'>
        <WavyBackground className='bottom-0' colors={['#90fff1','#1de4da','#04c8c1', '#60f5cc', '#0a6465']} backgroundFill='#F7F6F6' speed='fast' waveWidth={50} blur={0} />
    </div>
  )
}

export default HeroWave