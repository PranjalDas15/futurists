import React from 'react'
import { assets, heroSection } from '../../../assets/assets'

const DataTab = () => {
    const images = [
        { img: assets.hero1, name: "hero1" },
        { img: assets.hero2, name: "hero2" },
        { img: assets.hero3, name: "hero3" },
    ]
    return (
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <div className='flex -gap-2'>
                    {images.map((i, index) => (
                        <div key={index} className={`size-[50px] shrink-0 overflow-hidden rounded-full border-4 border-sky-500 ${index !== 0 ? "-ml-3" : ""
                            }`}>
                            <img src={i.img} alt={i.name} className='object-contain' />
                        </div>
                    ))}
                </div>
                <p className='text-[20px]'>{heroSection.hero1}</p>
            </div>

            <div className='w-[40%] flex items-center justify-evenly gap-5 '>
                {heroSection.heroData.map((hd, index) => (
                    <div key={index} className='text-center space-y-2'>
                        <div className='flex gap-1 text-[60px] font-bold leading-[60px]'><h2 className=''>{hd.data}</h2><p>+</p></div>
                        <p className='text-[18px]'>{hd.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataTab