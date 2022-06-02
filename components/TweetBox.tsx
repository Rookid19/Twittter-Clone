import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React from 'react'

function TweetBox() {
  return (
    <div>
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt=""
      />
      <div>
        <form>
          <input type="text" placeholder="What's Happening?" />
        </form>
        <div className='flex items-center'>
          <div className="flex flex-1 space-x-2 text-twitter">
            <PhotographIcon className="h-5 w-5" />
            <SearchCircleIcon className="h-5 w-5" />
            <EmojiHappyIcon className="h-5 w-5" />
            <CalendarIcon className="h-5 w-5" />
            <LocationMarkerIcon className="h-5 w-5" />
          </div>
          <button className="bg-twitter px-5 py-2 font-bold text-white rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetBox
