import React from 'react'
import {  useQuery } from 'react-query'
import '../App.css'
const Apod = () => {
    const d = new Date()
    const dateString = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    console.log({dateString});
    // const [date, setDate] = React.useState(false)
    const [dateValue, setDateValue] = React.useState(dateString)
    const { isLoading, error, data, refetch } = useQuery('apodData', () =>
    fetch(`http://localhost:8000/apod/${dateValue}`).then(res =>
      res.json()
    )
  )
//   if (isLoading) return 'Loading...'
   
     if (error) return 'An error has occurred: ' + error.message

    const handleDate = async(e) => {
      await setDateValue(e.target.value)
      refetch()
    }
    console.log({dateValue, data});
    return ( isLoading ? <div className="flex items-center justify-center h-screen">
        <div class="bouncer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>:
        <div className="relative px-2 py-5 font-serif text-center text-gray-900 bg-gray-100">
        <div className="text-2.5xl font-semibold">Astronomy Picture of the Day</div>
        <form className="fixed top-6 right-3" action="">
          <input type="date" id="start" onChange={handleDate} className="px-2 text-xl rounded py bg-gradient-to-r from-green-400 to-blue-500 " name="trip-start"
         value={dateValue}
         min="2021-01-01" max={dateString}/>
        </form>
        <div className="pt-4 pb-3 text-sm"><span className="inline-block text-blue-800 underline"> Discover the cosmos!</span> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</div>
        <div className="flex flex-col items-center">
          <div className="text-sm">{data.date}</div>
          <div className="">
          <img src={data.url} alt="The Seven sisters star cluster"/>
          </div>
          <div className="py-4 text-sm font-semibold leading-tight tracking-tight">
            <div className="">{data.title}</div>
            <div className="">Image Credit &  <span className="text-blue-800 underline ">Copyright:<span className="px-1 font-normal">{data.copyright}</span></span></div>
          </div>
        </div>
        <div className="text-sm leading-tight tracking-tight text-left"><span className="font-semibold">Explanation</span>: {data.explanation}</div>
        <div className="py-4 text-sm font-semibold leading-tight tracking-tight">
          <div className="">Volunteer Opportunity: <span className="font-normal text-blue-800 underline">Someone to Update APOD's RSS Feed</span></div>
          <div className="">Tomorrow's picture: <span className="font-light text-gray-800">shadow play</span></div>
        </div>
        <div className="flex items-center justify-center py-2 text-sm text-blue-800 underline border-t-2 border-b-2 border-gray-300 divide-x divide-gray-500">
          <div className="px-1">&le;</div>
          <div className="px-1"><a href="/">Archive</a></div>
          <div className="px-1"><a href="/">Submissions</a></div>
          <div className="px-1"><a href="/">Index</a></div>
          <div className="px-1"><a href="/">Search</a></div>
          <div className="px-1"><a href="/">Calender</a></div>
          <div className="px-1"><a href="/">RSS</a></div>
          <div className="px-1"><a href="/">Education</a></div>
          <div className="px-1"><a href="/">About APOD</a></div>
          <div className="px-1"><a href="/">Discuss</a></div>
          <div className="px-1">&ge;</div>
        </div>
        <div className="pt-4 text-sm font-semibold">
          <div className="">Authors & editors: <span className="text-blue-800 underline">Robert Nemiroff & Jerry Bonnell</span></div>
          <div className="">NASA Official: <span className="text-blue-800 underline"></span></div>
          <div className="text-blue-800 underline"><a href="/">NASA Web Privacy Policy and Important Notices</a></div>
          <div className="">A Service of: <span className="text-blue-800 underline">ASD at NASA/GSFC</span></div>
          <div className="">& <span className="text-blue-800 underline">Michigan Tech U</span></div>
        </div>
      </div>
    )
}

export default Apod
