import React from "react";
import RBFpic from "../../assets/images/Recipe-Beverage-Finder.png";
import ForgottenPages from "../../assets/images/https-theforgottenpages-herokuapp-com.png";
import RestaurantHelper from "../../assets/images/project-3-image.png";
import RunBuddy from "../../assets/images/run-buddy-logo.png";


function Work () {
    return (
        <section>
            <div >
                <h1 className="worktitle">My Projects 👁</h1>
            </div>
            <div className="container justify-content-center row text-center workBox">
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    Recipe & Beverage Finder
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={RBFpic}
                                        alt="recipe-beverage-finder"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        Recipe & Beverage Finder lets you search through dozens of different fun recipes
                                        and beverages. The application is composed of two parts, a search engine for recipes
                                        and a search engine for beverages. The results of the search have their own section to
                                        keep things nice & organized.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/Recipe-and-Beverage-Finder">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://itsmarcotime.github.io/Recipe-and-Beverage-Finder/">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    The Forgotten Pages
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={ForgottenPages}
                                        alt="the-forgotten-pages"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        Create your very own DnD character using the Forgotten Pages application! The
                                        user can create as many characters as needed, and will have different
                                        options to choose from when creating a character. Anyone can sign up
                                        using an email so they can keep track of all characters using the
                                        dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/ForgottenPages">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://dashboard.heroku.com/apps/shielded-journey-20589">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    Restaurant Helper
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={RestaurantHelper}
                                        alt="restaurant-helper"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        Restaurant Helper is a simple solution that can help out a 
                                        wide range of food vendors stay organized and up to date with current 
                                        orders. Whether it be a food truck that needs help staying organized, 
                                        or a small restaurant who doesn't want to spend big money on complex 
                                        software. The Restaurant Helper application is easy to use & free to 
                                        download.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/restaurantHelper">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://lit-everglades-42331.herokuapp.com/">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    Run Buddy
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={RunBuddy}
                                        alt="run-buddy"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        This was my "Hello World" application. The first project that I put together 
                                        using only HTML and CSS. Run Buddy is a website that offers amazing fitness 
                                        training services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/run-buddy">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://itsmarcotime.github.io/run-buddy/">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    Recipe & Beverage Finder 5
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={RBFpic}
                                        alt="recipe-beverage-finder"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        Recipe & Beverage Finder lets you search through dozens of different fun recipes
                                        and beverages. The application is composed of two parts, a search engine for recipes
                                        and a search engine for beverages. The results of the search have their own section to
                                        keep things nice & organized.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/Recipe-and-Beverage-Finder">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://itsmarcotime.github.io/Recipe-and-Beverage-Finder/">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 maincontainer">
                    <div className="thecard">
                        <div className="thefront">
                            <div className="container">
                                <div className="col-12 cardtitle">
                                    Recipe & Beverage Finder 6
                                </div>
                                <div className="col-12 cardimg">
                                    <img
                                        src={RBFpic}
                                        alt="recipe-beverage-finder"
                                        className=""
                                        width={250}
                                        height={100}
                                    />
                                </div>
                                <div className="col-12 cardtext">
                                    <p className="card-text">
                                        Recipe & Beverage Finder lets you search through dozens of different fun recipes
                                        and beverages. The application is composed of two parts, a search engine for recipes
                                        and a search engine for beverages. The results of the search have their own section to
                                        keep things nice & organized.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="theback">
                            <div className="container">
                                <div className="cardbutton">
                                    <form action="https://github.com/itsmarcotime/Recipe-and-Beverage-Finder">
                                        <input type="submit" value="GitHub Repo" className="formbox"/>
                                    </form>
                                </div>
                                <div className="cardbutton">
                                    <form action="https://itsmarcotime.github.io/Recipe-and-Beverage-Finder/">
                                        <input type="submit" value="Live Site" className="formbox"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;