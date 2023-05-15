import Modal from "@/components/Modal"
import Navbar from "@/components/Navbar"
import { useState } from "react"

export default function Dashboard() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Navbar />
            <nav class="bg-white border-gray-200" style={{color: "gray", fontSize: "13px"}}>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto ">نوع‌رویدادهای من<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">Sign out</a>
                        </div>
                    </div>
                    <div class="w-auto block rounded" style={{background: "#4297A0", color: "white"}}>
                        <button className=" transition duration-200 ease-in-out flex items-center justify-between w-full p-3" 
                        onClick={() => setShowModal(true)}>
                            افزودن رویداد جدید
                        </button>
                    </div>
                </div>
            </nav>
            {showModal && <Modal open={showModal} setOpen={setShowModal} />}
        </>
    )
}