const getsWeather = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  console.log(data);
  document.write(data[0].id);
  showweather(data);
};

const form = document.querySelector("form");
const search = document.querySelector("#search");
const card = document.querySelector("#card");

const getcard = async (datas) => {
  const uv = datas--;
  const url = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data[datas].id);

  console.log(data);

  showcard(data, uv);
};

const showcard = (data, uv) => {
  console.log(data[uv].id);

  card.innerHTML = ` <div class="card-image">
  <img src="user.png" height="250" width="250" alt="image1" />
</div>
<div class="card-text">
  <h3>${data[uv].name}</h3>
  <p><span>Email :-</span>
  ${data[uv].email}
  </p>
  <p><span>Phone :-</span>
  ${data[uv].phone}
  </p>
  <p><span>Website :-</span>
  ${data[uv].website}
  </p>
</div>
</div>
`;
};

form.addEventListener("submit", function (event) {
  //   console.log(search.value);
  getcard(search.value);
  event.preventDefault();
});
