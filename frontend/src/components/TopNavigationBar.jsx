import React from "react";
import "styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { favPhotoList, topics, getTopicPhotos } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">Photo-Labs</span>
      <TopicList
        favPhotoList={favPhotoList}
        topics={topics}
        getTopicPhotos={getTopicPhotos}
      />
      <FavBadge isFavPhotoExist={favPhotoList.length > 0}/> 
    </div>
  );
};

export default TopNavigation;
