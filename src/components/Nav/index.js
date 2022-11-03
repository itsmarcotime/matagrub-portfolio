import React from "react";

function Nav() {

    const categories = [
        {name: "work", description: "links to other project I have worked on"},
        {name: "resume", description: "link to my resume in case you are curious"},
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    };

    return (
        <header>
            {/* here needs animated pictures(think of credits type of animation) to make page look busy could fit 
            into an h2 and placed about the nav */}
            <nav>
                <ul className="flex-row">

                    <li className="mx-2">
                        <a data-testid="home" href="/">
                            Home
                        </a>
                    </li>

                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About
                        </a>
                    </li>

                    {categories.map((category) => (
                        <li
                          className="mx-1"
                          key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>  
                    ))}

                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>

            {/* here needs icon or logo image */}
        </header>
    )
}

export default Nav;