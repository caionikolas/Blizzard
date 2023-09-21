import Start from '@/components/Start'
import Header from '@/components/Header'
import List from '@/components/List'
import Download from '@/components/Download'

export default function Home() {
  return (
    <div className='w-96 mx-auto bg-sky-500
                    md:w-[48rem]
                    lg:bg-green-600 
                    xl:bg-sky-500'>
      <div>
        <Header/>
        <Start/>
      </div>
      <div>
        <List/>
        <Download/>
      </div>
    </div>
  )
}
