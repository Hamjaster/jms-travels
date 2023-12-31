import React from 'react'
import Navbar from './Navbar'


export default function Hero() {
    return (

        <section class="">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- Navbar --> */}

            {/* <!-- Jumbotron --> */}
            <div style={{
                backgroundImage: 'url(./three.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }} class="relative h-screen overflow-hidden bg-cover bg-no-repeat">
                {/* <div className="bg-image h-screen w-screen">
                    <img className='w-full h-full' src="https://mdbcdn.b-cdn.net/img/new/slides/146.webp" alt="" srcset="" />
                </div> */}
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1 class="mt-2 mb-8 text-4xl font-bold  md:text-5xl xl:text-6xl tracking-tight">
                                Every <span className={`italic`}>Adventure</span>  starts here
                            </h1>
                            <button type="button"
                                class="rounded border-2 border-neutral-50  px-[34px] sm:px-[46px]  pt-[10px] sm:pt-[14px]  pb-[8px] sm:pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                                data-te-ripple-init data-te-ripple-color="light">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Jumbotron --> */}
        </section>

    )
}
