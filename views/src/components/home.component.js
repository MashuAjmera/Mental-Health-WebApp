import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div class="bigwrapper">
        <nav>
          <ul>
            <li>
              <a href="#section-5">Home</a>
            </li>
            <li>
              <a href="#section-3">Collections</a>
            </li>
            <li>
              <a href="#section-4">Express</a>
            </li>
            <li>
              <a href="#section-2">Me</a>
            </li>
          </ul>
        </nav>
        <section>
          <div class="wrapper">
            <div class="greeting">
              <h2>Hello, Earthling</h2>
            </div>
            <div class="box1">
              <h5>let's get going</h5>
              <h2>Daily Task</h2>
              <p></p>
              <br />
              <p></p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat!
              </p>
            </div>
            <div class="box2">
              <h5>Dive into our positive content bundles</h5>
              <h2>Explore collections</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat!
              </p>
            </div>
            <div class="box2">
              <h3>box3</h3>
              <h2>Yo man</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              quo eveniet placeat. In porro, repudiandae ipsum voluptatibus
              ratione enim accusantium rem consequatur ab? Alias tenetur ratione
              quibusdam accusantium aut quis totam! Voluptas labore officiis,
              unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi
              ipsa architecto dolores dignissimos quod quibusdam quasi repellat
              vero cum perspiciatis laboriosam qui sint exercitationem quisquam.
              Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat
              nihil aliquam at ducimus consequuntur repudiandae numquam
              eligendi, fugit, excepturi doloribus!
            </div>
            <div class="box1 box4">
              <h3>It's good to be grateful</h3>
              <h2>What makes you happy?</h2>
              List 3 things!
            </div>
            <div class="box1">
              <h5>What are your interests?</h5>
              <h2>View happy recommendations</h2>
              <p></p>
              <br />
              <p></p>
            </div>
            <div>
              <div class="round">
                <h2>Movies</h2>
              </div>
              <div class="round">
                <h2>Books</h2>
              </div>
              <div class="round">
                <h2>Music</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
