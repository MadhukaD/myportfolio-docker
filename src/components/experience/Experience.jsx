import React from 'react'
import './experience.css'
import {FaDocker} from 'react-icons/fa'
import {SiKubernetes} from 'react-icons/si'
import {SiTerraform} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'
import {TbBrandGolang} from 'react-icons/tb'
import {SiGitlab} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiUbuntu} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiSqlite} from 'react-icons/si'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>DevOps</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaDocker className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiKubernetes className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTerraform className='experience__details-icon'/>
              <div>
                <h4>Terraform</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAws className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsGit className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandGolang className='experience__details-icon'/>
              <div>
                <h4>Golang</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGitlab className='experience__details-icon'/>
              <div>
                <h4>GitLab</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Web Development & Other</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiUbuntu className='experience__details-icon'/>
              <div>
                <h4>Ubuntu</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article><article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiSqlite className='experience__details-icon'/>
              <div>
                <h4>SQLite</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience