const isAuthenticate = () => {
  const token = localStorage.getItem('token')
  return token ?? false
}

export default isAuthenticate