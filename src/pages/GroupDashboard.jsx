import React from 'react';

import "./GroupDashboard.css";

import {GroupCard} from "./components/GroupCard";
import {CardPost} from "./components/CardPost";

export const GroupDashboard = () => {
  return (
    <div className = "group__dashboard">
        {/*upper image*/}
        <img className = "group__upper_image" src = "https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />


        <div className = "main__part">

            {/*group image and connections*/}
            <div className = "left__part">
                <img className = "group__main_image" src = "https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                <div className = "connections__part">
                    <div className = "connections__content">

                        <h3>Connections</h3>
                        <GroupCard 
                            image = "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name = "Mimics"
                            description = "Group of professional cybersecurity specialists who share knowledge"
                        />
                        <GroupCard 
                            image = "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name = "Mimics"
                            description = "Group of professional cybersecurity specialists who share knowledge"
                        />
                        <GroupCard 
                            image = "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name = "Mimics"
                            description = "Group of professional cybersecurity specialists who share knowledge"
                        />
                        <GroupCard 
                            image = "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name = "Mimics"
                            description = "Group of professional cybersecurity specialists who share knowledge"
                        />
                    </div>
                </div>
            </div>


            {/*group name, info, button, description, posts*/}
            <div className = "middle__part">
                <div className = "group__upper_description">

                    <div className = "group__upper_description_element">
                        <h1>Mimics</h1>
                    </div>

                    <div className = "group__upper_description_element">
                        <p>Number of users: </p>
                        <p>12.006</p>
                    </div>

                    <div className = "group__upper_description_element">
                        <p>Date of creation: </p>
                        <p>2023.05.17</p>
                    </div>

                    <div className = "group__upper_description_button">
                        <a href = "" className = "group__upper_description_button">Join</a>
                    </div>

                </div>

                <div className = "group__upper_description_hash_tags">
                    <p>#cybersecurity</p>
                    <p>#MITR</p>
                    <p>#web</p>
                    <p>#database</p>
                </div>

                <div className = "group__main_description">
                    <p>
                    “Whatever it is you’re interested in, you can follow and connect 
                    directly with your favorite creators and others who love the same 
                    things – or build a loyal following of your own to share your ideas, 
                    opinions and creativity with the world,” the promotional text says.
                    </p>
                </div>

                <div className = "group__posts_list">
                    <CardPost 
                        header = "Post name"
                        content = "Musk’s moderation decisions, including lifting bans on far-right accounts, and the site’s increasing instability has been a turn-off for advertisers, who have paused or reduced spending in the past few months."
                        hashtags = "#cybersecurity #MITR #web #database"
                        image = "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardPost 
                        header = "Post name"
                        content = "Musk’s moderation decisions, including lifting bans on far-right accounts, and the site’s increasing instability has been a turn-off for advertisers, who have paused or reduced spending in the past few months."
                        hashtags = "#cybersecurity #MITR #web #database"
                        image = "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardPost 
                        header = "Post name"
                        content = "Musk’s moderation decisions, including lifting bans on far-right accounts, and the site’s increasing instability has been a turn-off for advertisers, who have paused or reduced spending in the past few months."
                        hashtags = "#cybersecurity #MITR #web #database"
                        image = "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
            </div>


            {/*members list, saved posts, recommendations*/}
            <div className = "right__part">
                <div className = "list__of_members_box">
                    <div className = "list__of_members_content">
                        <h3>List of members</h3>
                    </div>
                </div>

                <div className = "saved__posts_box">
                    <div className = "saved__posts_content">
                        <h3>Saved posts</h3>
                    </div>
                </div>

                <div className = "recommendations__group_box">
                    <div className = "recommendations__group_content">
                        <h3>Saved posts</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default GroupDashboard