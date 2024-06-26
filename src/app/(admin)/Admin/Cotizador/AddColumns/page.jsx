'use client';
import { useUser } from '@/context/Context'
import { useEffect, useState } from 'react'
import { onAuth, signInWithEmail, writeUserData, removeData } from '@/firebase/utils'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal'
import InputFlotante from '@/components/InputFlotante'
import { generateUUID } from '@/utils/UIDgenerator'

export default function Home() {

    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG, item, cliente, setCliente, cart, setCart, modal, setModal } = useUser()
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [data3, setData3] = useState({})
    const [data4, setData4] = useState({})


    function handlerOnChange(e, key) {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    // -------------------------------------------
    function handlerLess2(d) {
        if (d === 'd2') {
            let db = { ...data2 };
            delete db[`item${data2 !== undefined && Object.keys(data2).length - 1}`];
            return setData2(db)
        }
        if (d === 'd3') {
            let db = { ...data3 };
            delete db[`item${data3 !== undefined && Object.keys(data3).length - 1}`];
            return setData3(db)
        }
        if (d === 'd4') {
            let db = { ...data4 };
            delete db[`item${data4 !== undefined && Object.keys(data4).length - 1}`];
            return setData4(db)
        }
    }

    function onChangeHandler2(e, index) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.value } })
    }
    function saveEspecificaciones(e) {
        e.preventDefault()
        setUserSuccess('Cargando')
        writeUserData(`/Cliente/${query}/tarjetas/${route}/especificaciones`, data2, setUserSuccess)
    }




    function saveFrontPage(e, route) {
        e.preventDefault()
        let key = generateUUID()
        setUserSuccess('Cargando')
        writeUserData(`${route}/${key}`, data, setUserSuccess)
    }
    function saveColumns(e, route, db) {
        e.preventDefault()
        let key = generateUUID()
        setUserSuccess('Cargando')
        writeUserData(`${route}/${key}`, db, setUserSuccess)
    }

    function close(e) {
        router.back()
    }
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
    }, [cliente])
    return (
        <div className="min-h-full">
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen  object-cover  ' alt="" />
            <div className="fixed h-screen top-0 left-0 flex justify-center px-10 w-full min-h-screen pt-[70px] bg-[#000000b4] p-0 z-40 " >
                <div className="relative max-h-full overflow-auto w-full  bg-white border-b  pt-16 pb-16 lg:pb-4 px-5">
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                    <div className='relative inline-block '>
                    <table className="relative text-[12px]  text-left  text-gray-500 ">
                        <thead className="realative top-0 text-xs text-gray-700 uppercase    ">
                            <tr className="  border-y  border border-y-[#a0a0a0] ">
                                <th colspan={"100"} scope="colgroup" className="text-[12px]  text-center font-bold px-6 py-3">
                                    <div className="w-full flex justify-start">
                                        <button type='button' className="bg-red-500 text-white font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2('d2')}>
                                            -
                                        </button>
                                        <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData2({ ...data2, [`item${data2 !== undefined && Object.keys(data2).length}`]: { ic: '', ip: '' } })} >
                                            +
                                        </button>
                                    </div>
                                    FLETE
                                </th>
                            </tr>
                            <tr className="  border-y  border border-y-[#a0a0a0] " >
                                {data2 && data2 !== undefined && Object.values(data2).map((i, index) => {
                                    return <th scope="col" className="text-[12px] text-center font-bold px-6 py-4" >
                                        <input type="text" name={`ip`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data2[`item${index}`][`ip`]} />
                                    </th>
                                })
                                }
                            </tr>
                        </thead>
                        <tbody className='space-y-5'>
                            <tr className="bg-white border-b  hover:bg-gray-50 border border-b-[#a0a0a0] " >

                                {data2 && data2 !== undefined && Object.values(data2).map((i, index) => {
                                    return <td className="text-[12px] text-center font-bold px-6 py-4">
                                        <input type="text" name={`ic`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data2[`item${index}`][`ic`]} />
                                    </td>
                                })
                                }
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <Button theme="Primary" click={(e) => { saveColumns(e, `Cliente/price${query}/recargos origen`, data4) }}>Guardar</Button>
                    </div>
                    </div>
                    <br /><br />
                    <div className='relative inline-block '>
                    <table className="relative text-[12px]  text-left  text-gray-500 ">
                        <thead className="realative top-0 text-xs text-gray-700 uppercase    ">
                            <tr className="  border-y  border border-y-[#a0a0a0] ">
                                <th colspan="100" scope="colgroup" className="text-[12px] text-center font-bold px-6 py-3">
                                    <div className="w-full flex justify-start">
                                        <button type='button' className="bg-red-500 text-white font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2('d3')}>
                                            -
                                        </button>
                                        <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData3({ ...data3, [`item${data3 !== undefined && Object.keys(data3).length}`]: { ic: '', ip: '' } })} >
                                            +
                                        </button>
                                    </div>
                                    RECARGOS DE DESTINO
                                </th>
                            </tr>
                            <tr className="  border-y  border border-y-[#a0a0a0] " >
                                {data3 && data3 !== undefined && Object.values(data3).map((i, index) => {
                                    return <th scope="col" className="text-[12px] text-center font-bold px-6 py-4">
                                        <input type="text" name={`ip`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data3[`item${index}`][`ip`]} />
                                    </th>
                                })
                                }
                            </tr>
                        </thead>
                        <tbody className='space-y-5'>
                            <tr className="bg-white border-b  hover:bg-gray-50 border border-b-[#a0a0a0] " >
                                {data3 && data3 !== undefined && Object.values(data3).map((i, index) => {
                                    return <td className="text-[12px] text-center font-bold px-6 py-4">
                                        <input type="text" name={`ic`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data3[`item${index}`][`ic`]} />
                                    </td>
                                })
                                }

                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <Button theme="Primary" click={(e) => { saveColumns(e, `Cliente/price${query}/recargos origen`, data4) }}>Guardar</Button>
                    </div>
                    </div>
                    <br /><br />
                    <div className='relative inline-block '>
                        <table className="relative text-[12px]  text-left  text-gray-500 ">
                            <thead className="realative top-0 text-xs text-gray-700 uppercase    ">
                                <tr className="  border-y  border border-y-[#a0a0a0] ">
                                    <th colspan="100" scope="colgroup" className="text-[12px] text-center font-bold px-6 py-3">
                                        <div className="w-full flex justify-start">
                                            <button type='button' className="bg-red-500 text-white flex font-bold py-2 px-4 rounded-l" onClick={() => handlerLess2('d4')}>
                                                -
                                            </button>
                                            <button type='button' className="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData4({ ...data4, [`item${data4 !== undefined && Object.keys(data4).length}`]: { ic: '', ip: '' } })} >
                                                +
                                            </button>
                                        </div>
                                        RECARGOS DE ORIGEN
                                    </th>
                                </tr>
                                <tr className="  border-y  border border-y-[#a0a0a0] " >
                                    {data4 && data4 !== undefined && Object.values(data4).map((i, index) => {
                                        return <th scope="col" className="text-[12px] text-center font-bold px-6 py-4">
                                            <input type="text" name={`ip`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data4[`item${index}`][`ip`]} />
                                        </th>
                                    })
                                    }
                                </tr>
                            </thead>
                            <tbody className='space-y-5'>
                                <tr className="bg-white border-b  hover:bg-gray-50 border border-b-[#a0a0a0] " >
                                    {data4 && data4 !== undefined && Object.values(data4).map((i, index) => {
                                        return <td className="text-[12px] text-center font-bold px-6 py-4">
                                            <input type="text" name={`ic`} onChange={(e) => onChangeHandler2(e, index)} className="block rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[12px] sm:leading-6" defaultValue={data4[`item${index}`][`ic`]} />
                                        </td>
                                    })
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <div className="w-full mt-6 flex items-center justify-center gap-x-6">
                            <Button theme="Primary" click={(e) => { saveColumns(e, `Cliente/price${query}/recargos origen`, data4) }}>Guardar</Button>
                        </div>

                    </div>

                </div>
            </div>
            {success === 'Cargando' && <Loader>ghfhfhj</Loader>}
        </div>
    )
}
