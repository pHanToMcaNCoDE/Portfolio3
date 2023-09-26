import React from 'react'

const Skeleton = () => {
  return (
    <div className='w-full md:h-[103vh] lg:h-[108vh] bg-neutral-950 text-white'>

        <div className='max-w-[1300px] p-4 pt-[12%] mx-auto'>
            <div className='mx-auto h-10 w-[5rem] col-span-1 bg-neutral-600 rounded'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2%] gap-8'>
                <div class="border border-zinc-800 bg-zinc-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div className='grid grid-cols-4 gap-4'>
                                <div class="h-2 col-span-3 bg-neutral-600 rounded"></div>
                                <div class="h-2 col-span-1 bg-neutral-600 rounded"></div>
                            </div>
                                <div class="h-10 col-span-1 bg-neutral-600 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-neutral-600 rounded col-span-3"></div> 
                                    <div class="h-2 bg-neutral-600 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-zinc-800 bg-zinc-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div className='grid grid-cols-4 gap-4'>
                                <div class="h-2 col-span-3 bg-neutral-600 rounded"></div>
                                <div class="h-2 col-span-1 bg-neutral-600 rounded"></div>
                            </div>
                                <div class="h-10 col-span-1 bg-neutral-600 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-neutral-600 rounded col-span-3"></div> 
                                    <div class="h-2 bg-neutral-600 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-zinc-800 bg-zinc-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div className='grid grid-cols-4 gap-4'>
                                <div class="h-2 col-span-3 bg-neutral-600 rounded"></div>
                                <div class="h-2 col-span-1 bg-neutral-600 rounded"></div>
                            </div>
                                <div class="h-10 col-span-1 bg-neutral-600 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-neutral-600 rounded col-span-3"></div> 
                                    <div class="h-2 bg-neutral-600 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-zinc-800 bg-zinc-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div className='grid grid-cols-4 gap-4'>
                                <div class="h-2 col-span-3 bg-neutral-600 rounded"></div>
                                <div class="h-2 col-span-1 bg-neutral-600 rounded"></div>
                            </div>
                                <div class="h-10 col-span-1 bg-neutral-600 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-neutral-600 rounded col-span-3"></div> 
                                    <div class="h-2 bg-neutral-600 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-zinc-800 bg-zinc-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div className='grid grid-cols-4 gap-4'>
                                <div class="h-2 col-span-3 bg-neutral-600 rounded"></div>
                                <div class="h-2 col-span-1 bg-neutral-600 rounded"></div>
                            </div>
                                <div class="h-10 col-span-1 bg-neutral-600 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-4 gap-4">
                                    <div class="h-2 bg-neutral-600 rounded col-span-3"></div> 
                                    <div class="h-2 bg-neutral-600 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skeleton
