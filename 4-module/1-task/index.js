function makeFriendsList(friends) {
  let list = document.createElement('ul')
  friends.forEach(element => {
    list.innerHTML += `<li>${element.firstName} ${element.lastName}</li>`
  });
  return list;
}
