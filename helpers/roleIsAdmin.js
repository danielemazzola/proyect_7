const roleIsAdmin = (user) => {
  const role = user.roles.filter((val) => val === 'admin')
  return role.length
}
module.exports = { roleIsAdmin }
