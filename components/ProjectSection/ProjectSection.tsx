"use client";

import Image, {StaticImageData} from 'next/image';
import React, { useState } from 'react';
import pimg1 from '/public/images/works/work1.webp'
import pimg2 from '/public/images/works/work2.webp'
import pimg3 from '/public/images/works/work3.webp'
import ps1img1 from '/public/images/project-single/1.jpg'
import ps1img2 from '/public/images/project-single/4.jpg'
import ps1img3 from '/public/images/project-single/5.jpg'
import psub1img1 from '/public/images/project-single/2.jpg'
import psub1img2 from '/public/images/project-single/3.jpg'

type ProjectType = {
    Id:string,
    pImg: StaticImageData,
    ps1img: StaticImageData,
    psub1img1: StaticImageData,
    psub1img2: StaticImageData,
    title:string,
    subTitle:string,
}



const ProjectSection = (props: any) => {

    const projects: ProjectType[] = [
        {
            Id:'1',
            pImg:pimg1,
            ps1img:ps1img1,
            psub1img1:psub1img1,
            psub1img2:psub1img2,
            title:'TodoList Frontend using API',
            subTitle:'React RTK MaterialUI Redux',
        },
        {
            Id:'2',
            pImg:pimg2,
            ps1img:ps1img2,
            psub1img1:psub1img1,
            psub1img2:psub1img2,
            title:'Weather APP using API',
            subTitle:'HTML, SASS, TS, React, Redux LocalStorage',
        },
        {
            Id:'3',
            pImg:pimg3,
            ps1img:ps1img3,
            psub1img1:psub1img1,
            psub1img2:psub1img2,
            title:'Social Network using reqres.in as API',
            subTitle:'React Redux, still in progress...',
        },
    ]


    const handleClickOpen = (project: ProjectType) => {
        console.log(project);
    };


    return (

        <section className="tp-project-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Projects</span>
                    <h3>Latest works</h3>
                </div>
                <div className="tp-project-wrap">
                    <div className="row">
                        {projects.map((project) => (
                            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12" key={project.Id}>
                                <div className="tp-project-item">
                                    <div className="tp-project-img" onClick={() => handleClickOpen(project)}>
                                        <Image src={project.pImg} alt="" width={300} height={400} />
                                    </div>
                                    <div className="tp-project-content">
                                        <span>{project.subTitle}</span>
                                        <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>My Projects</h1>
            </div>
        </section>
    );
}

export default ProjectSection;
