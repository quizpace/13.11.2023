
let sequential_id = 8
let sequential_id_photo = 8

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
  }]

const photos = [
  {
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  }
]

function get() {
  return users;
}
function get_by_id(id) {
  // search and return from the json array the record with the given id
  // if not found return { }
  const the_users = users.filter(user => user.id === id)
  return the_users.length > 0 ? the_users[0] : null;
}
function post(user) {
  const new_user = { ...user, id: ++sequential_id }
  users.push(new_user)
  return new_user
}
function put(id, user) {
  // if id exists then replace all fields with the given user
  // if not -- insert this user (with the correct id)
  const filter_users = users.filter(user => user.id === id)
  if (filter_users.length == 0) {
    // not exist --> create and return
    return post(user)
  }
  // exist --> replace
  const index = users.indexOf(filter_users[0])
  // if the id does not exist, use the id parameter otherwise use the user's id
  users[index] = { id: id, ...user } // allow modify the id
  return users[index]
}
function patch(id, user) {
  // if id exists then update only the fields given in the user
  // if not -- do nothing
  const filter_users = users.filter(user => user.id === id)
  if (filter_users.length == 0) {
    return;
  }
  // exist --> replace
  // filter_fruit = filter (fruit => fruit.name == "orange")
  // filter_fruit == ["orange"]
  // index = ["apple", "banana", "orange"].index(filter_fruit[0]) ==> 2
  // fruits[index] = { ... }

  const index = users.indexOf(filter_users[0])
  // if the id does not exist, use the id parameter otherwise use the user's id
  users[index] = { ...users[index], ...user } // allow modify the id    
  return users[index]
}
function delete_by_id(id) {
  // if id exists then remove it from the array
  const filter_users = users.filter(user => user.id === id)
  if (filter_users.length == 0) {
    return false;
  }
  const index = users.indexOf(filter_users[0])
  users.splice(index, 1)
  return true;
}

function get_photos() {
  return photos;
}
function get_by_id_photo(id) {
  // search and return from the json array the record with the given id
  // if not found return { }
  const the_pics = photos.filter(pic => pic.id === id)
  return the_pics.length > 0 ? the_pics[0] : null;
}
function post_photo(photo) {
  let new_photo = { ...photo, id: ++sequential_id_photo }
  new_photo = { id: sequential_id_photo, ...new_photo }
  photos.push(new_photo)
  return new_photo
}
function put_photo(id, photo) {
  // if id exists then replace all fields with the given user
  // if not -- insert this user (with the correct id)
  const filter_photos = photos.filter(pic => pic.id === id)
  if (filter_photos.length == 0) {
    // not exist --> create and return
    return post_photo(photo)
  }
  // exist --> replace
  const index = photos.indexOf(filter_photos[0])
  // if the id does not exist, use the id parameter otherwise use the user's id
  photos[index] = { id: id, ...photo } // allow modify the id
  return photos[index]
}
function patch_photo(id, photo) {
  // if id exists then update only the fields given in the user
  // if not -- do nothing
  const filter_photos = photos.filter(pic => pic.id === id)
  if (filter_photos.length == 0) {
    return;
  }
  // exist --> replace
  // filter_fruit = filter (fruit => fruit.name == "orange")
  // filter_fruit == ["orange"]
  // index = ["apple", "banana", "orange"].index(filter_fruit[0]) ==> 2
  // fruits[index] = { ... }

  const index = photos.indexOf(filter_photos[0])
  // if the id does not exist, use the id parameter otherwise use the user's id
  photos[index] = { ...photos[index], ...photo } // allow modify the id    
  return photos[index]
}
function delete_by_id_photo(id) {
  // if id exists then remove it from the array
  const filter_photos = photos.filter(pic => pic.id === id)
  if (filter_photos.length == 0) {
    return false;
  }
  const index = photos.indexOf(filter_photos[0])
  photos.splice(index, 1)
  return true;
}

module.exports = { get, get_by_id, post, put, patch, delete_by_id,
  get_photos, get_by_id_photo, post_photo, put_photo, patch_photo, delete_by_id_photo,
                   }
