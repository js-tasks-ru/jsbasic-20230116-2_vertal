function showSalary(users, age) {
  // так не работает, map возвращает такой же размер массива =(
  // return users.map(user => (user.age <= age) ? `${user.name}, ${user.balance}` : '').join('\n');
  let result = [];
  users.forEach((user) => {
    if (user.age <= age)
      result.push(`${user.name}, ${user.balance}`)
  })
  return result.join('\n')
}
