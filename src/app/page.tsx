import './page.css'
import Start from '@/components/Start'
import Header from '@/components/Header'
import List from '@/components/List'
import Download from '@/components/Download'
import Interface from '@/components/Interface'

export default function Home() {
  return (
    <div className='w-96 mx-auto
                    md:w-[48rem] 
                    lg:bg-green-600 
                    xl:bg-sky-500'>
      <div className='bg-start'>
        <Header/>
        <Start/>
      </div>
      <List/>
      <div className="pai-bg-lumens">
        <div className='bg-lumens'>
          <Download/>
        </div>
      </div>
      <Interface/>
    </div>
  )
}
