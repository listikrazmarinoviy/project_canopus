import React from 'react'

import "./PersonalAccountPage.css"

import {SearchBar} from "../components/SearchBar";
import {Card} from "../components/Card";


const PersonalAccountPage = () => {
  return (
    <div className = "main__part">

        {/*search bar*/}
        <div className = "search__bar">
            <SearchBar />
        </div>

        <div className = "main__top_part">

            {/*map part*/}            
            <div className = "the__map">
                <p>test</p>
            </div>

            {/*news part*/}
            <div className = "the__news">
                <div className = "news__box">
                    <p>test</p>
                </div>
                <div className = "news__box">
                    <p>test</p>
                </div>
                <div className = "news__box">
                    <p>test</p>
                </div>
                <div className = "news__box">
                    <p>test</p>
                </div>
            </div>

            {/*activities part*/}
            <div className = "the__activities">
                <div className = "activity__box">
                    <p>test</p>
                </div>
                <div className = "activity__box">
                    <p>test</p>
                </div>
            </div>

        </div>

        
        {/*the middle part with groups*/}
        <div className = "main__middle_part">

            <div className = "small__group_box">
                <p>test</p>
            </div>
            <div className = "small__group_box">
                <p>test</p>
            </div>
            <div className = "small__group_box">
                <p>test</p>
            </div>
            <div className = "small__group_box">
                <p>test</p>
            </div>
            <div className = "small__group_box">
                <p>test</p>
            </div>

        </div>


        {/*the bottom part with tools and learning paths*/}
        <div className = "main__bottom_part">

            <div className = "favorite__tools">

                <div className = "sections__title">
                    <p>Favorite tools</p>
                </div>
                
                <div className = "tools__list">
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>

            <div className = "learning__paths">

                <div className = "sections__title">
                    <p>Learning paths</p>
                </div>

                <div className = "learning__path_box">
                    <p>test</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PersonalAccountPage