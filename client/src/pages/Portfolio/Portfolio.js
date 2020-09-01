import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
import ProjectCard from '../../components/ProjectCard/projectcard'
import './portfolio.css'

export default function Portfolio() {
    return (
        <>
        <HeroSm header="Portfolio"/>
        <div className="buffer"></div>
        <div className="row justify-content-center row-margin">
            <ProjectCard imgsrc='./images/mixme.png' project="MixMe" role="My role: Front End Developer" summary="MixMe is an interactive platform that uses JavaScript and API calls to allow users to browse their favorite cocktails, search cocktail recipes by ingredient, play an interactive game to learn about their favorite cocktails, and find bars in their local area that serve those cocktails. Input your favorite ingredients and discover your new favorite cocktails!" githublink="https://github.com/VinAVarghese/ProjectMixMe" deployedlink="https://vinavarghese.github.io/ProjectMixMe/" />
            <ProjectCard imgsrc='./images/flipit.png' project="FlipIt" role="My role: Front End Developer / Project Manager" summary="
            FlipIt uses handlebars to create the front end, along with MySQL/Sequelize to create a robust application that allows users to create, edit and review flashcards to study. We wanted to build a stylish app for building knowledge using flashcards, a highly effective study tool. After creating an account, users will receive a welcome email in their inbox with a message containing a link to the deployed site where they can begin the FlipIt experience." githublink="https://github.com/AychDubya/Flipit" deployedlink="https://flipitstudy.herokuapp.com/" />
            <ProjectCard imgsrc='./images/gathernow.png' project="GatherNow" summary="GatherNow is a tool for making impromptu, last-minute plans. The app uses React.js front end, along with MySQL to create a robust, full MERN application. Users create, edit, and delete events that others are able to view see. GatherNow is perfect for those looking for something to do without much planning!" githublink="https://github.com/VinAVarghese/ProjectMixMe" deployedlink="https://github.com/AychDubya/gathernowfrontend" />
            <ProjectCard imgsrc='./images/notetaker.png' project="Note Taker" summary="This app uses express for a full CRUD notepad application. Users can write notes, save them, edit them, and delete them in order to keep themselves fully organized." githublink="https://github.com/mlshenk/note-taker" deployedlink="https://immense-wildwood-31558.herokuapp.com/" />
            <ProjectCard imgsrc='./images/workdayplan.png' project="Work Day Scheduler" summary="This is daily workday planner app for users with busy, full schedules to help them keep appointments organized. The app uses jQuery and moment.js to create an interactive scheduling planner for one business day." 
            githublink="https://github.com/mlshenk/interactive-day-planner" deployedlink="https://mlshenk.github.io/interactive-day-planner/"/>
            <ProjectCard imgsrc='./images/passwordgen.png' project="Password Generator" summary="This is a simple password generator that uses JavaScript prompts to recieve user input on password preferences and generate a random password that meets desired criteria." githublink="https://github.com/mlshenk/Password-generator" deployedlink="https://mlshenk.github.io/Password-generator/" />
        </div>

        </>
    )
}
