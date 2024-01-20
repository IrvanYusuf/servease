import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
// import "../../styles/pages/mitraBeranda.css";
import "../../../styles/pages/mitraBeranda.css";

const Rating = ({ rating, total, value }) => {
  return (
    <div className="d-flex align-items-center column-gap-3">
      <div className="d-flex align-items-center column-gap-1">
        <FaStar className="text-warning" />
        <span>{value}</span>
      </div>
      <div className="progress ml-2" style={{ width: "200px" }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${(total / 59) * 100}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="5"
        ></div>
      </div>
      <span className="ml-2">({total})</span>
    </div>
  );
};

const MitraBeranda = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center column-gap-4">
        <img
          src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
          alt=""
          height={"124px"}
          width={"124px"}
          className="rounded-circle"
        />
        <div>
          <h5>Agus Cleaning Jr</h5>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" /> <span>3 (4)</span>
          </div>
          <div className="mt-2 d-flex align-items-center column-gap-1">
            <FiMapPin />
            <span>Medan Petisah, Medan</span>
          </div>
        </div>
      </div>
      <ul class="nav border-bottom mt-5" id="myTab" role="tablist">
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div class="tab-content mt-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <h4>Deskripsi</h4>
          <div className="border p-3 rounded-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum maxime, animi illo tempore autem eveniet earum ipsam
              dicta vero quisquam ab voluptatem ad nesciunt quis. Harum culpa
              earum omnis veniam, pariatur, officia repellendus molestias ex vel
              soluta incidunt alias nemo corrupti tenetur optio eveniet ullam.
              Minima aliquid animi pariatur assumenda maiores eius soluta sed,
              excepturi a doloribus dolor laboriosam non, impedit dolorum fugit
              beatae deserunt. Quibusdam neque ipsum architecto ipsa, autem
              inventore. Molestiae eligendi dolorem ratione blanditiis nemo amet
              maiores quis aut. Quis atque sint quidem ratione cumque, optio
              distinctio delectus fugiat illum eligendi. Iure dolorum adipisci
              impedit quos accusamus accusantium similique quis officia, culpa
              amet voluptatibus? Quia ipsum neque, animi consectetur quo qui
              eligendi repudiandae repellendus ullam fugiat, deserunt libero
              debitis perspiciatis cumque sequi ab magnam incidunt! Asperiores,
              natus ut, error voluptate quidem harum sint nesciunt porro, veniam
              reiciendis cupiditate explicabo earum architecto ipsa numquam
              eligendi culpa et qui?
            </p>
          </div>
          <div className="mt-4">
            <h4>Galeri</h4>
            <div className="row">
              {Array.from({ length: 10 }, (v, i) => (
                <div className="col-3 p-2">
                  <img
                    src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
                    alt=""
                    className="w-100 rounded-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="row">
            <div className="col-5 pe-4">
              <div className="border">
                <h4>2 Reviews</h4>
                <Rating total={58} value={5} />
                <Rating total={1} value={4} />
                <Rating total={0} value={3} />
                <Rating total={0} value={2} />
                <Rating total={0} value={1} />
              </div>
            </div>
            <div className="col-7 ps-5">
              <div className="border border-danger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraBeranda;
