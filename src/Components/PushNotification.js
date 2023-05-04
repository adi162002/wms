// //import React, { useState } from 'react'
// import {Notifications} from "react-push-notification"
// import addNotification from 'react-push-notification'


// function PushNotification() {
   
//    //const{title, subtitle, message} = props
   
//     Notifications.addNotification({
//         // title:{title},
//         // subtitle:{subtitle},
//         // message:{message},
//         title:"Warning",
//         subtitle:"Water Content",
//         message:"Water is leaking Somewhere",


//     })
  
// }

// export default PushNotification 

import React from 'react'
import { Notifications } from 'react-push-notification'
import addNotification from 'react-push-notification'
import Buttons from './Buttons'

function PushNotification() {
  const handleClick = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'Water Content',
      message: 'Water is leaking somewhere',
      native: true,
    })
  }

  return (
    <div>
      <Buttons onClick={handleClick} text="Push Notification"  ></Buttons>
      <Notifications />
    </div>
  )
}

export default PushNotification
