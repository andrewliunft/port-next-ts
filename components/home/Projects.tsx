'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    projects: object[];
    title: string;
}

export default function Projects({ projects = [], title = "My Projects" }: Props) {

    const getYear = () => 
    {
        const yearStart = 2018
        const currentYear = new Date().getFullYear()
        return currentYear - yearStart
    }

    return (
        <div className="projects-section">
            <div className="projects-desc">
                <h2 className="subtitle">{title}</h2>
                <p>Work that I’ve done for the past {getYear()} years</p>
            </div>
           
            <Swiper
                slides-per-view="1"
            >
                { projects.map(({id, name, image, tags}: any) => 
                    <SwiperSlide key={ id } className="swipper-slide">
                        <div className='swipper-image-wrap'>
                            <Image 
                                src={image}
                                width={1000}
                                height={1000}
                                alt={`${name} Logo`}
                                className='swipper-image'
                            />
                        </div>
                        
                        <div className="swipper-content">
                            <p>{name}</p>
                            { tags.map((value: string, index: any) =>
                                <span key={index}>{value}</span>
                            )}
                        </div>
                    </SwiperSlide>
                ) }
            </Swiper>
        </div>
    )
}
