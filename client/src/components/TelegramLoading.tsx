"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loader from "../assets/load.json";

function TelegramLoading() {
  return (
      <Lottie  className=' w-full h-screen' animationData={loader} loop={true} />
  )
}

export default TelegramLoading