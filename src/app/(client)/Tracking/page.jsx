
'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Subtitle from '@/components/Subtitle'
import { useRouter } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import priceFTL from '@/db/priceFTL.json'
import 'react-awesome-slider/dist/styles.css';
import Footer from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/Button'
import InputFlotante from '@/components/InputFlotante'






function Pages() {
    const { user, introVideo, userDB, setUserProfile, setUserSuccess, nav, navItem, setuserDB, focus, setFocus, seeMore, setSeeMore } = useUser()


    const [query, setQuery] = useState('')
    const [route, setRoute] = useState('')




    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
    }, [userDB])

    console.log(userDB)
    userDB && userDB.tracking && console.log(userDB.tracking)


    return userDB && userDB.tracking && userDB.tracking[query] &&
        <div className="relative flex justify-center min-h-screen pt-[70px]">
            <img src="/airplane-bg.jpg" className='fixed top-0 w-screen h-screen  object-cover ' alt="" />

            <div className="relative  py-[100px] max-w-[960px] w-[80vw] bg-white p-[20px]  shadow-[0 4px 8px rgba(0,0,0,0.1)]">




                <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 border-b-[.5px] "  >
                    <div className='relative p-5 my-5 mt-10 bg-white space-y-5'>
                        <h5 className='text-center font-medium text-[16px]'>Informacion de Carga<br /> </h5>

                        < InputFlotante type="text" id="floating_5"  disabled={true} value={userDB.tracking[query]['data']} required label={'data'} shadow='shadow-white' />
                        < InputFlotante type="text" id="floating_5"   disabled={true} value={userDB.tracking[query]['data1']} required label={'data1'} shadow='shadow-white' />
                        < InputFlotante type="number" id="floating_5"   disabled={true} value={userDB.tracking[query]['data2']} required label={'data2'} shadow='shadow-white' />
                        < InputFlotante type="number" id="floating_5"   disabled={true} value={userDB.tracking[query]['data3']} required label={'data3'} shadow='shadow-white' />
                        < InputFlotante type="text" id="floating_5"   disabled={true} value={userDB.tracking[query]['data4']} required label={'data4'} shadow='shadow-white' />
                        < InputFlotante type="text" id="floating_5"   disabled={true} value={userDB.tracking[query]['data5']} required label={'data5'} shadow='shadow-white' />
                        < InputFlotante type="text" id="floating_5"   disabled={true} value={userDB.tracking[query]['data6']} required label={'data6'} shadow='shadow-white' />
                        < InputFlotante type="number" id="floating_5"   disabled={true} value={userDB.tracking[query]['data7']} required label={'data7'} shadow='shadow-white' />
                        < InputFlotante type="number" id="floating_5"   disabled={true} value={userDB.tracking[query]['data8']} required label={'data8'} shadow='shadow-white' />

                        <div className='flex justify-center'>
                            <Button theme="Primary" click={(e) => { saveFrontPage(e,) }}>Guardar</Button>
                        </div>
                    </div>
                </form>





            </div>
        </div>
}

export default Pages
