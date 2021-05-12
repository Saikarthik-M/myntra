import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white sticky-top">
      <a class="navbar-brand" href="">
        <img
          src="https://imgeng.jagran.com/images/2021/jan/Myntra-805x530-1-700x4611611985286383.jpg"
          alt="Mynta"
          class="coco mr-5"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto flex-grow-1">
          <li class="nav-item ">
            <a class="nav-link mr-2" href="#">
              MEN
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              WOMEN
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              KIDS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              HOME & LIVING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-2" href="#">
              BEAUTY
            </a>
          </li>
        </ul>

        <div class="form-group has-search flex-grow-1">
          <span class="material-icons form-control-feedback">search</span>
          <input
            type="text"
            class="form-control"
            placeholder="Search for Products Branda and More"
          />
        </div>
        <div class="row">
          <div class="col-2">
            <span class="material-icons">perm_identity</span>
            <small>Profile</small>
          </div>
          <div class="col-2">
            <span class="material-icons">favorite_border</span>
            <small>Wishlist</small>
          </div>
          <div class="col-2">
            <span class="material-icons">shopping_bag</span>
            <small>Bag</small>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
