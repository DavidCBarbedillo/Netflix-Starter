import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Logo } from "../images/Netflix";
import {
  ConnectButton,
  Icon,
  TabList,
  Tab,
  Button,
  PlanCard,
  NFT,
  Card,
  CryptoCards,
  NFTBalance,
  Modal,
  useNotification,
} from "web3uikit";
import { movies } from "../helpers/library";
//import { getCollectionsByChain, networkCollections } from "../helpers/collections";
import { useState } from "react";
import { useMoralis } from "react-moralis";
 
 
const Home = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();
  const { isAuthenticated, Moralis, account } = useMoralis();
  const [myMovies, setMyMovies] = useState();
 
  //const { NFT, PlanCard} = useEffect;
 
  useEffect(() => {
    async function fetchMyList() {
         await Moralis.start({
         serverUrl: "https://if2xxpzacmpo.usemoralis.com:2053/server",
         appId: "M63Svb49HZGjjHfN12sIt3IXcMEKKK3KZri2Tcli",
       }); //if getting errors add this
       console.log(account)
      const theList = await Moralis.Cloud.run("getMyList",{addrs: account})
      const filterA = movies.filter(function (e) {
        return theList.indexOf(e.Name) > -1;
      })
      setMyMovies(filterA)  
    }
    if(isAuthenticated) {
      fetchMyList();  
    }
    console.log(isAuthenticated);    
  },[account, Moralis, isAuthenticated])
 
 
  const dispatch = useNotification();
 
  const handleNewNotification = () => {
    dispatch({
      type: "error",
      message: "Pleaser Connect Your Crypto Wallet",
      title: "Not Authenticated",
      position: "topL",
    });
  };
 
  const handleAddNotification = () => {
    dispatch({
      type: "success",
      message: "Movie Added to List",
      title: "Success",
      position: "topL",
    });
  };
 
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="#ffffff" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}>
            <div className="scene">
              <img src={movies[0].Scene} className="sceneImg" alt=""></img>
              <img className="sceneLogo" src={movies[0].Logo} alt=""></img>
              <p className="sceneDesc">{movies[0].Description}</p>
              <div className="playButton">
                <Button
                  icon="chevronRightX2"
                  text="Play"
                  theme="secondary"
                  type="button"
                />
                <Button icon="plus" text="Add to my list" theme="translucent" type="button" onClick={async() =>{
                if (isAuthenticated) {
                  await Moralis.Cloud.run("updateMyList", {
                    addrs: account,
                    newFav: movies[0].Name
                  })
                  handleAddNotification();
                } else {
                  handleNewNotification();
                }
               
              }} />
              </div>
            </div>
 
            <div className="title">Movies</div>
            <div className="thumbs">
              {movies &&
                movies.map((e, i) => {
                  return (
                    <img
                      src={e.Thumnbnail}
                      className="thumbnail" alt="" key={i}
                      onClick={() => {
                        setSelectedFilm(e);
                        setVisible(true);
                      }}
                    ></img>
                  );
                })}
            </div>
            <div className="scene">
              <img src={"https://i.imgur.com/1O9dqkq.jpg"}></img>  
            </div>
 
            <div className="title">Buy NFTs</div>
            <div className="thumbs">
              {movies &&
                movies.map((e, i) => {
                  return (
                    <img
                      src={"https://i.imgur.com/hIVW5Bb.png"}
                      className="thumbnail" alt="" key={i}
                      onClick={() => {
                       
                        //getCollectionsByChain();
                        //setSelectedFilm(e);
                        setVisible(true);
                      }}
                    ></img>
                  );
                })}
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"NFTs"}>
            <div className="scene">
              <img src={"https://i.imgur.com/2zp1YO2.jpg"}></img>  
            </div>
 
            <div className="title">Buy NFTs</div>
            <div className="thumbs">
              {movies &&
                movies.map((e, i) => {
                  return (
                    <img
                      src={"https://i.imgur.com/hIVW5Bb.png"}
                      className="thumbnail" alt="" key={i}
                      onClick={() => {
                       
                        //getCollectionsByChain();
                        //setSelectedFilm(e);
                        setVisible(true);
                      }}
                    ></img>
                  );
                })}
            </div>
          </Tab>
          <Tab tabKey={3} tabName={"MyList"}>
            <div className="ownListContent">
              <div className="title">Your Library</div>
              {myMovies && isAuthenticated ? (
                <>
                  <div className="ownThumbs">
                    {
                      myMovies.map((e,i) => {
                        return (
                          <img
                            src={e.Thumnbnail}
                            className="thumbnail" alt="" key={i}
                            onClick={() => {
                              setSelectedFilm(e);
                              setVisible(true);
                            }}
                          ></img>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div className="ownThumbs">
                  You need to Authenicate TO View Your Own list
                </div>
              )}
            </div>
          </Tab>
        </TabList>
        {selectedFilm && (
          <div className="modal">
            <Modal
              onCloseButtonPressed={() => setVisible(false)}
              isVisible={visible}
              hasFooter={false}
              width="1000px"
            >
              <div className="modalContent">
                <img src={selectedFilm.Scene} className="modalImg" alt=""></img>
                <img className="modalLogo" src={selectedFilm.Logo} alt=""></img>
                <div className="modalPlayButton">
                  {isAuthenticated ? (
                    <>
                      <Link to="/player" state={selectedFilm.Movie}>
                        <Button
                          icon="chevronRightX2"
                          text="Play"
                          theme="secondary"
                          type="button"
                        />
                      </Link>
                      <Button
                        icon="plus"
                        text="Add to My List"
                        theme="translucent"
                        type="button"
                        onClick={async () => {
                          await Moralis.Cloud.run("updateMyList", {
                            addrs: account,
                            newFav: selectedFilm.Name,
                          });
                          handleAddNotification();
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        icon="chevronRightX2"
                        text="Play"
                        theme="secondary"
                        type="button"
                        onClick={handleNewNotification}
                      />
                      <Button
                        icon="plus"
                        text="Add to My List"
                        theme="translucent"
                        type="button"
                        onClick={handleNewNotification}
                      />
                      <Button
                        icon="arrowCircleLeft"
                        text="back"
                        theme="translucent"
                        type="button"
                        onClick={"/"}
                        size={40}
                      />
                    </>
                  )}
                </div>
                <div className="movieInfo">
                  <div className="description">
                    <div className="details">
                      <span>{selectedFilm.Year}</span>
                      <span>{selectedFilm.Duration}</span>
                    </div>
                    {selectedFilm.Description}
                  </div>
                  <div className="detailedInfo">
                    Genre:
                    <span className="deets">{selectedFilm.Genre}</span>
                    <br />
                    Actors:
                    <span className="deets">{selectedFilm.Actors}</span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};
 
export default Home;

