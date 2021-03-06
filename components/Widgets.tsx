import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    //widget only shows on the large screen but hides on the small screen with the help of the hidden feature in the css
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="odoomrandy"
        options={{ height: 400 }}
      />
    </div>
  )
}

export default Widgets
